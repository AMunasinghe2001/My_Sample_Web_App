const User = require('../model/Model');
const bcrypt = require('bcryptjs');

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json({ users });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'An error occurred while fetching users.' });
  }
};

const addUser = async (req, res, next) => {
  const { userName, userMobile, userEmail, userPassword, userAgree } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(userPassword, 10);

    const user = new User({
      userName,
      userMobile,
      userEmail,
      userPassword: hashedPassword,
      userAgree,
    });
    await user.save();
    return res.status(201).json({ user });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'An error occurred while adding a user.' });
  }
};

const getById = async (req, res, next) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    return res.status(200).json({ user });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'An error occurred while fetching the user.' });
  }
};

const updateUser = async (req, res, next) => {
  const id = req.params.id;
  const { userName, userMobile, userEmail, userPassword, userAgree } = req.body;

  try {
    const user = await User.findByIdAndUpdate(
      id,
      {
        userName,
        userMobile,
        userEmail,
        userPassword,
        userAgree,
      },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    return res.status(200).json({ user });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'An error occurred while updating the user.' });
  }
};

const deleteUser = async (req, res, next) => {
  const id = req.params.id;

  try {
    const user = await User.findByIdAndRemove(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    return res.status(200).json({ message: 'User successfully deleted.' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'An error occurred while deleting the user.' });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ userEmail: username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.userPassword);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Successful login
    res.status(200).json({ message: 'Login successful', userId: user._id, userName: user.userName });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'An error occurred during login. Please try again.' });
  }
};

module.exports = {
  getAllUsers,
  addUser,
  getById,
  updateUser,
  deleteUser,
  login,
};
