import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { motion } from 'framer-motion'; 
import Logout from './Logout'; 

const Login = () => {
  const { loginWithRedirect, isAuthenticated, user, isLoading } = useAuth0();

  const buttonVariants = {
    hover: {
      scale: 1.1, 
      transition: {
        type: 'spring',
        stiffness: 300,
      },
    },
  };

 
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <motion.div
      className="login-container"
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }} 
    >
      {isAuthenticated ? (
        
        <div className="dashboard">
          <h2>Welcome, {user.name}!</h2>
          <h3>Email: {user.email}</h3>
          <Logout /> 
        </div>
      ) : (
        <div>
          <h1>Welcome to My App</h1>
          <p>Please log in to continue</p>
          <motion.button
            className="login-button"
            onClick={loginWithRedirect}
            variants={buttonVariants}
            whileHover="hover"
          >
            Log In
          </motion.button>
        </div>
      )}
    </motion.div>
  );
};

export default Login;
