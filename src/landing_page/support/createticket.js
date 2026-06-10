import React, { useState } from "react";

const ticketTopics = [
  
  {
    title: "Account Opening",
    icon: "fa-user-plus",
    color: "#ef4444",
    links: [
      "Online Account Opening",
      "Offline Account Opening",
      "Company & HUF Accounts",
      "NRI Account Opening",
      "Charges & AMC",
      "Getting Started",
    ],
  },
  {
    title: "Your Account",
    icon: "fa-id-card",
    color: "#f43f5e",
    links: [
      "Profile Management",
      "Bank Account Change",
      "Nomination",
      "Segment Activation",
      "Transfer Holdings",
      "Security Settings",
    ],
  },
  {
    title: "Trading & Orders",
    icon: "fa-chart-line",
    color: "#06b6d4",
    links: [
      "Order Types",
      "Margin Rules",
      "Intraday Trading",
      "F&O Trading",
      "Kite Features",
      "Market Timings",
    ],
  },
  {
    title: "Funds & Payments",
    icon: "fa-wallet",
    color: "#10b981",
    links: [
      "Add Funds",
      "Withdraw Funds",
      "UPI Payments",
      "Refund Status",
      "Bank Verification",
      "Payment Delays",
    ],
  },
  {
    title: "Mutual Funds",
    icon: "fa-coins",
    color: "#f59e0b",
    links: [
      "Buy Mutual Funds",
      "SIP Setup",
      "Coin Platform",
      "Tax Reports",
      "Direct Funds",
      "Redemption Process",
    ],
  },
  {
    title: "Help & Support",
    icon: "fa-headset",
    color: "#ef4444",
    links: [
      "Raise Ticket",
      "Track Ticket",
      "Live Support",
      "Report Issues",
      "Complaint Status",
      "Security Concerns",
    ],
  },
];

