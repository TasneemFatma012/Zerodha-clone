import React from "react";

function Education() {
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

          {/* LEFT IMAGE */}
          <div className="col-lg-6 text-center">

            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(59,130,246,0.2)",
                borderRadius: "25px",
                padding: "30px",
                backdropFilter: "blur(12px)",
                boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
              }}
            >
              <img
                src="media/education.svg"
                alt="education"
                className="img-fluid"
                style={{
                  filter: "drop-shadow(0 20px 30px rgba(59,130,246,0.3))",
                }}
              />
            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-6 text-white">

            {/* TITLE */}
            <h1
              className="fw-bold"
              style={{
                fontSize: "3rem",
                background: "linear-gradient(90deg, #60a5fa, #3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Free and open market education
            </h1>

            {/* DESCRIPTION 1 */}
            <div
              className="p-4 mt-4"
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "16px",
                border: "1px solid rgba(59,130,246,0.2)",
              }}
            >
              <p className="mb-2" style={{ color: "#cbd5e1" }}>
                Varsity is the largest online stock market education platform
                covering everything from basics to advanced trading.
              </p>

              <a
                href="#"
                style={{
                  color: "#60a5fa",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                Varsity →
              </a>
            </div>

            {/* DESCRIPTION 2 */}
            <div
              className="p-4 mt-4"
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "16px",
                border: "1px solid rgba(59,130,246,0.2)",
              }}
            >
              <p className="mb-2" style={{ color: "#cbd5e1" }}>
                TradingQ&A is the most active trading community in India for
                all your market related queries.
              </p>

              <a
                href="#"
                style={{
                  color: "#60a5fa",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                TradingQ&A →
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Education;