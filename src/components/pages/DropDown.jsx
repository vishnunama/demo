// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'; // Create this file for custom styles

const DropDown = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h5>Sidebar</h5>
        <button
          className="btn-close"
          onClick={toggleSidebar}
          aria-label="Close"
        >
          &times;
        </button>
      </div>
      <div className="sidebar-body">
        <ul>
          <li>
            <Link to="/" onClick={toggleSidebar}>Home</Link>
          </li>
          <li>
            <Link to="/PrivacyPolicy" onClick={toggleSidebar}>Privacy Policy</Link>
          </li>
          <li>
            <Link to="/RefundPolicy" onClick={toggleSidebar}>Refund Policy</Link>
          </li>
          <li>
            <Link to="/all_Product" onClick={toggleSidebar}>All Product</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
