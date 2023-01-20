import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div>
      <header className="header-public">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <h2> CRYPTO</h2>
            <ul className="navbar-nav mr-auto" id="ul-nav">
              {/*  <li className="nav-item">
              <Link to="/admin/user/index" className="nav-link">Liste Users</Link>
            </li>

           */}
              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </li>
              
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
