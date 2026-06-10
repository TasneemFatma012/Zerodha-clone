import React from "react";

function Universe() {
  const platforms = [
    {
      logo: "/media/smallcaseLogo.png",
      title: "Smallcase",
      description: "Thematic investment platform",
      icon: "fa-chart-line",
      glow: "#ef4444",
    },
    {
      logo: "/media/streakLogo.png",
      title: "Streak",
      description: "Algo & strategy trading platform",
      icon: "fa-robot",
      glow: "#f43f5e",
    },
    {
      logo: "/media/sensibullLogo.svg",
      title: "Sensibull",
      description: "Options trading simplified",
      icon: "fa-bolt",
      glow: "#ec4899",
    },
    {
      logo: "/media/zerodhaFundhouse.png",
      title: "Fund House",
      description: "Direct mutual fund investments",
      icon: "fa-wallet",
      glow: "#06b6d4",
    },
    {
      logo: "/media/goldenpiLogo.png",
      title: "GoldenPi",
      description: "Invest in bonds digitally",
      icon: "fa-coins",
      glow: "#f59e0b",
    },
    {
      logo: "/media/dittoLogo.png",
      title: "Ditto",
      description: "Health & term insurance platform",
      icon: "fa-shield-heart",
      glow: "#ef4444",
    },
  ];

  return (
    <section
      className="container-fluid py-5 position-relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #020617 0%, #1f0808 30%, #111827 65%, #1e1b4b 100%)",
      }}
    >
      {/* BACKGROUND GLOW */}
      <div
        style={{
          position: "absolute",
          width: "350px",
          height: "350px",
          background: "#ef4444",
          filter: "blur(180px)",
          opacity: "0.12",
          top: "-100px",
          left: "-100px",
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          width: "320px",
          height: "320px",
          background: "#f43f5e",
          filter: "blur(180px)",
          opacity: "0.12",
          bottom: "-120px",
          right: "-100px",
        }}
      ></div>

      <div className="container position-relative">
        
        {/* HEADER */}
        <div className="text-center mb-5">
          
          <div
            className="d-inline-flex align-items-center px-4 py-2"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "50px",
              color: "#c4b5fd",
              backdropFilter: "blur(12px)",
              fontWeight: "600",
            }}
          >
            <i className="fa-solid fa-layer-group me-2"></i>
            Partner Ecosystem
          </div>

          <h1
            className="fw-bold mt-4"
            style={{
              fontSize: "4.5rem",
              lineHeight: "1.1",
              color: "white",
            }}
          >
            The Zerodha
            <span
              style={{
                background:
                  "linear-gradient(135deg, #f87171 0%, #c084fc 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {" "}
              Universe
            </span>
          </h1>

          <p
            className="mt-4"
            style={{
              color: "#cbd5e1",
              maxWidth: "760px",
              margin: "0 auto",
              fontSize: "1.1rem",
              lineHeight: "2",
            }}
          >
            Discover powerful platforms designed to simplify investing,
            automate trading strategies, manage wealth, and enhance your
            financial journey.
          </p>
        </div>

        {/* PLATFORM CARDS */}
        <div className="row g-4 mt-5">
          {platforms.map((platform, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              
              <div
                className="position-relative h-100 overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "30px",
                  padding: "35px",
                  border: "1px solid rgba(255,255,255,0.06)",
                  backdropFilter: "blur(18px)",
                  transition: "0.4s ease",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
                }}
              >
                
                {/* CARD GLOW */}
                <div
                  style={{
                    position: "absolute",
                    width: "180px",
                    height: "180px",
                    background: platform.glow,
                    filter: "blur(100px)",
                    opacity: "0.16",
                    top: "-50px",
                    right: "-50px",
                  }}
                ></div>

                {/* ICON */}
                <div
                  className="d-flex justify-content-center align-items-center position-relative"
                  style={{
                    width: "75px",
                    height: "75px",
                    borderRadius: "22px",
                    background: `linear-gradient(135deg, ${platform.glow} 0%, rgba(255,255,255,0.15) 100%)`,
                    color: "white",
                    fontSize: "1.7rem",
                    boxShadow: `0 15px 30px ${platform.glow}55`,
                  }}
                >
                  <i className={`fa-solid ${platform.icon}`}></i>
                </div>

                {/* LOGO */}
                <div className="mt-4 position-relative">
                  <img
                    src={platform.logo}
                    alt={platform.title}
                    className="img-fluid"
                    style={{
                      height: "45px",
                      objectFit: "contain",
                    }}
                  />
                </div>

                {/* CONTENT */}
                <h3
                  className="fw-bold mt-4"
                  style={{
                    color: "white",
                    fontSize: "1.8rem",
                  }}
                >
                  {platform.title}
                </h3>

                <p
                  className="mt-3"
                  style={{
                    color: "#cbd5e1",
                    lineHeight: "1.9",
                    fontSize: "1rem",
                  }}
                >
                  {platform.description}
                </p>

                {/* BUTTON */}
                <button
                  className="btn mt-4 px-4 py-3"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "white",
                    borderRadius: "16px",
                    fontWeight: "600",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  Explore Platform →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div
          className="text-center mt-5 position-relative overflow-hidden"
          style={{
            marginTop: "120px",
            background: "rgba(255,255,255,0.05)",
            borderRadius: "35px",
            padding: "70px 40px",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)",
          }}
        >
          
          {/* CTA GLOW */}
          <div
            style={{
              position: "absolute",
              width: "250px",
              height: "250px",
              background: "#ef4444",
              filter: "blur(120px)",
              opacity: "0.15",
              top: "-80px",
              left: "-80px",
            }}
          ></div>

          <h2
            className="fw-bold position-relative"
            style={{
              color: "white",
              fontSize: "3rem",
            }}
          >
            Start Your Investment Journey
          </h2>

          <p
            className="mt-4 position-relative"
            style={{
              color: "#cbd5e1",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "2",
              fontSize: "1.05rem",
            }}
          >
            Join millions of investors and traders using Zerodha’s ecosystem to
            invest smarter, trade faster, and build long-term wealth.
          </p>

          <div className="d-flex justify-content-center gap-4 flex-wrap mt-5">
            
            <button
              className="btn px-5 py-3"
              style={{
                background:
                  "linear-gradient(135deg, #ef4444 0%, #f43f5e 100%)",
                color: "white",
                borderRadius: "18px",
                fontWeight: "600",
                border: "none",
                fontSize: "1.05rem",
                boxShadow: "0 15px 35px rgba(59,130,246,0.35)",
              }}
            >
              Signup Now
            </button>

            <button
              className="btn px-5 py-3"
              style={{
                background: "rgba(255,255,255,0.06)",
                color: "white",
                borderRadius: "18px",
                border: "1px solid rgba(255,255,255,0.08)",
                fontWeight: "600",
                fontSize: "1.05rem",
              }}
            >
              Explore Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Universe;