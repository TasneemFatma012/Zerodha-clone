import React from "react";

function Awards() {
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

          {/* IMAGE */}
          <div className="col-lg-6 text-center">
            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "30px",
                padding: "25px",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              }}
            >
              <img
                src="/media/largestBroker.svg"
                className="img-fluid"
                alt="award"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="col-lg-6 text-light">

            {/* BADGE */}
            <span
              style={{
                display: "inline-block",
                padding: "6px 16px",
                borderRadius: "30px",
                background: "rgba(239,68,68,0.15)",
                color: "#f87171",
                fontWeight: "600",
                border: "1px solid rgba(239,68,68,0.3)",
              }}
            >
              Market Leader
            </span>

            {/* TITLE */}
            <h1
              className="mt-4 fw-bold"
              style={{
                fontSize: "3rem",
                background: "linear-gradient(90deg,#f87171,#60a5fa,#a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Largest Stock Broker in India
            </h1>

            {/* DESCRIPTION */}
            <p
              className="mt-3"
              style={{
                color: "#cbd5e1",
                lineHeight: "1.9",
              }}
            >
              2+ million clients trust our platform for fast execution,
              secure trading, and seamless investment experience across India.
            </p>

            {/* CARDS */}
            <div className="row mt-4 g-3">

              <div className="col-6">
                <div
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    borderRadius: "20px",
                    padding: "18px",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <h6 style={{ color: "#60a5fa" }}>Trading</h6>
                  <ul style={{ color: "#cbd5e1", fontSize: "0.9rem" }}>
                    <li>F&O</li>
                    <li>Currency</li>
                    <li>Commodity</li>
                  </ul>
                </div>
              </div>

              <div className="col-6">
                <div
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    borderRadius: "20px",
                    padding: "18px",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <h6 style={{ color: "#a78bfa" }}>Investments</h6>
                  <ul style={{ color: "#cbd5e1", fontSize: "0.9rem" }}>
                    <li>Stocks</li>
                    <li>Mutual Funds</li>
                    <li>Bonds</li>
                  </ul>
                </div>
              </div>

            </div>

            {/* PRESS */}
            <div
              className="mt-4 p-3"
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "18px",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <img
                src="/media/pressLogos.png"
                className="img-fluid"
                alt="press"
                style={{ filter: "brightness(0.9)" }}
              />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Awards;