import React from "react";
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top"
      style={{
        background: "rgba(26,5,5,0.85)",
        backdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "14px 0",
        zIndex: "999",
      }}
    >
      <div className="container">
        
        {/* LOGO */}
        <Link
          className="navbar-brand d-flex align-items-center"
          to="/"
        >
          <img
            src="/media/logo.svg"
            alt="logo"
            style={{
              width: "38px",
              height: "38px",
              objectFit: "contain",
            }}
          />

          <span
            className="ms-3 fw-bold"
            style={{
              fontSize: "1.4rem",
              color: "white",
              letterSpacing: "0.5px",
            }}
          >
            Zerodha
          </span>
        </Link>

        {/* MOBILE TOGGLE */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <i
            className="fa-solid fa-bars"
            style={{
              color: "white",
              fontSize: "1.4rem",
            }}
          ></i>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            
            {/* MENU ITEMS */}
            {[
              { name: "Signup", path: "/signup" },
              { name: "About", path: "/about" },
              { name: "Products", path: "/products" },
              { name: "Pricing", path: "/pricing" },
              { name: "Support", path: "/support" },
            ].map((item, index) => (
              <li className="nav-item" key={index}>
                <Link
                  className="nav-link px-4 py-2"
                  to={item.path}
                  style={{
                    color: "#cbd5e1",
                    fontWeight: "500",
                    borderRadius: "12px",
                    transition: "0.3s",
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* CTA BUTTON */}
            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <Link
                to="/signup"
                className="btn px-4 py-2"
                style={{
                  background:
                    "linear-gradient(135deg, #ef4444 0%, #f43f5e 100%)",
                  color: "white",
                  borderRadius: "14px",
                  fontWeight: "600",
                  border: "none",
                  boxShadow: "0 10px 30px rgba(59,130,246,0.35)",
                }}
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;