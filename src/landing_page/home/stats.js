import React from "react";

function Stats() {
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

          {/* LEFT CONTENT */}
          <div className="col-lg-6 text-white">

            <h1
              className="fw-bold mb-4"
              style={{
                fontSize: "3rem",
                background: "linear-gradient(90deg, #ff4d4d, #ff1744)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Trust with confidence
            </h1>

            {/* STAT CARD */}
            {[
              {
                title: "Customer-first always",
                desc:
                  "1.3+ crore customers trust us with ₹3.5+ lakh crores worth of equity investments.",
              },
              {
                title: "No spam or gimmicks",
                desc:
                  "No gimmicks, spam, or annoying push notifications. Clean experience, your way.",
              },
              {
                title: "The ecosystem",
                desc:
                  "A complete fintech ecosystem with 30+ startups offering tailored services.",
              },
              {
                title: "Do better with money",
                desc:
                  "Tools like Nudge & Kill Switch help you make smarter decisions.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-4 mb-3"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,77,77,0.25)",
                  borderRadius: "16px",
                  backdropFilter: "blur(12px)",
                }}
              >
                <h5 className="fw-bold text-danger">{item.title}</h5>
                <p className="text-light mb-0" style={{ opacity: 0.85 }}>
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 text-center">

            <div
              style={{
                position: "relative",
                padding: "30px",
                borderRadius: "25px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,77,77,0.2)",
                backdropFilter: "blur(12px)",
              }}
            >

              {/* glow */}
              <div
                style={{
                  position: "absolute",
                  width: "250px",
                  height: "250px",
                  background: "#ff1744",
                  filter: "blur(120px)",
                  opacity: 0.2,
                  top: "-50px",
                  right: "-50px",
                }}
              />

              <img
                src="/media/ecosystem.png"
                alt="ecosystem"
                className="img-fluid position-relative"
                style={{ zIndex: 2 }}
              />
            </div>

            {/* LINKS */}
            <div className="mt-4 d-flex flex-column gap-3">

              <a
                href="#"
                className="text-decoration-none text-white fw-semibold"
                style={{ color: "#ff4d4d" }}
              >
                Explore our products →
              </a>

              <a
                href="#"
                className="text-decoration-none text-white fw-semibold"
                style={{ color: "#ff1744" }}
              >
                Try Kite demo →
              </a>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Stats;