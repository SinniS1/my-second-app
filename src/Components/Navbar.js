import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  static porpTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };
  static defaultProps = {
    country: "in",
    category: "buisiness",
  };

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <h5 className="navbar-brand text-white">
              News Monkey
            </h5>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active text-white" aria-current="page" to="/general">
                    Home
                  </Link>
                </li>
                {/* Catagories */}
                <div className="dropdown mx-3">
                  <button type="button" className="btn btn-dark  btn-sm my-1 mx-2 btn">
                    <Link className="dropdown-item" to="/business">
                      Business
                    </Link>
                  </button>
                  <button type="button" className="btn btn-dark btn-sm my-1 mx-2 btn">
                    <Link className="dropdown-item" to="/entertainment">
                      Entertainment
                    </Link>
                  </button>
                  <button type="button" className="btn btn-dark btn-sm my-1 mx-2 btn">
                    <Link className="dropdown-item" to="/health">
                      Health
                    </Link>
                  </button>
                  <button type="button" className="btn btn-dark btn-sm my-1 mx-2 btn">
                    <Link className="dropdown-item" to="/science">
                      Science
                    </Link>
                  </button>
                  <button type="button" className="btn btn-dark btn-sm my-1 mx-2 btn">
                    <Link className="dropdown-item" to="/sports">
                      Sports
                    </Link>
                  </button>
                  <button type="button" className="btn btn-dark btn-sm my-1 mx-2 btn">
                    <Link className="dropdown-item" to="/technology">
                      Technology
                    </Link>
                  </button>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
