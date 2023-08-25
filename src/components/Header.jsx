import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div>
        <nav>
            <h3 className='text-6xl'>Ivory-Pay</h3>

        <ul className=''>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
        </nav>
    </div>
  )
}

export default Header