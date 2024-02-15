import React, { useState } from 'react';

const Form = ({ addCard }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCard = {
      id: Math.random(),
      title: title,
      content: content,
      image: URL.createObjectURL(image),
    };

    addCard(newCard);
    setTitle('');
    setContent('');
    setImage(null);
  };

  const handleFileChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Enter content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        required
      />
      <button type="submit">Add Card</button>
    </form>
  );
};

export default Form;
