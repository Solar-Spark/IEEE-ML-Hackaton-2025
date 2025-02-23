import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const navigateToSearch = () => {
    navigate('/search');
  };

  return (
    <div className="home-container">
      <h1>Welcome to IEEE ML Hackathon 2025</h1>
      <button onClick={navigateToSearch}>Go to Search</button>
    </div>
  );
};

export default Home;
