import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const update = (field, value) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleLogin = async () => {
    setError("");

    if (!form.email || !form.password) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post("http://localhost:5000/users/login", {
        email: form.email,
        password: form.password,
      });

      console.log(res.data);

      // redirect after login
      navigate("/dashboard");

    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1a0505, #2a0808, #1f0808)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 16px",
      }}
    >
      <div style={{ width: "100%", maxWidth: "420px" }}>

        {/* HEADER */}
        <div className="text-center mb-4">
          <h1
            className="fw-bold"
            style={{
              fontSize: "1.8rem",
              background: "linear-gradient(90deg, #f87171, #ef4444)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Welcome Back
          </h1>

          <p style={{ color: "#94a3b8", fontSize: "0.9rem" }}>
            Login to your account
          </p>
        </div>

        {/* CARD */}
        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.09)",
            borderRadius: "24px",
            padding: "32px",
            backdropFilter: "blur(20px)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
          }}
        >

          {/* EMAIL */}
          <div className="mb-3">
            <label style={{ color: "#cbd5e1", fontSize: "0.85rem" }}>
              Email Address
            </label>

            <input
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="you@example.com"
              style={{
                width: "100%",
                padding: "13px",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#fff",
                outline: "none",
              }}
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-3">
            <label style={{ color: "#cbd5e1", fontSize: "0.85rem" }}>
              Password
            </label>

            <input
              type="password"
              value={form.password}
              onChange={(e) => update("password", e.target.value)}
              placeholder="Enter password"
              style={{
                width: "100%",
                padding: "13px",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#fff",
                outline: "none",
              }}
            />
          </div>

          {/* ERROR */}
          {error && (
            <p style={{ color: "#f87171", fontSize: "0.85rem" }}>
              {error}
            </p>
          )}

          {/* BUTTON */}
          <button
            onClick={handleLogin}
            disabled={loading}
            style={{
              width: "100%",
              padding: "14px",
              marginTop: "10px",
              background: "linear-gradient(90deg, #ef4444, #b91c1c)",
              border: "none",
              borderRadius: "14px",
              color: "white",
              fontWeight: "700",
              cursor: "pointer",
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? "Logging in..." : "Login →"}
          </button>
        </div>

        {/* LINK */}
        <p className="text-center mt-4" style={{ color: "#64748b" }}>
          Don’t have an account?{" "}
          <Link to="/signup" style={{ color: "#f87171", fontWeight: "600" }}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;