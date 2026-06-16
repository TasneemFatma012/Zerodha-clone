import React from "react";

function Awards() {
  return (
    <div
      className="py-5"
      style={{
        background:
          "radial-gradient(circle at top left, #0f172a, #020617 45%, #0b1120)",
      }}
    >
      <div className="container">
        <div className="row align-items-center g-5">

          {/* IMAGE */}
          <div className="col-lg-6 text-center">
            <div
              style={{
                background:
                  "linear-gradient(145deg, rgba(59,130,246,0.15), rgba(16,185,129,0.08))",
                borderRadius: "35px",
                padding: "30px",
                border: "1px solid rgba(255,255,255,0.15)",
                boxShadow: "0 25px 70px rgba(0,0,0,0.6)",
              }}
            >

              {/* CHANGE IMAGE HERE */}
              <img
                src="/media/nexora.png"
                className="img-fluid"
                alt="Nexora"
                style={{
                  maxHeight:"350px",
                  objectFit:"contain"
                }}
              />

            </div>
          </div>


          {/* CONTENT */}
          <div className="col-lg-6 text-light">

            <span
              style={{
                padding:"7px 18px",
                borderRadius:"30px",
                background:"rgba(34,197,94,0.15)",
                color:"#4ade80",
                border:"1px solid rgba(34,197,94,0.3)",
              }}
            >
              Trusted Platform
            </span>


            <h1
              className="mt-4 fw-bold"
              style={{
                fontSize:"3rem",
                background:
                "linear-gradient(90deg,#38bdf8,#22c55e,#a855f7)",
                WebkitBackgroundClip:"text",
                WebkitTextFillColor:"transparent"
              }}
            >
              Smart Trading With Nexora
            </h1>


            <p
              className="mt-3"
              style={{
                color:"#cbd5e1",
                lineHeight:"1.9"
              }}
            >
              Nexora provides a seamless trading experience with
              powerful analytics, fast execution and modern investment
              tools designed for every investor.
            </p>



            <div className="row mt-4 g-3">

              <div className="col-6">
                <div
                 className="p-3"
                 style={{
                  background:"rgba(255,255,255,0.06)",
                  borderRadius:"20px",
                  border:"1px solid rgba(255,255,255,0.1)"
                 }}
                >
                  <h6 style={{color:"#38bdf8"}}>
                    Trading
                  </h6>

                  <ul style={{color:"#cbd5e1"}}>
                    <li>Stocks</li>
                    <li>F&O</li>
                    <li>Live Charts</li>
                  </ul>

                </div>
              </div>



              <div className="col-6">
                <div
                 className="p-3"
                 style={{
                  background:"rgba(255,255,255,0.06)",
                  borderRadius:"20px",
                  border:"1px solid rgba(255,255,255,0.1)"
                 }}
                >

                  <h6 style={{color:"#a78bfa"}}>
                    Investment
                  </h6>

                  <ul style={{color:"#cbd5e1"}}>
                    <li>Portfolio</li>
                    <li>Mutual Funds</li>
                    <li>Reports</li>
                  </ul>

                </div>
              </div>


            </div>


            <div
             className="mt-4 p-3"
             style={{
              background:"rgba(255,255,255,0.05)",
              borderRadius:"18px",
              border:"1px solid rgba(255,255,255,0.1)"
             }}
            >

              <h6 style={{color:"#94a3b8"}}>
                Featured In
              </h6>

              <p className="mb-0 text-secondary">
                Modern • Secure • Fast Trading Experience
              </p>

            </div>


          </div>

        </div>
      </div>
    </div>
  );
}

export default Awards;