import Profile from './photos/profile-1.jpg';
import React, { useState } from 'react';


const Aside =()=>{

    return(
        <aside>
            <div className="profile">
                <div className="top">
                    <div className="profile-photo">
                        <img src={Profile} />
                        
                    </div>
                    <div className="info">
                        <p>Hey, <b>Alex</b> </p>
                        <small className="text-muted">12102030</small>
                    </div>
                </div>
                <div className="about">
                    <h5>Course</h5>
                    <p>BTech. Computer Science & Engineering</p>
                    <h5>DOB</h5>
                    <p>29-Feb-2024</p>
                    <h5>Contact</h5>
                    <p>9900880999</p>
                    <h5>Email</h5>
                    <p>krunal@gmail.com</p>
                    <h5>Address</h5>
                    <p>Ghost town Road, New York, America</p>
                </div>
            </div>
        </aside>
    )
}

export default Aside