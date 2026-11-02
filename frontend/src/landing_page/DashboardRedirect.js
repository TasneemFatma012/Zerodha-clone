import React, { useEffect } from "react";

const DASHBOARD_URL = process.env.REACT_APP_DASHBOARD_URL || "http://localhost:5173";

function DashboardRedirect() {
  useEffect(() => {
    window.location.href = DASHBOARD_URL;
  }, []);

  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#e2e8f0",
        fontSize: "1.1rem",
        letterSpacing: "0.04em",
      }}
    >
      Redirecting to dashboard...
    </div>
  );
}

export default DashboardRedirect;
