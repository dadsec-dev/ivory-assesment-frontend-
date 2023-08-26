import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'https://bc-iv.onrender.com';

const Invite = () => {
  const [email, setEmail] = useState('');

  const sendInvite = async () => {
    try {
      await axios.post('/invite', { email });
      toast.success('Email invite sent successfully. Check your email!');
    } catch(error) {
      toast.error('Error sending invitation.');
      console.error('Error:', error);//error here
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Send an Invite</h2>
        <input 
          className="border p-2 w-full rounded mb-3" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Enter email to invite" 
        />
        <button 
          className="bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 focus:ring-opacity-50" 
          onClick={sendInvite}
        >
          Send Invite
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Invite;
