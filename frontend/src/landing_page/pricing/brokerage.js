import React from "react";

function Brokerage() {
  const charges = [
    "Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.",
    "Digital contract notes will be sent via e-mail.",
    "Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.",
    "For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).",
    "For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).",
    "If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20.",
  ];

  return (
    <section
      className="container-fluid py-5"
      style={{
        background:
          "linear-gradient(135deg, #020617 0%, #1f0808 50%, #7f1d1d 100%)",
        minHeight: "100vh",
        color: "#e2e8f0",
      }}
    >
      <div className="container">

        {/* HEADER */}
        <div className="text-center mb-5">
          <span
            style={{
              background: "rgba(239,68,68,0.15)",
              color: "#f87171",
              padding: "6px 16px",
              borderRadius: "30px",
              fontWeight: "600",
              fontSize: "0.9rem",
              border: "1px solid rgba(59,130,246,0.3)",
            }}
          >
            Transparent Pricing
          </span>

          <h1 className="fw-bold mt-4" style={{ color: "#f8fafc" }}>
            Brokerage & Charges
          </h1>

          <p
            className="mt-3"
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              color: "#94a3b8",
            }}
          >
            Simple and transparent pricing with no hidden fees.
          </p>
        </div>

        {/* MAIN CARDS */}
        <div className="row g-4">

          {/* LEFT CARD */}
          <div className="col-lg-8">
            <div
              style={{
                background: "rgba(26,5,5,0.8)",
                backdropFilter: "blur(18px)",
                border: "1px solid rgba(59,130,246,0.2)",
                borderRadius: "28px",
                padding: "40px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              }}
            >
              {/* HEADER */}
              <div className="d-flex align-items-center mb-4">
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "18px",
                    background:
                      "linear-gradient(135deg,#ef4444,#dc2626)",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.4rem",
                  }}
                >
                  <i className="fa fa-calculator"></i>
                </div>

                <div className="ms-3">
                  <h3 className="text-white mb-1">
                    Brokerage Calculator
                  </h3>
                  <p style={{ color: "#94a3b8", margin: 0 }}>
                    Calculate charges instantly
                  </p>
                </div>
              </div>

              {/* LIST */}
              {charges.map((item, index) => (
                <div
                  key={index}
                  className="d-flex align-items-start mb-3 p-3"
                  style={{
                    background: "rgba(42,8,8,0.6)",
                    borderRadius: "14px",
                    border: "1px solid rgba(239,68,68,0.15)",
                  }}
                >
                  <div
                    style={{
                      minWidth: "28px",
                      height: "28px",
                      borderRadius: "8px",
                      background: "#dc2626",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.8rem",
                      marginRight: "12px",
                    }}
                  >
                    ✓
                  </div>

                  <p style={{ color: "#cbd5f5", margin: 0 }}>
                    {item}
                  </p>
                </div>
              ))}

              <button
                className="btn mt-4"
                style={{
                  background: "linear-gradient(135deg,#ef4444,#b91c1c)",
                  color: "white",
                  borderRadius: "12px",
                  padding: "12px 24px",
                  fontWeight: "600",
                }}
              >
                Open Calculator
              </button>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="col-lg-4">
            <div
              style={{
                background: "rgba(26,5,5,0.8)",
                backdropFilter: "blur(18px)",
                border: "1px solid rgba(59,130,246,0.2)",
                borderRadius: "28px",
                padding: "40px",
                height: "100%",
              }}
            >
              <h3 className="text-white">Charges Summary</h3>

              <p style={{ color: "#94a3b8" }}>
                Transparent breakdown of trading fees
              </p>

              <div
                className="p-4 mt-4"
                style={{
                  background: "rgba(239,68,68,0.1)",
                  borderRadius: "16px",
                }}
              >
                <h2 style={{ color: "#f87171" }}>₹20</h2>
                <p style={{ color: "#cbd5e1", margin: 0 }}>
                  Per executed order
                </p>
              </div>

              <div
                className="p-4 mt-3"
                style={{
                  background: "rgba(239,68,68,0.1)",
                  borderRadius: "16px",
                }}
              >
                <h2 style={{ color: "#f87171" }}>0 Hidden</h2>
                <p style={{ color: "#cbd5e1", margin: 0 }}>
                  Fully transparent pricing
                </p>
              </div>

              <button
                className="btn w-100 mt-4"
                style={{
                  border: "1px solid #ef4444",
                  color: "#93c5fd",
                  borderRadius: "12px",
                }}
              >
                View All Charges
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Brokerage;