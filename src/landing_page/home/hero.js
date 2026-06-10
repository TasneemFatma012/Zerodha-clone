import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <div
      className="py-5"
      style={{
        margin:"auto",
        background: 
        "linear-gradient(135deg, #020617 0%, #1f0808 35%, #111827 70%, #7f1d1d 100%)",
        
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container text-center text-white">

        {/* HERO IMAGE */}
        <div className="mb-4">
          <img
            src="media/homeHero.png"
            alt="hero"
            style={{
              width: "100%",
              maxWidth: "650px",
              filter: "drop-shadow(0 20px 40px rgba(59,130,246,0.4))",
            }}
          />
        </div>

        {/* BADGE */}
        <div
          className="d-inline-block px-4 py-2 mb-4"
          style={{
            background: "rgba(239,68,68,0.15)",
            border: "1px solid rgba(59,130,246,0.3)",
            borderRadius: "30px",
            color: "#93c5fd",
            fontWeight: "600",
            backdropFilter: "blur(10px)",
          }}
        >
          Smart Investing Platform
        </div>

        {/* TITLE */}
        <h1
          className="fw-bold"
          style={{
            fontSize: "3.5rem",
            background: "linear-gradient(90deg, #f87171, #ef4444)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Invest in everything
        </h1>

        {/* SUBTITLE */}
        <p
          className="mt-3"
          style={{
            fontSize: "1.2rem",
            color: "#cbd5e1",
            maxWidth: "650px",
            margin: "0 auto",
            lineHeight: "1.8",
          }}
        >
          Online platform to invest in stocks, derivatives, mutual funds, and more
          with powerful analytics and secure trading experience.
        </p>

        {/* BUTTON */}
        <button
          onClick={() => navigate("/signup")}
          className="mt-4 px-5 py-3"
          style={{
            background: "linear-gradient(90deg, #ef4444, #b91c1c)",
            border: "none",
            borderRadius: "14px",
            color: "white",
            fontWeight: "600",
            boxShadow: "0 10px 30px rgba(59,130,246,0.4)",
            transition: "0.3s",
          }}
        >
          Sign up now →
        </button>

      </div>
    </div>
  );
}

export default Hero;