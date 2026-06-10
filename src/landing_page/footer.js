import React from "react";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer
      className="position-relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #020617 0%, #1f0808 40%, #111827 100%)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* BACKGROUND GLOW */}
      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          background: "#ef4444",
          filter: "blur(140px)",
          opacity: "0.1",
          top: "-100px",
          left: "-100px",
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          width: "280px",
          height: "280px",
          background: "#f43f5e",
          filter: "blur(140px)",
          opacity: "0.1",
          bottom: "-120px",
          right: "-100px",
        }}
      ></div>

      <div className="container position-relative py-5">
        <div className="row gy-5">
          
          {/* LOGO + ABOUT */}
          <div className="col-lg-4 col-md-6">
            
            <div className="d-flex align-items-center">
              <img
                src="media/logo.svg"
                alt="logo"
                style={{
                  width: "42px",
                  height: "42px",
                }}
              />

              <h3
                className="fw-bold ms-3 mb-0"
                style={{
                  color: "white",
                }}
              >
                Zerodha
              </h3>
            </div>

            <p
              className="mt-4"
              style={{
                color: "#94a3b8",
                lineHeight: "2",
                maxWidth: "350px",
              }}
            >
              Modern investing and trading platforms designed for millions of
              investors. Fast, secure, and beautifully crafted financial
              experiences.
            </p>

            <p
              style={{
                color: "#64748b",
                fontSize: "0.95rem",
              }}
            >
              © 2010 - 2026 Zerodha Clone. All rights reserved.
            </p>

            {/* SOCIAL ICONS */}
            <div className="d-flex gap-3 mt-4">
              
              {[
                "fa-facebook-f",
                "fa-twitter",
                "fa-linkedin-in",
                "fa-instagram",
              ].map((icon, index) => (
                <a
                  href="/"
                  key={index}
                  className="d-flex justify-content-center align-items-center text-decoration-none"
                  style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "14px",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#cbd5e1",
                    transition: "0.3s",
                  }}
                >
                  <i className={`fa-brands ${icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* COMPANY */}
          <div className="col-lg-2 col-md-6">
            <h5
              className="fw-bold mb-4"
              style={{
                color: "white",
              }}
            >
              Company
            </h5>

            <div className="d-flex flex-column gap-3">
              <Link
                to="/about"
                className="text-decoration-none"
                style={{ color: "#94a3b8" }}
              >
                About
              </Link>

              <Link
                to="/products"
                className="text-decoration-none"
                style={{ color: "#94a3b8" }}
              >
                Products
              </Link>

              <Link
                to="/pricing"
                className="text-decoration-none"
                style={{ color: "#94a3b8" }}
              >
                Pricing
              </Link>

              <Link
                to="/support"
                className="text-decoration-none"
                style={{ color: "#94a3b8" }}
              >
                Careers
              </Link>
            </div>
          </div>

          {/* SUPPORT */}
          <div className="col-lg-3 col-md-6">
            <h5
              className="fw-bold mb-4"
              style={{
                color: "white",
              }}
            >
              Support
            </h5>

            <div className="d-flex flex-column gap-3">
              <a
                href="/"
                className="text-decoration-none"
                style={{ color: "#94a3b8" }}
              >
                Contact Us
              </a>

              <a
                href="/"
                className="text-decoration-none"
                style={{ color: "#94a3b8" }}
              >
                Help Center
              </a>

              <a
                href="/"
                className="text-decoration-none"
                style={{ color: "#94a3b8" }}
              >
                Downloads
              </a>

              <a
                href="/"
                className="text-decoration-none"
                style={{ color: "#94a3b8" }}
              >
                API Documentation
              </a>
            </div>
          </div>

          {/* ACCOUNT */}
          <div className="col-lg-3 col-md-6">
            <h5
              className="fw-bold mb-4"
              style={{
                color: "white",
              }}
            >
              Account
            </h5>

            <div className="d-flex flex-column gap-3">
              <a
                href="/"
                className="text-decoration-none"
                style={{ color: "#94a3b8" }}
              >
                Open Account
              </a>

              <a
                href="/"
                className="text-decoration-none"
                style={{ color: "#94a3b8" }}
              >
                Fund Transfer
              </a>

              <a
                href="/"
                className="text-decoration-none"
                style={{ color: "#94a3b8" }}
              >
                Reports & Statements
              </a>

              <a
                href="/"
                className="text-decoration-none"
                style={{ color: "#94a3b8" }}
              >
                Security & Privacy
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div
          className="mt-5 pt-4 d-flex flex-column flex-lg-row justify-content-between align-items-center"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          
          <p
            className="mb-3 mb-lg-0"
            style={{
              color: "#64748b",
              fontSize: "0.95rem",
            }}
          >
            Investments in securities market are subject to market risks.
          </p>

          <div className="d-flex gap-4">
            <a
              href="/"
              className="text-decoration-none"
              style={{
                color: "#64748b",
                fontSize: "0.95rem",
              }}
            >
              Privacy Policy
            </a>

            <a
              href="/"
              className="text-decoration-none"
              style={{
                color: "#64748b",
                fontSize: "0.95rem",
              }}
            >
              Terms & Conditions
            </a>

            <a
              href="/"
              className="text-decoration-none"
              style={{
                color: "#64748b",
                fontSize: "0.95rem",
              }}
            >
              Disclosures
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;