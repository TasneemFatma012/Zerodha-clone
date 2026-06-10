import React, { useState } from "react";

function Hero() {
  const [selectedCard, setSelectedCard] = useState(null);

  const pricingCards = [
    {
      image: "media/pricingEquity.svg",
      title: "Free Equity Delivery",
      description:
        "All equity delivery investments (NSE & BSE) are absolutely free with ₹0 brokerage charges.",
      badge: "₹0 Brokerage",
      icon: "fa-line-chart",
    },
    {
      image: "media/intradayTrades.svg",
      title: "Intraday & F&O Trades",
      description:
        "Flat ₹20 or 0.03% (whichever is lower) per executed order across equity, currency, and commodity.",
      badge: "Flat ₹20",
      icon: "fa-bolt",
    },
    {
      image: "media/pricingEquity.svg",
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
          "linear-gradient(135deg, #020617 0%, #1f0808 40%, #7f1d1d 100%)",
        minHeight: "100vh",
      }}
    >
      <div className="container">

        {/* HEADER */}
        <div className="text-center py-5 text-white">
          <span
            style={{
              background: "rgba(239,68,68,0.15)",
              padding: "6px 18px",
              borderRadius: "30px",
              fontWeight: "600",
              color: "#f87171",
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
                  border: "1px solid rgba(239,68,68,0.2)",
                  borderRadius: "25px",
                  padding: "40px",
                  backdropFilter: "blur(20px)",
                  color: "white",
                  position: "relative",
                }}
              >

                {/* BADGE */}
                <div
                  style={{
                    position: "absolute",
                    top: "15px",
                    right: "15px",
                    background: "rgba(239,68,68,0.25)",
                    color: "#f87171",
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
                    background: "rgba(239,68,68,0.15)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "1.6rem",
                    color: "#f87171",
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
                <p style={{ color: "#cbd5e1" }}>
                  {card.description}
                </p>

                {/* BUTTON */}
                <button
                  onClick={() => setSelectedCard(card)}
                  style={{
                    background: "linear-gradient(135deg,#dc2626,#b91c1c)",
                    border: "none",
                    padding: "12px 22px",
                    borderRadius: "12px",
                    color: "white",
                    fontWeight: "600",
                    marginTop: "10px",
                    cursor: "pointer",
                  }}
                >
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {selectedCard && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.7)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 999,
            }}
          >
            <div
              style={{
                background: "rgba(15,23,42,0.95)",
                border: "1px solid rgba(239,68,68,0.3)",
                padding: "30px",
                borderRadius: "20px",
                width: "400px",
                color: "white",
                textAlign: "center",
                backdropFilter: "blur(20px)",
              }}
            >
              <img
                src={selectedCard.image}
                style={{ width: "120px", marginBottom: "15px" }}
              />

              <h3>{selectedCard.title}</h3>
              <p style={{ color: "#cbd5e1" }}>
                {selectedCard.description}
              </p>

              <button
                onClick={() => setSelectedCard(null)}
                style={{
                  marginTop: "15px",
                  padding: "10px 20px",
                  border: "none",
                  background: "#dc2626",
                  color: "white",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default Hero;