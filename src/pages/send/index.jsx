import React, { useState } from 'react';
import axios from 'axios';

const SendTokens = ({ senderSlug }) => {
    const [recipientSlug, setRecipientSlug] = useState('');
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');

    const handleSend = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://bc-iv.onrender.com/sendTokens', {
                senderSlug,
                recipientSlug,
                amount
            });

            setMessage(response.data);
        } catch (error) {
            console.error("Error sending tokens:", error);
            setMessage("Failed to send tokens.");
        }
    };

    return (
        <div>
            <h2>Send Tokens</h2>
            <form onSubmit={handleSend}>
                <div>
                    <label>Recipient's Wallet Address:</label>
                    <input type="text" value={recipientSlug} onChange={e => setRecipientSlug(e.target.value)} required />
                </div>
                <div>
                    <label>Amount:</label>
                    <input type="number" value={amount} onChange={e => setAmount(e.target.value)} required />
                </div>
                <div>
                    <button type="submit">Send</button>
                </div>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default SendTokens;
