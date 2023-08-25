import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="bg-blue-900 p-5 shadow-lg">
        <ul className="max-w-5xl m-auto flex flex-row justify-between text-white">
          <li className="hover:text-blue-400">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-blue-400">
            <Link to="/login">Login</Link>
          </li>
          <li className="hover:text-blue-400">
            <Link to="/invite">Send Invite Request</Link>
          </li>
        </ul>
      </nav>

      <main className="p-5 mt-5">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
