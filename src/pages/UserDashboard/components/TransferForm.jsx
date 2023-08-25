


import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const SendTokens = ({ senderSlug }) => {
    const [recipientWalletAddress, setRecipientWalletAddress] = useState('');
    const [amount, setAmount] = useState('');

    const handleSend = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://bc-iv.onrender.com/sendTokens', {
                senderSlug,
                recipientWalletAddress,
                amount
            });

            toast.success(response.data);
        } catch (error) {
            console.error("Error sending tokens:", error);
            toast.error("Failed to send tokens.");
        }
    };

    return (
        <div className="p-6 bg-white rounded shadow">
            <h2 className="text-2xl font-semibold mb-4">Send Tokens</h2>
            <form onSubmit={handleSend}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600 mb-2">Recipient's Wallet Address:</label>
                    <input 
                        type="text" 
                        value={recipientWalletAddress} 
                        onChange={e => setRecipientWalletAddress(e.target.value)} 
                        required 
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600 mb-2">Amount:</label>
                    <input 
                        type="number" 
                        value={amount} 
                        onChange={e => setAmount(e.target.value)} 
                        required 
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                    />
                </div>
                <div>
                    <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200">
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SendTokens;
