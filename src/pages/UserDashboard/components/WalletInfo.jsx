import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const WalletInfo = () => {
    const [walletAddress, setWalletAddress] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        const fetchWalletAddress = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/wallet/${slug}`);
                setWalletAddress(response.data.walletAddress);
            } catch (error) {
                console.error("Error fetching wallet address:", error);
                // Handle error accordingly
            }
        };

        fetchWalletAddress();
    }, [slug]);

    return (
        <div>
            {walletAddress ? (
                <div>
                    <h2>Your Wallet Address:</h2>
                    <p>{walletAddress}</p>
                </div>
            ) : (
                <p>Loading wallet address...</p>
            )}
        </div>
    );
};

export default WalletInfo