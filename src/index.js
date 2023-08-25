import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Login } from './pages/Login';
import Layout from './pages/Layout';
import Home from './pages/Home/Home';
// import NoPage from './pages/NoPage/NoPage';
import Invite from './pages/Invite/Invite';
import Register from './pages/register/[slug]';
import UserDashboard from './pages/UserDashboard/[slug]';
import Login from './pages/Login/Login';
import AdminDashboard from './pages/AdminDashboard/[slug]';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="invite" element={<Invite />} />
          {/* <Route path="*" element={<NoPage />} /> */}
          <Route path='/register/:token' element={<Register />} />
          <Route path='/userDashBoard/:slug' element={<UserDashboard />} />
          <Route path='/adminDashBoard/:slug' element={<AdminDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
