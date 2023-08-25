import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { useParams } from 'react-router-dom';

axios.defaults.baseURL = 'http://localhost:5000';

const AdminDashboard = () => {
    // const { slug } = useParams();
    const [emailToInvite, setEmailToInvite] = useState('');
    const [allUsers, setAllUsers] = useState([]);

    const handleInvite = async () => {
        try {
            const response = await axios.post('/invite', { email: emailToInvite });
            if (response.data.success) {
                alert('Invitation sent successfully!');
            } else {
                alert('Error sending the invitation. Please try again.');
            }
        } catch (error) {
            console.error('Error inviting user:', error);
            alert('Error inviting user. Please try again.');
        }
    };

    async function toggleUserStatus(userId, is_active) {
        try {
            // Convert the boolean is_active to a corresponding string "enabled" or "disabled"
            const statusString = is_active ? "enabled" : "disabled";
          
            const response = await fetch("http://localhost:5000/admin/toggle-user-status", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userId, status: statusString }),  // Send status as a string
            });
    
            const data = await response.json();
    
            if (response.ok) {
                alert(data.message);
                fetchAllUsers();  // Fetch users again to reflect the new status on the frontend
            } else {
                alert(data.error);
            }
        } catch (error) {
            console.error("Error toggling user status:", error);
        }
    }
    

    const fetchAllUsers = async () => {
        try {
            const response = await axios.get('/admin/list-users'); 
            if (response.data) {
                setAllUsers(response.data.users);
            }
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    useEffect(() => {
        fetchAllUsers();
    }, []);

    return (
        <div className="p-8">
            <h1 className="text-2xl mb-4">Welcome, Admin!</h1>

            <div className="my-4">
                <h2 className="text-xl mb-2">Invite New User</h2>
                <div className="flex items-center space-x-4">
                    <input 
                        type="email" 
                        placeholder="Enter email to invite" 
                        value={emailToInvite} 
                        onChange={e => setEmailToInvite(e.target.value)}
                        className="p-2 border rounded" 
                    />
                    <button onClick={handleInvite} className="bg-blue-500 text-white p-2 rounded">Invite</button>
                </div>
            </div>

            <div className="my-4">
                <h2 className="text-xl mb-2">All Registered Users</h2>
                <table className="min-w-full bg-white border rounded">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Email</th>
                            <th className="py-2 px-4 border-b">Full Name</th>
                            <th className="py-2 px-4 border-b">Role</th>
                            <th className="py-2 px-4 border-b">Balance</th>
                            <th className="py-2 px-4 border-b">Wallet Address</th>
                            <th className="py-2 px-4 border-b">Status</th>
                            <th className="py-2 px-4 border-b">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allUsers.map(user => (
                            <tr key={user.id}>
                                <td className="py-2 px-4 border-b">{user.email}</td>
                                <td className="py-2 px-4 border-b">{user.full_name}</td>
                                <td className="py-2 px-4 border-b">{user.role}</td>
                                <td className="py-2 px-4 border-b">{user.balance}</td>
                                <td className="py-2 px-4 border-b">{user.walletAddress}</td>
                                <td className="py-2 px-4 border-b">{user.is_active ? 'Enabled' : 'Disabled'}</td>
                                <td className="py-2 px-4 border-b">
                                    <button 
                                        onClick={() => toggleUserStatus(user.id, !user.is_active)} 
                                        className={`p-2 rounded ${user.is_active ? 'bg-red-500' : 'bg-green-500'} text-white`}>
                                        {user.is_active ? 'Disable' : 'Enable'}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminDashboard;
