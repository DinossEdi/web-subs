import { render } from "@testing-library/react";
import React, { Component, components } from "react";
import { link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expend-lg">
        <Link to="/" className="navbar-brand">
          Web-Subs
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <link to="/" className="nav-lik">
                Users List
              </link>
            </li>
            <li className="navbar-item">
              <link to="/update" className="nav-lik">
                Edit User
              </link>
            </li>
            <li className="navbar-item">
              <link to="/delete" className="nav-lik">
                delete user
              </link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
