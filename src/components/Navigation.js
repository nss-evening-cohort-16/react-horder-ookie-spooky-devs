import React from 'react';
import { Link } from 'react-router-dom';
import navlogo from '../assets/navlogo.jpg';
import { signOutUser } from '../api/auth';

export default function Navigation() {
  return (
    <div className="container d-flex justify-content-center py-3">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={navlogo} alt="logo" style={{ width: '100px' }} />
          </Link>
          <div id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/new">
                  New
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/stuff"
                >
                  Stuff
                </Link>
              </li>
              <li className="nav-item">
                <button
                  onClick={signOutUser}
                  type="button"
                  className="btn btn-danger border border-dark"
                >
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
