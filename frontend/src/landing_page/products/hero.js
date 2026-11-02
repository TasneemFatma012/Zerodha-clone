import React from "react";

function Hero() {
  return (
    <section
      className="container-fluid position-relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #1f0808 0%, #111827 35%, #312e81 70%, #7c3aed 100%)",
        minHeight: "90vh",
      }}
    >
      {/* BACKGROUND GLOW */}
      <div
        style={{
          position: "absolute",
          width: "350px",
          height: "350px",
          background: "#ef4444",
          filter: "blur(150px)",
          opacity: "0.22",
          top: "-80px",
          left: "-80px",
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          width: "320px",
          height: "320px",
          background: "#f43f5e",
          filter: "blur(150px)",
          opacity: "0.22",
          bottom: "-80px",
          right: "-80px",
        }}
      ></div>

      <div className="container position-relative">
        <div
          className="d-flex flex-column justify-content-center align-items-center text-center"
          style={{
            minHeight: "90vh",
          }}
        >
          
          {/* BADGE */}
          <div
            className="d-inline-flex align-items-center px-4 py-2"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "50px",
              color: "#c4b5fd",
              backdropFilter: "blur(14px)",
              fontWeight: "600",
            }}
          >
            <i className="fa-solid fa-bolt me-2"></i>
            Modern Trading Experience
          </div>

          {/* TITLE */}
          <h1
            className="fw-bold mt-5"
            style={{
              fontSize: "5rem",
              lineHeight: "1.1",
              color: "white",
              maxWidth: "900px",
            }}
          >
            Sleek, Modern & Intuitive
            <span
              style={{
                background:
                  "linear-gradient(135deg, #f87171 0%, #c084fc 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {" "}
              Trading Platforms
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="mt-4"
            style={{
              color: "#d1d5db",
              fontSize: "1.2rem",
              lineHeight: "2",
              maxWidth: "760px",
            }}
          >
            Experience lightning-fast execution, beautiful dashboards, advanced
            charting, and seamless investing across web, Android, and iOS
            devices.
          </p>

          {/* BUTTONS */}
          <div className="d-flex flex-wrap justify-content-center gap-4 mt-5">
            
            <button
              className="btn px-5 py-3"
              style={{
                background:
                  "linear-gradient(135deg, #ef4444 0%, #f43f5e 100%)",
                color: "white",
                borderRadius: "18px",
                fontWeight: "600",
                fontSize: "1rem",
                border: "none",
                boxShadow: "0 15px 35px rgba(59,130,246,0.35)",
              }}
            >
              Explore Products
            </button>

            <a
              href="/"
              className="d-flex align-items-center text-decoration-none fw-bold"
              style={{
                color: "#c4b5fd",
                fontSize: "1rem",
              }}
            >
              Investment Offerings
              <i className="fa-solid fa-arrow-right ms-2"></i>
            </a>
          </div>

          {/* STATS */}
          <div className="row mt-5 pt-5 w-100">
            
            <div className="col-md-4 text-center mb-4">
              <h1
                className="fw-bold"
                style={{
                  color: "white",
                  fontSize: "3rem",
                }}
              >
                10M+
              </h1>

              <p
                style={{
                  color: "#9ca3af",
                }}
              >
                Active Investors
              </p>
            </div>

            <div className="col-md-4 text-center mb-4">
              <h1
                className="fw-bold"
                style={{
                  color: "white",
                  fontSize: "3rem",
                }}
              >
                ₹0
              </h1>

              <p
                style={{
                  color: "#9ca3af",
                }}
              >
                Equity Delivery Charges
              </p>
            </div>

            <div className="col-md-4 text-center mb-4">
              <h1
                className="fw-bold"
                style={{
                  color: "white",
                  fontSize: "3rem",
                }}
              >
                99.9%
              </h1>

              <p
                style={{
                  color: "#9ca3af",
                }}
              >
                Platform Uptime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;