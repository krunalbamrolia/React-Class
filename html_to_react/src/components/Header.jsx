import logo from './photos/logo.png';
import React, { useState } from 'react';


const Header = () => {
    const [darkTheme, setDarkTheme] = useState(false);

    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
    };

    return (
        <header className={darkTheme ? 'dark-theme' : 'light-theme'}>
            <div className="logo" title="University Management System">
                <img src={logo} alt="UMS Logo" />
                <h2>U<span className="danger">M</span>S</h2>
            </div>
            <div className="navbar">
                <a className="active">
                    <span className="material-icons-sharp">home</span>
                    <h3>Home</h3>
                </a>
                <a>
                    <span className="material-icons-sharp">today</span>
                    <h3>Time Table</h3>
                </a>
                <a>
                    <span className="material-icons-sharp">grid_view</span>
                    <h3>Examination</h3>
                </a>
                <a>
                    <span className="material-icons-sharp">password</span>
                    <h3>Change Password</h3>
                </a>
                <a>
                    <span className="material-icons-sharp">logout</span>
                    <h3>Logout</h3>
                </a>
            </div>
            <div id="profile-btn">
                <span className="material-icons-sharp">person</span>
            </div>
            <div className="theme-toggler" onClick={toggleTheme}>
                <span className={`material-icons-sharp ${darkTheme ? '' : 'active'}`}>light_mode</span>
                <span className={`material-icons-sharp ${darkTheme ? 'active' : ''}`}>dark_mode</span>
            </div>
        </header>
    );
};

export default Header;


