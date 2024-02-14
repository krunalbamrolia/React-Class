import React from 'react';
import './Modal.css';

const Modal = ({ closeModal, formData }) => {
    const handleUrlClick = () => {
        if (formData.url) {
            window.open(formData.url, "_blank");
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <span className="close" onClick={closeModal}>&times;</span>
                <h2>Thank you for submitting!</h2>
                <p>Your form has been successfully submitted with the following details:</p>
                <ul>
                    <li><strong>First Name:</strong> {formData.firstName}</li>
                    <li><strong>Last Name:</strong> {formData.lastName}</li>
                    <li><strong>Email:</strong> {formData.email}</li>
                    <li><strong>Contact:</strong> {formData.contact}</li>
                    <li><strong>Gender:</strong> {formData.gender}</li>
                    <li><strong>Languages:</strong> {formData.languages.join(', ')}</li>
                    <li><strong>Resume:</strong> {formData.resume}</li>
                    <li><strong>URL:</strong> <a href={formData.url} onClick={handleUrlClick}>{formData.url}</a></li>
                    <li><strong>Choice:</strong> {formData.choice}</li>
                    <li><strong>About:</strong> {formData.about}</li>
                </ul>
                {formData.resume && <img src={formData.resume} alt="Uploaded Resume" />}
            </div>
        </div>
    );
};

export default Modal;
