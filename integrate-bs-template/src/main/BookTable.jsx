import React, { useState } from 'react';

const BookTable = () => {
  const [formData, setFormData] = useState({
    location: '',
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    numberOfPeople: 1,
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleAddPerson = () => {
    setFormData({
      ...formData,
      numberOfPeople: formData.numberOfPeople + 1
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section id="book-a-table" className="book-a-table">
      <div className="container max-width-container">
        <div className="section-title">
          <h2>Book a <span>Table</span></h2>
        </div>

        <form onSubmit={handleSubmit} role="form" className="email-form">
          <div className="row">
            <div className="col-lg-4 col-md-12 form-group">
              <select className="form-control"
                name="location"
                value={formData.location}
                onChange={handleChange}>
                <option value="">Select Location</option>
                <option value="indoor">Indoor</option>
                <option value="outdoor">Outdoor</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-6 form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 form-group">
              <input
                type="text"
                className="form-control"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-6 form-group">
              <input
                type="text"
                name="date"
                className="form-control"
                placeholder="Date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 form-group">
              <input
                type="text"
                className="form-control"
                name="time"
                placeholder="Time"
                value={formData.time}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-6 form-group">
              <input
                type="number"
                className="form-control"
                name="people"
                placeholder="Number of people"
                value={formData.numberOfPeople}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 form-group">
              <textarea
                className="form-control"
                name="message"
                rows="5"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          {/* Dynamic person details input fields */}
          <div className="row">
            {[...Array(formData.numberOfPeople)].map((_, index) => (
              <div key={index} className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    name={`person${index + 1}`}
                    className="form-control"
                    placeholder={`Person ${index + 1} Name`}
                    onChange={handleChange}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Button to add more person details input fields */}
          <div className="row">
            <div className="col-lg-12 form-group">
              <button onClick={handleAddPerson}>Add Person</button>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 form-group">
              <div className="text-center">
                <button type="reset">Send Message</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default BookTable;

