import React from "react";

import Hero from "./hero";
import LeftSection from "./leftimage";
import RightSection from "./rightimage";
import Universe from "./universe";

function ProductPage() {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #020617 0%, #1f0808 30%, #111827 100%)",
      }}
    >
      {/* HERO SECTION */}
      <Hero />

      {/* PRODUCTS */}
      <LeftSection
        imageURL="/media/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with real-time market data, advanced charting tools, seamless order execution, and a modern user experience across all devices."
        tryDemo="#"
        learnMore="#"
        googlePlay="#"
        appStore="#"
      />

      <RightSection
        imageURL="/media/console.png"
        productName="Console"
        productDescription="A powerful dashboard to track investments, analyze portfolio performance, generate tax reports, and monitor your trading activity with deep insights."
        learnMore="#"
      />

      <LeftSection
        imageURL="/media/coin.png"
        productName="Coin"
        productDescription="Invest in direct mutual funds with zero commission, easy SIP management, and long-term wealth-building tools designed for modern investors."
        tryDemo="#"
        learnMore="#"
        googlePlay="#"
        appStore="#"
      />

      <RightSection
        imageURL="/media/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build trading apps, automate strategies, and integrate market data using our fast, developer-friendly HTTP/JSON APIs trusted by fintech startups."
        learnMore="#"
      />

      <LeftSection
        imageURL="/media/varsity.png"
        productName="Varsity Mobile"
        productDescription="Master stock market concepts with beautifully designed lessons, practical examples, quizzes, and bite-sized educational modules."
        tryDemo="#"
        learnMore="#"
        googlePlay="#"
        appStore="#"
      />

      {/* TECH CTA SECTION */}
      <section className="container py-5">
        <div
          className="position-relative overflow-hidden text-center"
          style={{
            background: "rgba(255,255,255,0.05)",
            borderRadius: "35px",
            padding: "80px 40px",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(18px)",
            boxShadow: "0 25px 60px rgba(0,0,0,0.35)",
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
              opacity: "0.15",
              top: "-80px",
              left: "-80px",
            }}
          ></div>

          {/* PURPLE GLOW */}
          <div
            style={{
              position: "absolute",
              width: "260px",
              height: "260px",
              background: "#f43f5e",
              filter: "blur(120px)",
              opacity: "0.15",
              bottom: "-80px",
              right: "-80px",
            }}
          ></div>

          {/* BADGE */}
          <div
            className="d-inline-flex align-items-center px-4 py-2 position-relative"
            style={{
              background: "rgba(255,255,255,0.08)",
              borderRadius: "50px",
              color: "#c4b5fd",
              fontWeight: "600",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <i className="fa-solid fa-code me-2"></i>
            Engineering & Infrastructure
          </div>

          {/* TITLE */}
          <h1
            className="fw-bold mt-4 position-relative"
            style={{
              color: "white",
              fontSize: "3.5rem",
              lineHeight: "1.2",
            }}
          >
            Explore Our
            <span
              style={{
                background:
                  "linear-gradient(135deg, #f87171 0%, #c084fc 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {" "}
              Technology Stack
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="mt-4 position-relative"
            style={{
              color: "#cbd5e1",
              maxWidth: "760px",
              margin: "0 auto",
              lineHeight: "2",
              fontSize: "1.08rem",
            }}
          >
            Learn how Zerodha builds scalable fintech products using modern
            infrastructure, low-latency systems, advanced APIs, and secure cloud
            architecture powering millions of users daily.
          </p>

          {/* BUTTONS */}
          <div className="d-flex justify-content-center gap-4 flex-wrap mt-5 position-relative">
            
            <a
              href="/"
              className="btn px-5 py-3"
              style={{
                background:
                  "linear-gradient(135deg, #ef4444 0%, #f43f5e 100%)",
                color: "white",
                borderRadius: "18px",
                border: "none",
                fontWeight: "600",
                fontSize: "1rem",
                boxShadow: "0 15px 35px rgba(59,130,246,0.35)",
              }}
            >
              Visit Zerodha.tech
            </a>

            <button
              className="btn px-5 py-3"
              style={{
                background: "rgba(255,255,255,0.06)",
                color: "white",
                borderRadius: "18px",
                border: "1px solid rgba(255,255,255,0.08)",
                fontWeight: "600",
              }}
            >
              Read Engineering Blogs
            </button>
          </div>
        </div>
      </section>

      {/* UNIVERSE SECTION */}
      <Universe />
    </div>
  );
}

export default ProductPage;