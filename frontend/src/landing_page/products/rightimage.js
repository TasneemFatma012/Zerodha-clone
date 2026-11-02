import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <section
      className="container-fluid py-5"
      style={{
        background:
          "linear-gradient(135deg, #0f0f0f 0%, #18181b 40%, #3b0a0a 100%)",
      }}
    >
      <div className="container">
        <div className="row align-items-center g-5">
          
          {/* CONTENT SECTION */}
          <div className="col-lg-6 order-2 order-lg-1">
            
            {/* TOP BADGE */}
            <div
              className="d-inline-flex align-items-center px-4 py-2"
              style={{
                background: "rgba(239,68,68,0.12)",
                border: "1px solid rgba(239,68,68,0.2)",
                borderRadius: "50px",
                color: "#f87171",
                fontWeight: "600",
                backdropFilter: "blur(12px)",
              }}
            >
              <i className="fa-solid fa-fire me-2"></i>
              Premium Dashboard
            </div>

            {/* TITLE */}
            <h1
              className="fw-bold mt-4"
              style={{
                fontSize: "4rem",
                lineHeight: "1.1",
                color: "white",
              }}
            >
              {productName}
            </h1>

            {/* DESCRIPTION */}
            <p
              className="mt-4"
              style={{
                color: "#d4d4d8",
                fontSize: "1.08rem",
                lineHeight: "2",
                maxWidth: "580px",
              }}
            >
              {productDescription}
            </p>

            {/* FEATURE CARDS */}
            <div className="row mt-5 g-4">
              
              {/* CARD 1 */}
              <div className="col-6">
                <div
                  className="h-100 position-relative overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "24px",
                    padding: "30px",
                    backdropFilter: "blur(16px)",
                  }}
                >
                  
                  {/* GLOW */}
                  <div
                    style={{
                      position: "absolute",
                      width: "120px",
                      height: "120px",
                      background: "#ef4444",
                      filter: "blur(80px)",
                      opacity: "0.2",
                      top: "-40px",
                      right: "-40px",
                    }}
                  ></div>

                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{
                      width: "65px",
                      height: "65px",
                      borderRadius: "18px",
                      background: "rgba(239,68,68,0.12)",
                      color: "#f87171",
                      fontSize: "1.5rem",
                    }}
                  >
                    <i className="fa-solid fa-chart-pie"></i>
                  </div>

                  <h5 className="fw-bold text-white mt-4">
                    Smart Analytics
                  </h5>

                  <p
                    className="mb-0 mt-3"
                    style={{
                      color: "#a1a1aa",
                      lineHeight: "1.8",
                      fontSize: "0.95rem",
                    }}
                  >
                    Advanced portfolio insights with real-time performance
                    tracking.
                  </p>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="col-6">
                <div
                  className="h-100 position-relative overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "24px",
                    padding: "30px",
                    backdropFilter: "blur(16px)",
                  }}
                >
                  
                  {/* GLOW */}
                  <div
                    style={{
                      position: "absolute",
                      width: "120px",
                      height: "120px",
                      background: "#dc2626",
                      filter: "blur(80px)",
                      opacity: "0.2",
                      top: "-40px",
                      right: "-40px",
                    }}
                  ></div>

                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{
                      width: "65px",
                      height: "65px",
                      borderRadius: "18px",
                      background: "rgba(239,68,68,0.12)",
                      color: "#f87171",
                      fontSize: "1.5rem",
                    }}
                  >
                    <i className="fa-solid fa-shield-halved"></i>
                  </div>

                  <h5 className="fw-bold text-white mt-4">
                    Secure Trading
                  </h5>

                  <p
                    className="mb-0 mt-3"
                    style={{
                      color: "#a1a1aa",
                      lineHeight: "1.8",
                      fontSize: "0.95rem",
                    }}
                  >
                    Bank-grade security with encrypted and protected
                    transactions.
                  </p>
                </div>
              </div>
            </div>

            {/* BUTTON */}
            <div className="mt-5">
              <a
                href={learnMore}
                className="btn px-5 py-3"
                style={{
                  background:
                    "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
                  color: "white",
                  borderRadius: "18px",
                  fontWeight: "600",
                  fontSize: "1rem",
                  border: "none",
                  boxShadow: "0 15px 35px rgba(239,68,68,0.35)",
                }}
              >
                Learn More →
              </a>
            </div>
          </div>

          {/* IMAGE SECTION */}
          <div className="col-lg-6 order-1 order-lg-2">
            <div
              className="position-relative overflow-hidden"
              style={{
                borderRadius: "35px",
                background: "rgba(255,255,255,0.05)",
                padding: "40px",
                border: "1px solid rgba(255,255,255,0.06)",
                backdropFilter: "blur(18px)",
                boxShadow: "0 25px 60px rgba(0,0,0,0.45)",
              }}
            >
              
              {/* RED GLOW */}
              <div
                style={{
                  position: "absolute",
                  width: "260px",
                  height: "260px",
                  background: "#ef4444",
                  filter: "blur(120px)",
                  opacity: "0.22",
                  bottom: "-60px",
                  right: "-60px",
                }}
              ></div>

              {/* IMAGE */}
              <img
                src={imageURL}
                alt={productName}
                className="img-fluid position-relative"
                style={{
                  zIndex: 2,
                  transform: "scale(1.03)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RightSection;