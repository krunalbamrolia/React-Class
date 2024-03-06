import React, { useState } from 'react';

const CardAdd = ({ onAddCard, onClose }) => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCard = {
      title: title,
      image: image,
      description: description
    };
    onAddCard(newCard);
    setTitle('');
    setImage('');
    setDescription('');
    onClose(); 
  };

  return (
    <div style={styles.container}>
      <div style={styles.modal}>
        <button style={styles.closeButton} onClick={onClose}>&times;</button> {/* Close button */}
        <div style={styles.modalContent}>
          <h2 style={styles.title}>Add New Card</h2>
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="title">Title:</label>
              <input type="text" id="title" style={styles.input} value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="description">Description:</label>
              <textarea id="description" style={{ ...styles.input, ...styles.textarea }} value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="imageFile">Upload Image:</label>
              <input type="file" id="imageFile" style={styles.fileInput} onChange={(e) => setImage(e.target.files[0])} />
            </div>
            <button type="submit" style={styles.button}>Add Card</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  modal: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    position: 'relative',
    width: '400px',
  },
  modalContent: {
    marginBottom: '20px',
  },
  title: {
    margin: '0 0 20px',
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
    marginBottom: '10px',
  },
  textarea: {
    resize: 'vertical',
  },
  fileInput: {
    display: 'block',
    marginBottom: '10px',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
    display: 'block',
  },
  closeButton: {
    position: 'absolute',
    top: '5px',
    right: '5px',
    backgroundColor: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontSize: '20px',
  },
};

export default CardAdd;
