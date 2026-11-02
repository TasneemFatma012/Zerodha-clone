import React from "react";

function OpenAccount() {
  return (
    <div
      className="py-5"
      style={{
        background: 
        "linear-gradient(135deg, #020617 0%, #1f0808 35%, #111827 70%, #7f1d1d 100%)",
        
      }}
    >
      <div className="container text-center text-white">

        {/* TITLE */}
        <h1
          className="fw-bold"
          style={{
            fontSize: "3.2rem",
            background: "linear-gradient(90deg, #ff4d4d, #ff1744)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Open your account today
        </h1>

        {/* SUBTITLE */}
        <p
          className="mt-3"
          style={{
            color: "#cbd5e1",
            fontSize: "1.2rem",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.8",
          }}
        >
          Modern platforms, ₹0 investments, and flat ₹20 intraday & F&O trades.
        </p>

        {/* BUTTON */}
        <button
          className="mt-4 px-5 py-3"
          style={{
            background: "linear-gradient(90deg, #ff1744, #ff4d4d)",
            border: "none",
            borderRadius: "14px",
            color: "white",
            fontWeight: "600",
            fontSize: "1.1rem",
            boxShadow: "0 10px 30px rgba(255,23,68,0.4)",
            transition: "0.3s",
          }}
        >
          Sign up now →
        </button>

      </div>
    </div>
  );
}

export default OpenAccount;