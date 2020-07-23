import React from "react";
import { Link } from "react-router-dom";

export default function Confirmation() {
  return (
    <div>
      <header role="banner">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container">
            <img src="img/bao-bistro-white.png" width="200px" />
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExample05"
              aria-controls="navbarsExample05"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarsExample05">
              <ul className="navbar-nav ml-auto pl-lg-5 pl-0">
                <li className="nav-item">
                  <Link to={`/`} className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={`/order`} className="nav-link">
                    Order
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={`/contact`} className="nav-link">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={`/cart`} className="nav-link">
                    Cart
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div>
        <div
          className="slider-item"
          style={{ backgroundImage: 'url("img/bistro-store.jpg")' }}
        >
          <div className="container">
            <div className="row slider-text align-items-center justify-content-center">
              <div className="col-md-8 text-center col-sm-12 ">
                <h1 data-aos="fade-up">Order Confirmed</h1>
                <p data-aos="fade-up">Your order is on the way.</p>
                <Link to={`/`} className="nav-link">
                  <button className="btn btn-success" data-aos="fade-up">
                    Return to Home
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
