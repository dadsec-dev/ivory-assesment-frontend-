// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:5000';

// const Login = () => {
//     const navigate = useNavigate();

//     const [formData, setFormData] = useState({
//         email: '',
//         password: ''
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
//             const response = await axios.post('/login', formData);

//             if (response.data && response.data.slug) {
//                 // Navigate to the user's unique dashboard using the returned slug.
//                 navigate(`/userDashboard/${response.data.slug}`);
//             } else {
//                 alert('Error logging in. Please try again.');
//             }
//         } catch (error) {
//             console.error("Error logging in:", error);
//             alert('Error logging in. Please try again.');
//         }
//     };

//     return (
//         <div>
//             <h1>Login</h1>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Email:</label>
//                     <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Password:</label>
//                     <input
//                         type="password"
//                         name="password"
//                         value={formData.password}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <button type="submit">Login</button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default Login;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'http://localhost:5000';

const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
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
            const response = await axios.post('/login', formData);

            if (response.data && response.data.slug) {
                toast.success('Logged in successfully!');
                // Navigate to the user's unique dashboard using the returned slug.
                navigate(`/userDashboard/${response.data.slug}`);
            } else {
                toast.error('Error logging in. Please try again.');
            }
        } catch (error) {
            console.error("Error logging in:", error);
            toast.error('Error logging in. Please try again.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                <form onSubmit={handleSubmit}>
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
                    <div>
                        <button 
                            className="bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                            type="submit"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;
