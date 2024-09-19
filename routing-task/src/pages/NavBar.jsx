import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
      <NavLink className="navbar-brand bold " href="#">
        Navbar
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item ">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/menu">
              Menu
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/cart">
              shopping cart
            </NavLink>
          </li> 
          <li className="nav-item">
            <NavLink className="nav-link" to="/posts">
              Posts
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Login 
            </NavLink>
          </li>
        </ul>
      </div>
        <NavLink to={"/cart"} className="badge bg-danger badge-rounded p-3 badge-primary ml-auto ">{props.dishs.filter((dish) => dish.isSelected).length || 0}</NavLink>
    </nav>
  );
};

export default NavBar;
