const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Ensure this path is correct

router.post('/login', userController.login);
router.get('/users', userController.getAllUsers);
router.post('/users', userController.addUser);
router.get('/users/:id', userController.getById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
