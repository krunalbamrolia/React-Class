import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import CardAdd from './pages/CardAdd';

const NavBar = ({ onAddCard }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showLogoutMessage, setShowLogoutMessage] = useState(false);

  const handleLogout = () => {
    setShowLogoutMessage(true);

    setTimeout(() => {
      window.location.href = '/';
    }, 1000);
  };

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogoutMessage(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [showLogoutMessage]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to={'/dashboard'} className="navbar-brand">Dashboard</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to={'/cardview'} className="nav-item nav-link">View</Link>
            <button className="nav-item nav-link btn btn-link" onClick={openPopup}>Add-Card</button>
            <button className="nav-item nav-link btn btn-link" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </nav>
      {showPopup && <CardAdd onAddCard={onAddCard} onClose={closePopup} />}
      {showLogoutMessage && (
        <div className="alert alert-info" role="alert" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '10' }}>
          <h2>Thank you for visiting again!</h2>
        </div>
      )}
    </>
  );
}

export default NavBar;

