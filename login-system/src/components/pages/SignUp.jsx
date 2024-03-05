import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Kids from "../../assets/kids.webp";
import Sign from "../../assets/signup.jpg";
import Logo from "../../assets/cn.jpeg";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const existingSignupData = JSON.parse(localStorage.getItem('signupData')) || [];

   const emailExists = existingSignupData.some(data => data.email === email);
    if (emailExists) {
      setError('Email already exists');
      return;
    }

    const newSignupData = [...existingSignupData, { email, password }];
    localStorage.setItem('signupData', JSON.stringify(newSignupData));

    window.location.href = '/'; 
  };

  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Sign} alt="Oswald Team" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="Company Logo" />
          </div>
          <div className="login-center">
            <h2>Sign Up</h2>
            <p>Create your account</p>
            <form onSubmit={handleSignup}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <FaEye onClick={() => setShowPassword(!showPassword)} />
                )}
              </div>
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {error && <h6 style={{ color: 'red' }}>{error}</h6>}
              <div className="login-center-buttons">
                <button type='button' onClick={handleSignup}>
                  Sign Up
                  </button>
              </div>
            </form>
          </div>
          <p className="login-bottom-p">
            Already have an account? <Link to="/">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;