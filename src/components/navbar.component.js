import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Employee Test App
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Seznam zaměstnanců
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">
                Nový zaměstnanec
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
