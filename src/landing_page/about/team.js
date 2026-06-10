import React from "react";

const teamData = [
  {
    name: "Nithin Kamath",
    role: "Founder, CEO",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    bio: "Founder of Zerodha. Changed Indian broking industry.",
  },
  {
    name: "Nikhil Kamath",
    role: "Co-founder",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    bio: "Co-founder and trader with strong market insights.",
  },
  {
    name: "Kailash Nadh",
    role: "CTO",
    img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400",
    bio: "Leads technology and platform development.",
  },
  {
    name: "Seema Patil",
    role: "Product Manager",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
    bio: "Designs user-first financial products.",
  },
];

function Team() {
  return (
    <div
      className="container-fluid py-5"
      style={{
        background:
        "linear-gradient(135deg, #020617 0%, #1f0808 35%, #111827 70%, #7f1d1d 100%)",
          
      }}
    >
      <div className="container text-center text-white">

        {/* Heading */}
        <h1 className="fw-bold mb-2">Our Team</h1>

        <p style={{ color: "#cbd5e1", marginBottom: "40px" }}>
          Meet the people behind the platform
        </p>

        {/* Grid */}
        <div className="row g-4">
          {teamData.map((member, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(59,130,246,0.2)",
                  borderRadius: "25px",
                  padding: "30px",
                  backdropFilter: "blur(20px)",
                  color: "white",
                  height: "100%",
                  transition: "0.3s",
                }}
              >
                {/* IMAGE */}
                <img
                  src={member.img}
                  alt={member.name}
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "3px solid rgba(96,165,250,0.6)",
                  }}
                />

                {/* NAME */}
                <h5 className="mt-3 fw-bold">{member.name}</h5>

                {/* ROLE */}
                <p style={{ color: "#60a5fa", fontWeight: "600" }}>
                  {member.role}
                </p>

                {/* BIO */}
                <p style={{ color: "#cbd5e1", fontSize: "0.9rem" }}>
                  {member.bio}
                </p>

                {/* SOCIAL */}
                <div className="d-flex justify-content-center gap-3 mt-3">
                  <a href="#" style={{ color: "#60a5fa" }}>
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#" style={{ color: "#60a5fa" }}>
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Team;