import React from "react";

function Hero() {
  return (
    <section
      className="container-fluid position-relative overflow-hidden py-5"
      style={{
        background:
          "linear-gradient(135deg, #020617 0%, #1f0808 35%, #111827 70%, #7f1d1d 100%)",
        minHeight: "100vh",
      }}
    >
      {/* BACKGROUND GLOW EFFECTS */}
      <div
        style={{
          position: "absolute",
          width: "350px",
          height: "350px",
          background: "#ef4444",
          filter: "blur(140px)",
          opacity: "0.18",
          top: "-100px",
          left: "-120px",
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          width: "320px",
          height: "320px",
          background: "#f43f5e",
          filter: "blur(140px)",
          opacity: "0.15",
          bottom: "-100px",
          right: "-100px",
        }}
      ></div>

      {/* NAVBAR */}
      <div className="container position-relative">
        <div
          className="d-flex justify-content-between align-items-center px-4 py-3"
          style={{
            background: "rgba(255,255,255,0.06)",
            borderRadius: "20px",
            backdropFilter: "blur(18px)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* LEFT */}
          <div className="d-flex align-items-center">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                width: "55px",
                height: "55px",
                borderRadius: "18px",
                background:
                  "linear-gradient(135deg, #ef4444 0%, #f43f5e 100%)",
                color: "white",
                fontSize: "1.3rem",
              }}
            >
              <i className="fa-solid fa-headset"></i>
            </div>

            <div className="ms-3">
              <h4 className="text-white fw-bold mb-0">Support Portal</h4>

              <small
                style={{
                  color: "#94a3b8",
                }}
              >
                Fast help & assistance
              </small>
            </div>
          </div>

          {/* RIGHT BUTTON */}
          <a
            href="/"
            className="btn px-4 py-2"
            style={{
              background:
                "linear-gradient(135deg, #06b6d4 0%, #ef4444 100%)",
              color: "white",
              borderRadius: "14px",
              fontWeight: "600",
              border: "none",
              boxShadow: "0 10px 25px rgba(59,130,246,0.3)",
            }}
          >
            Track Tickets →
          </a>
        </div>
      </div>

      {/* HERO CONTENT */}
      <div className="container position-relative mt-5 pt-5">
        <div className="row align-items-center g-5">
          
          {/* LEFT SIDE */}
          <div className="col-lg-7">
            
            {/* BADGE */}
            <div
              className="d-inline-flex align-items-center px-4 py-2"
              style={{
                background: "rgba(255,255,255,0.08)",
                borderRadius: "50px",
                color: "#93c5fd",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.08)",
                fontWeight: "600",
              }}
            >
              <i className="fa-solid fa-bolt me-2"></i>
              24×7 Smart Assistance
            </div>

            {/* HEADING */}
            <h1
              className="fw-bold text-white mt-4"
              style={{
                fontSize: "4.5rem",
                lineHeight: "1.15",
                maxWidth: "750px",
              }}
            >
              How can we help you today?
            </h1>

            {/* DESCRIPTION */}
            <p
              className="mt-4"
              style={{
                color: "#cbd5e1",
                fontSize: "1.15rem",
                lineHeight: "2",
                maxWidth: "680px",
              }}
            >
              Search support articles, resolve trading issues, browse account
              help topics, and create support tickets instantly with our modern
              support system.
            </p>

            {/* SEARCH BOX */}
            <div
              className="d-flex align-items-center mt-5 px-4"
              style={{
                height: "82px",
                background: "rgba(255,255,255,0.08)",
                borderRadius: "24px",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.08)",
                maxWidth: "760px",
              }}
            >
              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  width: "55px",
                  height: "55px",
                  borderRadius: "16px",
                  background: "rgba(255,255,255,0.08)",
                  color: "#93c5fd",
                  fontSize: "1.2rem",
                }}
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>

              <input
                type="text"
                placeholder="Eg. How do I activate F&O?"
                className="form-control bg-transparent border-0 shadow-none ms-3 text-white"
                style={{
                  fontSize: "1.05rem",
                }}
              />

              <button
                className="btn px-4 py-3"
                style={{
                  background:
                    "linear-gradient(135deg, #ef4444 0%, #f43f5e 100%)",
                  color: "white",
                  borderRadius: "16px",
                  fontWeight: "600",
                  border: "none",
                }}
              >
                Search
              </button>
            </div>

            {/* QUICK TAGS */}
            <div className="d-flex flex-wrap gap-3 mt-4">
              {[
                "Track account opening",
                "Segment activation",
                "Intraday margins",
                "Kite user manual",
              ].map((item, index) => (
                <a
                  key={index}
                  href="/"
                  className="text-decoration-none"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    color: "#e2e8f0",
                    padding: "12px 20px",
                    borderRadius: "16px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    backdropFilter: "blur(10px)",
                    fontWeight: "500",
                    transition: "0.3s",
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-5">
            
            <div
              className="position-relative overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.08)",
                borderRadius: "30px",
                padding: "35px",
                backdropFilter: "blur(22px)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* INNER GLOW */}
              <div
                style={{
                  position: "absolute",
                  width: "220px",
                  height: "220px",
                  background: "#ef4444",
                  filter: "blur(120px)",
                  opacity: "0.12",
                  top: "-50px",
                  right: "-50px",
                }}
              ></div>

              {/* HEADER */}
              <div className="d-flex align-items-center mb-4 position-relative">
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    width: "65px",
                    height: "65px",
                    borderRadius: "20px",
                    background:
                      "linear-gradient(135deg, #ef4444 0%, #f43f5e 100%)",
                    color: "white",
                    fontSize: "1.5rem",
                  }}
                >
                  <i className="fa-solid fa-fire"></i>
                </div>

                <div className="ms-3">
                  <h3 className="fw-bold text-white mb-1">
                    Trending Articles
                  </h3>

                  <p
                    className="mb-0"
                    style={{
                      color: "#94a3b8",
                    }}
                  >
                    Popular help topics & updates
                  </p>
                </div>
              </div>

              {/* ARTICLES */}
              {[
                "Current Takeovers & Delisting Updates",
                "Latest Intraday Leverages Explained",
                "New Margin Rules for Traders",
                "Understanding Kite Portfolio Features",
              ].map((item, index) => (
                <div
                  key={index}
                  className="d-flex align-items-start p-3 mb-3 position-relative"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: "18px",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <div
                    className="d-flex justify-content-center align-items-center me-3"
                    style={{
                      minWidth: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: "rgba(239,68,68,0.15)",
                      color: "#f87171",
                    }}
                  >
                    <i className="fa-solid fa-file-lines"></i>
                  </div>

                  <div>
                    <a
                      href="/"
                      className="text-decoration-none fw-semibold"
                      style={{
                        color: "white",
                        lineHeight: "1.6",
                      }}
                    >
                      {item}
                    </a>

                    <p
                      className="mb-0 mt-1"
                      style={{
                        color: "#94a3b8",
                        fontSize: "0.92rem",
                      }}
                    >
                      Updated recently • Read article
                    </p>
                  </div>
                </div>
              ))}

              {/* CTA */}
              <button
                className="btn w-100 py-3 mt-3"
                style={{
                  background:
                    "linear-gradient(135deg, #06b6d4 0%, #ef4444 100%)",
                  color: "white",
                  borderRadius: "18px",
                  fontWeight: "600",
                  border: "none",
                  boxShadow: "0 15px 35px rgba(239,68,68,0.25)",
                }}
              >
                Explore Help Center →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;