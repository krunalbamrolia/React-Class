// // FormComponent.js
// import React, { useState, useHistory } from 'react';
// // import { useHistory } from 'react-router-dom';

// const FormComponent = () => {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         // Add more fields as needed
//     });

//     const history = useHistory();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Store form data to local storage or send to server
//         localStorage.setItem('formData', JSON.stringify(formData));
//         // Redirect to the success page
//         history.push('/success');
//     };

//     return (
//         <div>
//             <h1>Registration Form</h1>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="firstName">First Name</label>
//                 <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
//                 {/* Add more input fields for other form data */}
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// };

// export default FormComponent;
