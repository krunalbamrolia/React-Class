// // SuccessComponent.js
// import React, { useEffect, useState } from 'react';

// const SuccessComponent = () => {
//     const [formData, setFormData] = useState(null);

//     useEffect(() => {
//         const storedFormData = localStorage.getItem('formData');
//         if (storedFormData) {
//             setFormData(JSON.parse(storedFormData));
//         }
//     }, []);

//     return (
//         <div>
//             <h1>Registration Successful!</h1>
//             {formData && (
//                 <div>
//                     <h2>User Details</h2>
//                     <p>First Name: {formData.firstName}</p>
//                     {/* Display other form fields similarly */}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default SuccessComponent;
