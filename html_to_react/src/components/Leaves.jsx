import React from 'react';
import Profile2 from './photos/profile-2.jpeg';
import Profile3 from './photos/profile-3.jpg';
import Profile4 from './photos/profile-4.jpg';

const TeacherLeave = ({ profilePhoto, name, leaveType }) => {
    return (
        <div className="teacher">
            <div className="profile-photo"><img src={profilePhoto} alt={name} /></div>
            <div className="info">
                <h3>{name}</h3>
                <small className="text-muted">{leaveType}</small>
            </div>
        </div>
    );
};

const Leaves = () => {
    return (
        <div className="leaves">
            <h2>Teachers on leave</h2>
            <TeacherLeave profilePhoto={Profile2} name="The Professor" leaveType="Full Day" />
            <TeacherLeave profilePhoto={Profile3} name="Lisa Manobal" leaveType="Half Day" />
            <TeacherLeave profilePhoto={Profile4} name="Himanshu Jindal" leaveType="Full Day" />
        </div>
    );
};

export default Leaves;
