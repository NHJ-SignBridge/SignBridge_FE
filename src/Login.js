import React from 'react';
import LoginLayout from './LoginLayout';
import './Login.css';
import loginImage from './images/login.jpg';

function Login() {
  return (
    <LoginLayout>
      <div className="login-container">
        <div className="login-content">
          {/* Your login form and content */}
        </div>
        <div className="login-image">
          <img src={loginImage} alt="Login" />
        </div>
      </div>
    </LoginLayout>
  );
}

export default Login;
