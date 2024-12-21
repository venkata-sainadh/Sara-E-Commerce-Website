import React from 'react';
import { FaSearch, FaShoppingCart, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        <a className="navbar-brand" href="/"> 
          <img src="logo.png" alt="Logo" width="40" /> Sara
        </a>
        <div className="input-group search-bar">
          <input type="text" className="form-control" placeholder="Search" />
          <button className="btn btn-outline-secondary">
            <FaSearch />
          </button>
        </div>
        <div className="navbar-icons">
          <a href="/cart"><FaShoppingCart /> Cart</a>
          <a href="/profile"><FaUserCircle /> Profile</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
