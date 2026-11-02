import React from "react";

function About() {
  return (
    <div
      className="container-fluid py-5"
      style={{
        background:
          "linear-gradient(135deg, #020617 0%, #1f0808 35%, #111827 70%, #7f1d1d 100%)",
        minHeight: "100vh",
      }}
    >
      <div className="container text-center text-white">

        {/* Badge */}
        <div
          style={{
            display: "inline-block",
            padding: "6px 18px",
            borderRadius: "30px",
            background: "rgba(59,130,246,0.15)",
            color: "#93c5fd",
            fontWeight: "600",
            backdropFilter: "blur(10px)",
          }}
        >
          About Platform
        </div>

        {/* Heading */}
        <h1 className="fw-bold mt-4" style={{ fontSize: "3.5rem" }}>
          Modern Trading + Technology Ecosystem
        </h1>

        <p style={{ color: "#cbd5e1", maxWidth: "700px", margin: "0 auto" }}>
          Clean design + powerful tools + secure platform for modern investors
        </p>

        {/* Cards */}
        <div className="row mt-5 g-4">

          {/* Card 1 */}
          <div className="col-md-4">
            <div
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(59,130,246,0.2)",
                borderRadius: "25px",
                padding: "40px",
                backdropFilter: "blur(20px)",
                color: "white",
                height: "100%",
              }}
            >
              <div
                style={{
                  width: "65px",
                  height: "65px",
                  borderRadius: "18px",
                  background: "rgba(59,130,246,0.15)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "1.6rem",
                  color: "#60a5fa",
                  marginBottom: "18px",
                }}
              >
                <i className="fa-solid fa-chart-line"></i>
              </div>

              <h3 className="fw-bold">Trading</h3>
              <p style={{ color: "#cbd5e1" }}>
                Fast execution & real-time market data
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <div
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(59,130,246,0.2)",
                borderRadius: "25px",
                padding: "40px",
                backdropFilter: "blur(20px)",
                color: "white",
                height: "100%",
              }}
            >
              <div
                style={{
                  width: "65px",
                  height: "65px",
                  borderRadius: "18px",
                  background: "rgba(59,130,246,0.15)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "1.6rem",
                  color: "#60a5fa",
                  marginBottom: "18px",
                }}
              >
                <i className="fa-solid fa-shield-halved"></i>
              </div>

              <h3 className="fw-bold">Security</h3>
              <p style={{ color: "#cbd5e1" }}>
                Bank-grade protection & encrypted data
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(59,130,246,0.2)",
                borderRadius: "25px",
                padding: "40px",
                backdropFilter: "blur(20px)",
                color: "white",
                height: "100%",
              }}
            >
              <div
                style={{
                  width: "65px",
                  height: "65px",
                  borderRadius: "18px",
                  background: "rgba(59,130,246,0.15)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "1.6rem",
                  color: "#60a5fa",
                  marginBottom: "18px",
                }}
              >
                <i className="fa-solid fa-mobile-screen"></i>
              </div>

              <h3 className="fw-bold">Mobile App</h3>
              <p style={{ color: "#cbd5e1" }}>
                Trade anytime, anywhere seamlessly
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default About;