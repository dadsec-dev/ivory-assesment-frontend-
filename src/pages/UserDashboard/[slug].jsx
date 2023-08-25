// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // Assuming you use axios for HTTP requests
// import DepositForm from './components/DepositForm';
// import TransactionHistory from './components/TransactionHistory';
// import TransferForm from './components/TransferForm';
// import WalletInfo from './components/WalletInfo';
// import WithdrawForm from './components/WithdrawForm';
// import { useParams } from 'react-router-dom';


// axios.defaults.baseURL = 'http://localhost:5000';

// const UserDashboard = () => {
//   const [balance, setBalance] = useState(0);
//   const { slug } = useParams();

  
//   useEffect(() => {
//     // Fetch the user's balance when the component mounts
//     const fetchBalance = async () => {
//       try {
//         const response = await axios.get(`/user/balance/${slug}`);
//         setBalance(response.data.balance);
//       } catch (error) {
//         console.error("Error fetching balance:", error);
//       }
//     };

//     fetchBalance();
//   }, [slug]);

//   return (
//     <div>
//         <h1>Welcome to Your Dashboard</h1>
//         <h2>Your Current Balance: ${balance}</h2>

//         <DepositForm />
//         <TransactionHistory />
//        <TransferForm senderSlug={slug} />
//         <WalletInfo />
//         <WithdrawForm />
//     </div>
//   );
// }

// export default UserDashboard;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import DepositForm from './components/DepositForm';
import TransactionHistory from './components/TransactionHistory';
import TransferForm from './components/TransferForm';
import WalletInfo from './components/WalletInfo';
// import WithdrawForm from './components/WithdrawForm';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'http://localhost:5000';

const UserDashboard = () => {
  const [balance, setBalance] = useState(0);
  const [userInfo, setUserInfo] = useState({ name: '', role: '' });
  const { slug } = useParams();

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get(`/user/balance/${slug}`);
        setBalance(response.data.balance);
        toast.success('Balance fetched successfully!');
      } catch (error) {
        console.error("Error fetching balance:", error);
        toast.error('Error fetching balance. Please try again.');
      }
    };

    fetchBalance();

    const fetchUserInfo = async () => {
        try {
          const response = await axios.get(`/user/info/${slug}`);
          setUserInfo(response.data);
          toast.success('User info fetched successfully!');
        } catch (error) {
          console.error("Error fetching user info:", error);
          toast.error('Error fetching user info. Please try again.');
        }
      };
      fetchUserInfo();
  }, [slug]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Welcome to Your Dashboard, {userInfo.name}</h1> 
        <h2 className="text-xl mb-8">Your Current Balance: ${balance}</h2>
        <p className="text-md mb-8">Role: {userInfo.role}</p>

        <div className="flex">
          <main className="flex-1 pr-8">
            {/* <div className="bg-white p-6 mb-6 rounded shadow">
              <DepositForm />
            </div> */}
            <div className="bg-white p-6 mb-6 rounded shadow">
              <TransferForm senderSlug={slug} />
            </div>
            {/* <div className="bg-white p-6 rounded shadow">
              <WithdrawForm />
            </div> */}
          </main>

          <aside className="w-1/3 space-y-6">
            <div className="bg-white p-6 rounded shadow">
              <WalletInfo />
            </div>
            <div className="bg-white p-6 rounded shadow">
              <TransactionHistory />
            </div>
          </aside>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default UserDashboard;

