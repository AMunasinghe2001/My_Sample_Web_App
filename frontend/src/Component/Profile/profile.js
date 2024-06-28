import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import './profile.css';

export default function UpdateUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    fathername: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await axios.get(`http://localhost:8000/api/get/${id}`);
        const userData = response.data.user;
        setUser(userData);
      } catch (error) {
        console.log(error);
        toast.error('Failed to fetch user data.');
      }
    }
    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8000/api/update/${id}`, user);
      if (response.data.success) {
        toast.success(response.data.message);
        navigate('/'); // Redirect to homepage after successful update
      }
    } catch (error) {
      console.log(error);
      toast.error('An error occurred while updating the user.');
    }
  };

  return (
    <div className="container">
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={handleOnSubmit}>
            <div className="modal-header">
              <h4 className="modal-title">Update User</h4>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Name</label>
                <input type="text" value={user.name} name="name" onChange={handleChange} className="form-control" required />
              </div>
              <div className="form-group">
                <label>Father Name</label>
                <input type="text" value={user.fathername} name="fathername" onChange={handleChange} className="form-control" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" value={user.email} name="email" onChange={handleChange} className="form-control" required />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="text" value={user.phone} name="phone" onChange={handleChange} className="form-control" required />
              </div>
            </div>
            <div className="modal-footer">
              <input type="button" className="btn btn-default" value="Cancel" onClick={() => navigate('/')} />
              <input type="submit" className="btn btn-primary" value="Update" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
