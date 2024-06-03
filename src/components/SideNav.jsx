import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => (
  <div className="h-screen bg-p6 text-white w-64 p-4">
    <h2 className="text-2xl font-bold mb-6">Zeraki Dashboard</h2>
    <nav>
      <ul>
        <li className="mb-4">
          <Link to="/" className="text-lg hover:text-gray-300">Dashboard</Link>
        </li>
        <li>
          <Link to="/schools" className="text-lg hover:text-gray-300">Schools</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default SideNav;
