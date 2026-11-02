import React from "react";

function Pricing() {
  return (
    <div
      className="py-5"
      style={{
        background: 
        "linear-gradient(135deg, #020617 0%, #1f0808 35%, #111827 70%, #7f1d1d 100%)",
        
      }}
    >
      <div className="container">

        <div className="row align-items-center g-5">

          {/* LEFT SIDE */}
          <div className="col-lg-5 text-white">

            <h1
              className="fw-bold"
              style={{
                fontSize: "3rem",
                background: "linear-gradient(90deg, #ff4d4d, #ff1744)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Unbeatable pricing
            </h1>

            <p
              className="mt-3"
              style={{
                color: "#cbd5e1",
                fontSize: "1.1rem",
                lineHeight: "1.8",
              }}
            >
              We pioneered discount broking and price transparency in India.
              Flat fees and no hidden charges.
            </p>

            <a
              href="#"
              className="fw-semibold text-decoration-none"
              style={{ color: "#ff4d4d", fontSize: "1.1rem" }}
            >
              See Pricing →
            </a>

          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-7">

            <div className="row g-4 text-center">

              {/* CARD 1 */}
              <div className="col-md-6">
                <div
                  className="p-5 h-100"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,77,77,0.25)",
                    borderRadius: "20px",
                    backdropFilter: "blur(14px)",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
                  }}
                >
                  <h1 style={{ color: "#ff4d4d", fontSize: "3rem" }}>
                    ₹0
                  </h1>

                  <p className="text-light mt-3">
                    Free equity delivery <br />
                    & mutual funds
                  </p>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="col-md-6">
                <div
                  className="p-5 h-100"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,23,68,0.15), rgba(255,255,255,0.05))",
                    border: "1px solid rgba(255,23,68,0.4)",
                    borderRadius: "20px",
                    backdropFilter: "blur(14px)",
                    boxShadow: "0 10px 40px rgba(255,0,0,0.15)",
                  }}
                >
                  <h1 style={{ color: "#ff1744", fontSize: "3rem" }}>
                    ₹20
                  </h1>

                  <p className="text-light mt-3">
                    Intraday & F&O trades
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Pricing;