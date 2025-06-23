import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Button({ username, password }) {
  const navigate = useNavigate();

  function handleLogin() {
    if (username && password) {
      navigate('/home');
    } else {
      alert('Please enter both username and password.');
    }
  }

  return (
    <button className="Login-button" onClick={handleLogin}>
      Login
    </button>
  );
}

export default Button;
