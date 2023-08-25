import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'http://localhost:5000';

const Register = () => {
    const {  token } = useParams();
    console.log("Extracted token:", token);

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        fullName: '',
        adminSecret: '',
        token: token  
    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const response = await axios.post('/register', formData);
    
            if (response.data && response.data.slug) {
                toast.success('Successfully registered!');
    
                // Check the user role to navigate them to the correct dashboard
                if (response.data.role === "admin") {
                    navigate(`/adminDashboard/${response.data.slug}`);
                } else  {
                    navigate(`/userDashboard/${response.data.slug}`);
                }
            } else {
                toast.error('Error registering. Please try again.');
            }
    
        } catch (error) {
            console.error("Error registering:", error);
            toast.error('Error registering. Please try again.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h1 className="text-2xl font-bold mb-4">Register</h1>
                <form onSubmit={handleSubmit}>
                    {/* Email Input Field */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email:</label>
                        <input
                            className="mt-1 p-2 w-full border rounded"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
    
                    {/* Password Input Field */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Password:</label>
                        <input
                            className="mt-1 p-2 w-full border rounded"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
    
                    {/* Full Name Input Field */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Full Name:</label>
                        <input
                            className="mt-1 p-2 w-full border rounded"
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
    
                    {/* Admin Secret Input Field */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Admin Secret:</label>
                        <input
                            className="mt-1 p-2 w-full border rounded"
                            type="password"
                            name="adminSecret"
                            value={formData.adminSecret}
                            onChange={handleInputChange}
                        />
                    </div>
    
                    <div>
                        <button 
                            className="bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                            type="submit"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;




// // import React, { useState } from 'react';
// // import { useNavigate, useParams } from 'react-router-dom';
// // import axios from 'axios';

// // axios.defaults.baseURL = 'http://localhost:5000';

// // const Register = () => {
// //     const { slug } = useParams();
// //     console.log(slug);
// //     const navigate = useNavigate();

// //     const [formData, setFormData] = useState({
// //         email: '',
// //         password: '',
// //         fullName: ''
// //     });

// //     // Update formData state whenever an input changes
// //     const handleInputChange = (event) => {
// //         const { name, value } = event.target;

// //         setFormData(prevState => ({
// //             ...prevState,
// //             [name]: value
// //         }));
// //     };

// //     const handleSubmit = async (event) => {
// //         event.preventDefault();
    
// //         try {
// //             const response = await axios.post('/register', { 
// //                 ...formData,
// //                 token: slug 
// //             });
    
// //             if (response.data && response.data.slug) {
// //                 // Navigate to the user dashboard with the slug.
// //                 navigate(`/userDashboard/${response.data.slug}`);
// //             } else {
// //                 alert('Error registering. Please try again.');
// //             }
    
// //         } catch (error) {
// //             console.error("Error registering:", error);
// //             alert('Error registering. Please try again.');
// //         }
// //     };
    

// //     return (
// //         <div>
// //             <h1>Register</h1>
// //             <form onSubmit={handleSubmit}>
// //                 <div>
// //                     <label>Email:</label>
// //                     <input
// //                         type="email"
// //                         name="email"
// //                         value={formData.email}
// //                         onChange={handleInputChange}
// //                         required
// //                     />
// //                 </div>
// //                 <div>
// //                     <label>Password:</label>
// //                     <input
// //                         type="password"
// //                         name="password"
// //                         value={formData.password}
// //                         onChange={handleInputChange}
// //                         required
// //                     />
// //                 </div>
// //                 <div>
// //                     <label>Full Name:</label>
// //                     <input
// //                         type="text"
// //                         name="fullName"
// //                         value={formData.fullName}
// //                         onChange={handleInputChange}
// //                         required
// //                     />
// //                 </div>
// //                 <div>
// //                     <button type="submit">Register</button>
// //                 </div>
// //             </form>
// //         </div>
// //     )
// // }

// // export default Register;


// import React, { useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// axios.defaults.baseURL = 'http://localhost:5000';

// const Register = () => {
//     const { slug } = useParams();
//     const navigate = useNavigate();

//     const [formData, setFormData] = useState({
//         email: '',
//         password: '',
//         fullName: ''
//     });

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;

//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
    
//         try {
//             const response = await axios.post('/register', { 
//                 ...formData,
//                 token: slug 
//             });
    
//             if (response.data && response.data.slug) {
//                 toast.success('Successfully registered!');
//                 navigate(`/userDashboard/${response.data.slug}`);
//             } else {
//                 toast.error('Error registering. Please try again.');
//             }
    
//         } catch (error) {
//             console.error("Error registering:", error);
//             toast.error('Error registering. Please try again.');
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">
//             <div className="bg-white p-8 rounded shadow-md w-96">
//                 <h1 className="text-2xl font-bold mb-4">Register</h1>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-4">
//                         <label className="block text-sm font-medium text-gray-700">Email:</label>
//                         <input
//                             className="mt-1 p-2 w-full border rounded"
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-sm font-medium text-gray-700">Password:</label>
//                         <input
//                             className="mt-1 p-2 w-full border rounded"
//                             type="password"
//                             name="password"
//                             value={formData.password}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-sm font-medium text-gray-700">Full Name:</label>
//                         <input
//                             className="mt-1 p-2 w-full border rounded"
//                             type="text"
//                             name="fullName"
//                             value={formData.fullName}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </div>
//                     <div>
//                         <button 
//                             className="bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//                             type="submit"
//                         >
//                             Register
//                         </button>
//                     </div>
//                 </form>
//             </div>
//             <ToastContainer />
//         </div>
//     );
// };

// export default Register;
