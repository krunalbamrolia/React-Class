import React from 'react';

const DoubleClickPopup = ({ cartoon, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <div className="insta-post">
          <div className="insta-header">
            <img src={cartoon.image} alt={cartoon.title} className="insta-avatar" />
            <h3 className="insta-username">{cartoon.title}</h3>
            <span className="close-btn" onClick={onClose}>&times;</span>
          </div>
          <div className="insta-image-container">
            <img src={cartoon.image} alt={cartoon.title} className="insta-image" />
          </div>
          <div className="insta-description">
            <p>{cartoon.description}</p>
          </div>
          <div className="insta-actions">
            <span className="insta-action like">&#9825; Like</span>
            <span className="insta-action comment">&#128172; Comment</span>
            <span className="insta-action share">&#128279; Share</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoubleClickPopup;
