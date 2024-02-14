
import React, { useState } from 'react';
import './style.css';
import Modal from './SuccessPage';

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contact: '',
        gender: '',
        languages: [],
        resume: '',
        url: '',
        choice: '',
        about: '',
    });

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? (checked ? [...prevData[name], value] : prevData[name].filter(lang => lang !== value)) : value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        openModal();
    };

    const handleReset = () => {
      setFormData({
          firstName: '',
          lastName: '',
          email: '',
          contact: '',
          gender: '',
          languages: [],
          resume: '',
          url: '',
          choice: '',
          about: '',
      });
    };

    return (
        <div className="App">
            <h1>Form in React</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstname">First Name*</label>
                <input
                    type="text"
                    name="firstName"
                    id="firstname"
                    placeholder="Enter First Name"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                /><br />

                <label htmlFor="lastname">Last Name*</label>
                <input
                    type="text"
                    name="lastName"
                    id="lastname"
                    placeholder="Enter Last Name"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                /><br />

                <label htmlFor="email">Enter Email* </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                /><br />

                <label htmlFor="tel">Contact*</label>
                <input
                    type="tel"
                    name="contact"
                    id="tel"
                    placeholder="Enter Mobile number"
                    required
                    value={formData.contact}
                    onChange={handleInputChange}
                /><br />

                <label htmlFor="gender">Gender*</label>
                <div>
                    <input
                        type="radio"
                        name="gender"
                        value="Male"
                        id="male"
                        checked={formData.gender === 'Male'}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="male">Male</label>

                    <input
                        type="radio"
                        name="gender"
                        value="Female"
                        id="female"
                        checked={formData.gender === 'Female'}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="female">Female</label>

                    <input
                        type="radio"
                        name="gender"
                        value="Other"
                        id="other"
                        checked={formData.gender === 'Other'}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="other">Other</label>
                </div><br />

                <label htmlFor="lang">Your best Subject</label>
                <div>
                    <input
                        type="checkbox"
                        name="languages"
                        value="English"
                        id="english"
                        checked={formData.languages.includes('English')}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="english">English</label>

                    <input
                        type="checkbox"
                        name="languages"
                        value="Maths"
                        id="maths"
                        checked={formData.languages.includes('Maths')}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="maths">Maths</label>

                    <input
                        type="checkbox"
                        name="languages"
                        value="Physics"
                        id="physics"
                        checked={formData.languages.includes('Physics')}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="physics">Physics</label>
                </div><br />

                <label htmlFor="file">Upload Resume*</label>
                <input
                    type="file"
                    name="resume"
                    id="file"
                    placeholder="Enter Upload File"
                    required
                    onChange={handleInputChange}
                /><br />

                <label htmlFor="url">Enter URL*</label>
                <input
                    type="url"
                    name="url"
                    id="url"
                    placeholder="Enter url"
                    required
                    value={formData.url}
                    onChange={handleInputChange}
                /><br />

                <label>Select your choice</label>
                <select
                    name="choice"
                    id="select"
                    value={formData.choice}
                    onChange={handleInputChange}
                >
                    <option value="" disabled>Select your Ans</option>
                    <optgroup label="Beginners">
                        <option value="HTML">HTML</option>
                        <option value="CSS">CSS</option>
                        <option value="JavaScript">JavaScript</option>
                    </optgroup>
                    <optgroup label="Advanced">
                        <option value="React">React</option>
                        <option value="Node">Node</option>
                        <option value="Express">Express</option>
                        <option value="MongoDB">MongoDB</option>
                    </optgroup>
                </select><br />

                <label htmlFor="about">About</label>
                <textarea
                    name="about"
                    id="about"
                    cols="30"
                    rows="10"
                    placeholder="About yourself"
                    required
                    value={formData.about}
                    onChange={handleInputChange}
                ></textarea><br /><br />

                <button type="submit">Submit</button>
                <button type="reset" onClick={handleReset}>Reset</button>
            </form>

            {isModalOpen && <Modal closeModal={closeModal} formData={formData} />}
        </div>
    );
};

export default App;

