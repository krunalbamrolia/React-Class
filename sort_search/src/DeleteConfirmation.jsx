import React from 'react';

function DeleteConfirmation({ onConfirm, onCancel }) {
  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Are you sure you want to delete this product?</h2>
        <button onClick={onConfirm}>Yes, Delete</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default DeleteConfirmation;
