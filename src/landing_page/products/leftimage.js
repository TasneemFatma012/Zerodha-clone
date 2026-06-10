import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <section
      className="container-fluid py-5"
      style={{
        background:
          "linear-gradient(135deg, #1f0808 0%, #111827 35%, #312e81 70%, #7c3aed 100%)",
      }}
    >
      <div className="container">
        <div className="row align-items-center g-5">
          
          {/* IMAGE SECTION */}
          <div className="col-lg-6">
            <div
              className="position-relative overflow-hidden"
              style={{
                borderRadius: "36px",
                background: "rgba(255,255,255,0.06)",
                padding: "40px",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(18px)",
                boxShadow: "0 30px 70px rgba(0,0,0,0.45)",
              }}
            >
              
              {/* BLUE GLOW */}
              <div
                style={{
                  position: "absolute",
                  width: "260px",
                  height: "260px",
                  background: "#ef4444",
                  filter: "blur(120px)",
                  opacity: "0.22",
                  top: "-60px",
                  left: "-60px",
                }}
              ></div>

              {/* PURPLE GLOW */}
              <div
                style={{
                  position: "absolute",
                  width: "220px",
                  height: "220px",
                  background: "#f43f5e",
                  filter: "blur(120px)",
                  opacity: "0.18",
                  bottom: "-60px",
                  right: "-40px",
                }}
              ></div>

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

          {/* CONTENT SECTION */}
          <div className="col-lg-6">
            
            {/* TOP BADGE */}
            <div
              className="d-inline-flex align-items-center px-4 py-2"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "50px",
                color: "#c4b5fd",
                fontWeight: "600",
                backdropFilter: "blur(12px)",
              }}
            >
              <i className="fa-solid fa-bolt me-2"></i>
              Smart Trading Platform
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
                color: "#d1d5db",
                fontSize: "1.08rem",
                lineHeight: "2",
                maxWidth: "580px",
              }}
            >
              {productDescription}
            </p>

            {/* FEATURES */}
            <div className="row mt-5 g-4">
              
              {/* CARD 1 */}
              <div className="col-6">
                <div
                  className="h-100 position-relative overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: "24px",
                    padding: "28px",
                    border: "1px solid rgba(255,255,255,0.06)",
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
                      background:
                        "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
                      color: "white",
                      fontSize: "1.5rem",
                    }}
                  >
                    <i className="fa-solid fa-chart-line"></i>
                  </div>

                  <h5 className="fw-bold text-white mt-4">
                    Advanced Charts
                  </h5>

                  <p
                    className="mb-0 mt-3"
                    style={{
                      color: "#9ca3af",
                      lineHeight: "1.8",
                      fontSize: "0.95rem",
                    }}
                  >
                    Real-time market insights with powerful visual analytics.
                  </p>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="col-6">
                <div
                  className="h-100 position-relative overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: "24px",
                    padding: "28px",
                    border: "1px solid rgba(255,255,255,0.06)",
                    backdropFilter: "blur(16px)",
                  }}
                >
                  
                  {/* GLOW */}
                  <div
                    style={{
                      position: "absolute",
                      width: "120px",
                      height: "120px",
                      background: "#f43f5e",
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
                      background:
                        "linear-gradient(135deg, #f43f5e 0%, #7c3aed 100%)",
                      color: "white",
                      fontSize: "1.5rem",
                    }}
                  >
                    <i className="fa-solid fa-mobile-screen"></i>
                  </div>

                  <h5 className="fw-bold text-white mt-4">
                    Mobile Ready
                  </h5>

                  <p
                    className="mb-0 mt-3"
                    style={{
                      color: "#9ca3af",
                      lineHeight: "1.8",
                      fontSize: "0.95rem",
                    }}
                  >
                    Smooth trading experience across Android & iOS devices.
                  </p>
                </div>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="d-flex flex-wrap align-items-center gap-4 mt-5">
              
              <a
                href={tryDemo}
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
                Try Demo
              </a>

              <a
                href={learnMore}
                className="text-decoration-none fw-bold"
                style={{
                  color: "#c4b5fd",
                  fontSize: "1rem",
                }}
              >
                Learn More →
              </a>
            </div>

            {/* STORE BUTTONS */}
            <div className="d-flex align-items-center gap-4 mt-5">
              
              <a href={googlePlay}>
                <img
                  src="media/googlePlayBadge.svg"
                  alt="Google Play"
                  style={{
                    height: "58px",
                    borderRadius: "12px",
                  }}
                />
              </a>

              <a href={appStore}>
                <img
                  src="media/appstoreBadge.svg"
                  alt="App Store"
                  style={{
                    height: "58px",
                    borderRadius: "12px",
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeftSection;