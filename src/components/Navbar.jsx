import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import Logo from '../assets/logo';

function Navbar() {
  const navigate = useNavigate(); // Initialize useHistory

  const handleLoginClick = () => {
    navigate('/login'); // Redirect to the "login" page
  };

  return (
    <Container>
      <Logo />
      <div className="tab-menu">
        <Link to="/">Home</Link>
        <div> About us </div>
        <Link to="/Learning">
          <div> Learning </div>
        </Link>
        <Link to="/SignToText">
          <div> Sign to Text </div>
        </Link>
        <div> Text to Sign </div>
      </div>
      <div className="login">
        <button type="button" onClick={handleLoginClick}>
          Login
        </button>
        <button type="button">
          Sign up
        </button>
      </div>
    </Container>
  );
}

const Container = styled.div`
    width: 100vw;
    height: 146px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 22px;

    .tab-menu {
      width: 820px;
      height: 53px;
      display: flex;
      justify-content: space-between;
        align-items: center;
    }

    .login > button {
        width: 165px;
        height: 59px;
        border-radius: 80px;
        font-weight: 600;
        margin: 3.5px;
        border: 2px solid #5be1c7;
        background-color: white;
        font-size: 22px;
        color: #5BE1C7;
    }

    .login > button:first-child {
        background-image: linear-gradient(to right, #5BA5E1, #5BE1C7);
        color: white;
    }


`;

export default Navbar;
