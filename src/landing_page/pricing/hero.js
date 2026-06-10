import React from "react";

function Hero() {
  const pricingCards = [
    {
      image: "/media/pricingEquity.svg",
      title: "Free Equity Delivery",
      description:
        "All equity delivery investments (NSE & BSE) are absolutely free with ₹0 brokerage charges.",
      badge: "₹0 Brokerage",
      icon: "fa-line-chart",
    },
    {
      image: "/media/intradayTrades.svg",
      title: "Intraday & F&O Trades",
      description:
        "Flat ₹20 or 0.03% (whichever is lower) per executed order across equity, currency, and commodity.",
      badge: "Flat ₹20",
      icon: "fa-bolt",
    },
    {
      image: "/media/pricingEquity.svg",
      title: "Free Mutual Funds",
      description:
        "Invest in direct mutual funds with zero commission and hidden charges.",
      badge: "0% Commission",
      icon: "fa-pie-chart",
    },
  ];

  return (
    <section
      className="container-fluid py-5"
      style={{
        background:
          "linear-gradient(135deg, #020617 0%, #0f172a 40%, #1e3a8a 100%)",
        minHeight: "100vh",
      }}
    >
      <div className="container">

        {/* HEADER */}
        <div className="text-center py-5 text-white">

          <span
            style={{
              background: "rgba(59,130,246,0.15)",
              padding: "6px 18px",
              borderRadius: "30px",
              fontWeight: "600",
              color: "#93c5fd",
              backdropFilter: "blur(10px)",
            }}
          >
            Simple & Transparent Pricing
          </span>

          <h1 className="fw-bold mt-4" style={{ fontSize: "3.8rem" }}>
           Pricing <br /> For Smart Investors
          </h1>

          <p style={{ color: "#cbd5e1", maxWidth: "700px", margin: "0 auto" }}>
            Secure, fast and transparent pricing system built for modern traders.
          </p>
        </div>

        {/* CARDS */}
        <div className="row g-4 mt-4">
          {pricingCards.map((card, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(59,130,246,0.2)",
                  borderRadius: "25px",
                  padding: "40px",
                  backdropFilter: "blur(20px)",
                  color: "white",
                  transition: "0.3s",
                  position: "relative",
                }}
              >

                {/* BADGE */}
                <div
                  style={{
                    position: "absolute",
                    top: "15px",
                    right: "15px",
                    background: "rgba(59,130,246,0.25)",
                    color: "#93c5fd",
                    padding: "6px 12px",
                    borderRadius: "20px",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                  }}
                >
                  {card.badge}
                </div>

                {/* ICON */}
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
                  <i className={`fa ${card.icon}`}></i>
                </div>

                {/* IMAGE */}
                <img
                  src={card.image}
                  alt={card.title}
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "contain",
                    marginBottom: "18px",
                  }}
                />

                {/* TITLE */}
                <h3 className="fw-bold">{card.title}</h3>

                {/* DESCRIPTION */}
                <p style={{ color: "#cbd5e1", lineHeight: "1.8" }}>
                  {card.description}
                </p>

                {/* BUTTON */}
                <button
                  style={{
                    background:
                      "linear-gradient(135deg,#2563eb,#1d4ed8)",
                    border: "none",
                    padding: "12px 22px",
                    borderRadius: "12px",
                    color: "white",
                    fontWeight: "600",
                    marginTop: "10px",
                  }}
                >
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* STATS */}
        <div className="row mt-5 pt-5 text-center text-white">

          <div className="col-md-4">
            <h1 style={{ color: "#60a5fa" }}>₹0</h1>
            <p style={{ color: "#cbd5e1" }}>Equity Delivery Brokerage</p>
          </div>

          <div className="col-md-4">
            <h1 style={{ color: "#60a5fa" }}>₹20</h1>
            <p style={{ color: "#cbd5e1" }}>Intraday Charges</p>
          </div>

          <div className="col-md-4">
            <h1 style={{ color: "#60a5fa" }}>100%</h1>
            <p style={{ color: "#cbd5e1" }}>Transparent Pricing</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;