function CreateTicket() {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const getAutoReply = (userMsg) => {
  const msg = userMsg.toLowerCase();

  if (msg.includes("hello") || msg.includes("hi")) {
    return "👋 Hello! How can I help you today?";
  }

  if (msg.includes("account")) {
    return "📊 You can manage your account in Profile Settings section.";
  }

  if (msg.includes("fund") || msg.includes("payment")) {
    return "💰 Funds are usually credited within 1–2 minutes.";
  }

  if (msg.includes("ticket")) {
    return "🎫 You can create a ticket from Support Center.";
  }

  return "🤖 Sorry, I didn't understand that. Please contact support.";
  };
  return (
    <section
      className="container-fluid py-5 position-relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #020617 0%, #1f0808 40%, #111827 100%)",
        minHeight: "100vh",
      }}
    >
      {/* BACKGROUND GLOW */}
      <div
        style={{
          position: "absolute",
          width: "350px",
          height: "350px",
          background: "#ef4444",
          filter: "blur(140px)",
          opacity: "0.12",
          top: "-120px",
          left: "-100px",
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          background: "#f43f5e",
          filter: "blur(140px)",
          opacity: "0.12",
          bottom: "-120px",
          right: "-100px",
        }}
      ></div>

      <div className="container position-relative">
        
        {/* TOP SECTION */}
        <div className="text-center mb-5">
          
          <div
            onClick={() => setChatOpen(true)}
            className="d-inline-flex align-items-center px-4 py-2 mb-4"
            style={{
              background: "rgba(255,255,255,0.08)",
              borderRadius: "50px",
              backdropFilter: "blur(10px)",
              color: "#93c5fd",
              fontWeight: "600",
              position:"relative",
              zIndex: 10
            }}
          >
            <i className="fa-solid fa-headset me-2"></i>
            24/7 Customer Support
          </div>

          <h1
            className="fw-bold text-white"
            style={{
              fontSize: "4rem",
              lineHeight: "1.2",
            }}
          >
            Support Center
          </h1>

          <p
            className="mx-auto mt-4"
            style={{
              maxWidth: "760px",
              color: "#cbd5e1",
              lineHeight: "2",
              fontSize: "1.1rem",
            }}
          >
            Browse support topics, manage your account, resolve trading issues,
            and create tickets instantly with our modern help portal.
          </p>
        </div>

        {/* SEARCH BAR */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-7">
            <div
              className="d-flex align-items-center px-4"
              style={{
                height: "75px",
                borderRadius: "22px",
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(14px)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <i
                className="fa-solid fa-magnifying-glass"
                style={{
                  color: "#94a3b8",
                  fontSize: "1.2rem",
                }}
              ></i>

              <input
                type="text"
                placeholder="Search support articles, tickets, FAQs..."
                className="form-control bg-transparent border-0 shadow-none ms-3 text-white"
                style={{
                  fontSize: "1rem",
                }}
              />

              <button
                className="btn px-4 py-2"
                style={{
                  background:
                    "linear-gradient(135deg, #ef4444 0%, #f43f5e 100%)",
                  color: "white",
                  borderRadius: "14px",
                  fontWeight: "600",
                  border: "none",
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>

        {/* SUPPORT CARDS */}
        <div className="row g-4">
          {ticketTopics.map((topic, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              
              <div
                className="h-100 position-relative overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  borderRadius: "28px",
                  padding: "32px",
                  backdropFilter: "blur(18px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                
                {/* GLOW */}
                <div
                  style={{
                    position: "absolute",
                    width: "160px",
                    height: "160px",
                    background: topic.color,
                    filter: "blur(100px)",
                    opacity: "0.12",
                    top: "-50px",
                    right: "-50px",
                  }}
                ></div>

                {/* ICON */}
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "22px",
                    background: `${topic.color}20`,
                    color: topic.color,
                    fontSize: "1.5rem",
                  }}
                >
                  <i className={`fa-solid ${topic.icon}`}></i>
                </div>

                {/* TITLE */}
                <h3
                  className="fw-bold text-white mt-4"
                  style={{
                    fontSize: "1.7rem",
                  }}
                >
                  {topic.title}
                </h3>

                {/* LINKS */}
                <div className="mt-4 d-flex flex-column">
                  {topic.links.map((link, idx) => (
                    <a
                      href="/"
                      key={idx}
                      className="text-decoration-none mb-3"
                      style={{
                        color: "#cbd5e1",
                        transition: "0.3s",
                        fontWeight: "500",
                      }}
                    >
                      <i
                        className="fa-solid fa-angle-right me-2"
                        style={{
                          color: topic.color,
                        }}
                      ></i>

                      {link}
                    </a>
                  ))}
                </div>

                {/* BUTTON */}
                <button
                  className="btn w-100 mt-4 py-3"
                  style={{
                    background:
                      "linear-gradient(135deg, #ef4444 0%, #f43f5e 100%)",
                    color: "white",
                    borderRadius: "16px",
                    fontWeight: "600",
                    border: "none",
                    boxShadow: "0 12px 30px rgba(239,68,68,0.25)",
                  }}
                >
                  Create Ticket →
                </button>
              </div>
            </div>
          ))}
        </div>
        {chatOpen && (
  <div
    style={{
      position: "fixed",
      bottom: "20px",
      right: "20px",
      width: "320px",
      height: "420px",
      background: "rgba(15,23,42,0.95)",
      border: "1px solid rgba(59,130,246,0.3)",
      borderRadius: "20px",
      backdropFilter: "blur(20px)",
      zIndex: 9999,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    }}
  >
    {/* HEADER */}
    <div
      style={{
        padding: "12px",
        background: "rgba(59,130,246,0.2)",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontWeight: "600",
      }}
    >
      Chat Support
      <span
        onClick={() => setChatOpen(false)}
        style={{ cursor: "pointer" }}
      >
        ✖
      </span>
    </div>

    {/* CHAT BODY */}
    <div style={{ flex: 1, padding: "10px", overflowY: "auto" }}>
  {chat.length === 0 ? (
    <p style={{ color: "#94a3b8" }}>
      👋 Hi! Ask me anything...
    </p>
  ) : (
    chat.map((msg, i) => (
      <div
        key={i}
        style={{
          display: "flex",
          justifyContent:
            msg.type === "user" ? "flex-end" : "flex-start",
          marginBottom: "8px",
        }}
      >
        <div
          style={{
            background:
              msg.type === "user" ? "#3b82f6" : "#1f2937",
            color: "white",
            padding: "8px 12px",
            borderRadius: "12px",
            maxWidth: "70%",
          }}
        >
          {msg.text}
        </div>
      </div>
    ))
  )}
</div>

    {/* INPUT */}
    <div style={{ display: "flex", padding: "10px" }}>
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        type="text"
        placeholder="Type message..."
        style={{
          flex: 1,
          padding: "8px",
          borderRadius: "10px",
          border: "none",
          outline: "none",
        }}
      />
      <button
  onClick={() => {
    if (!message.trim()) return;

    const userMessage = message;

    // add user message
    setChat([...chat, { type: "user", text: userMessage }]);

    setMessage("");

    // auto reply after delay
    setTimeout(() => {
      const botReply = getAutoReply(userMessage);

      setChat((prev) => [
        ...prev,
        { type: "bot", text: botReply },
      ]);
    }, 800);
  }}
  style={{
    marginLeft: "8px",
    background: "#3b82f6",
    color: "white",
    border: "none",
    borderRadius: "10px",
    padding: "8px 12px",
    cursor: "pointer",
  }}
>
  Send
</button>
    </div>
  </div>
)}

        {/* BOTTOM CTA */}
        <div className="text-center mt-5 pt-5">
          
          <h2
            className="fw-bold text-white"
            style={{
              fontSize: "2.5rem",
            }}
          >
            Need Instant Assistance?
          </h2>

          <p
            className="mt-3"
            style={{
              color: "#cbd5e1",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "2",
            }}
          >
            Our support experts are available to help you with account issues,
            trading problems, and technical guidance anytime.
          </p>

          <button
            onClick={() => setChatOpen(true)}
            className="btn px-5 py-3 mt-4"
            style={{
              background:
                "linear-gradient(135deg, #06b6d4 0%, #ef4444 100%)",
              color: "white",
              borderRadius: "18px",
              fontWeight: "600",
              fontSize: "1.05rem",
              border: "none",
              boxShadow: "0 15px 35px rgba(59,130,246,0.35)",
              position:"relative",
              zIndex:"10",
            }}
          >
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}

export default CreateTicket;