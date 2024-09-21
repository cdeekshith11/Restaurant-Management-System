import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: "", // Dark background color
        padding: "0 1rem",
        marginTop:".2rem",
        borderRadius:"8px" // Padding for better spacing
      }}
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          to="/home"
          style={{ color: "black", fontWeight: "bold" }} // White text color and bold font
        >
          Restaurant
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{ filter: "invert(100%)" }}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/menu"
                style={{ color: "black", marginRight: "1rem" }} // White text color and spacing
              >
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/navbar/booking"
                style={{ color: "black", marginRight: "1rem" }} // White text color and spacing
              >
                Booking
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/yourorders"
                style={{ color: "black" }} // White text color
              >
                My cart
              </Link>
            </li>
          </ul>
          <button
            className="btn btn-danger"
            style={{
              width: "10rem",
              color: "black", // White text color
              border: "none", // Remove border
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
