import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Web-Subs
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Users List
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/update" className="nav-link">
                Edit User
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/delete" className="nav-link">
                Delete User
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/add" className="nav-link">
                Add User
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
