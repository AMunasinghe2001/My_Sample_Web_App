import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(true); // To manage loading state
  const userId = localStorage.getItem('userId'); // Retrieve userId from localStorage

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        if (userId) {
          const response = await axios.get(`http://localhost:5001/users/${userId}`);
          const user = response.data.user; // Assuming your API returns user object in data.user
          setUserName(user.userName);
          setLoading(false); // Set loading to false once data is fetched
        }
      } catch (error) {
        console.error('Error fetching user:', error);
        setLoading(false); // Set loading to false on error as well
      }
    };

    fetchUserName();
  }, [location, userId]);

  if (loading) {
    return <div>Loading...</div>; // Display loading indicator while fetching data
  }

  return (
    <div>
      <h1>Welcome to You, {userName || 'User'}!</h1>
    </div>
  );
};

export default Home;
