import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Kids from "../../assets/kids.jpg";
import Logo from "../../assets/cn.jpeg";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import Input from '../../Atoms/FormInput'; 
import Error from '../../Atoms/Error'; 
import Button from '../../Atoms/Button';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const storedSignupData = JSON.parse(localStorage.getItem('signupData')) || [];

    const isUserValid = storedSignupData.some(data => data.email === email && data.password === password);

    if (isUserValid) {
      window.location.href = '/dashboard';
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-main ">
      <div className="login-left">
        <img src={Kids} alt="Oswald Team" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="Company Logo" />
          </div>
          <div className="login-center">
            <h2>Welcome back!</h2>
            <p>Please enter your details</p>
            <form onSubmit={handleLogin}>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="pass-input-div">
                <Input
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
              
              <div className="login-center-options">
                <Link to="/forgotpassword" className="forgot-pass-link">
                  Forgot password?
                </Link>
              </div>
              {error && <Error message={error} />}

              <div className="login-center-buttons">
                <Button type='button' onClick={handleLogin}>
                   Log In
                 </Button>
              </div>
            </form>
          </div>
          <p className="login-bottom-p">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
