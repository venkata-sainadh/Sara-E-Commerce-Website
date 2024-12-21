import React from 'react';
import { FaSearch, FaShoppingCart, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        <a className="navbar-brand" href="/"> 
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2Fprofile-user-round-white-icon-symbol-png--686236061986678319%2F&psig=AOvVaw3kftGGjakqlTpi9hqU0rIO&ust=1734859209263000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJi1wcbEuIoDFQAAAAAdAAAAABAE" alt="Logo" width="40" /> Sara
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
