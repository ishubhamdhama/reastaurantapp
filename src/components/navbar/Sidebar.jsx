import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-brand">
        <h2>Admin</h2>
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link to="/dashboard">
            <FontAwesomeIcon icon={faHome} /><span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="#">
            <FontAwesomeIcon icon={faUser} /><span>Users</span>
          </Link>
        </li>
        <li>
          <Link to="#">
            <FontAwesomeIcon icon={faCog} /><span>Settings</span>
          </Link>
        </li>
        <li>
          <Link to="#">
            <FontAwesomeIcon icon={faSignOutAlt} /><span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
