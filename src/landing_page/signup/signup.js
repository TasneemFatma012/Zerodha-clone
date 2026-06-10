import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    pan: "",
    dob: "",
    password: "",
    confirm: "",
    agreed: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field, value) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const validateStep1 = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (!/^\d{10}$/.test(form.phone)) e.phone = "Enter a valid 10-digit number";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep2 = () => {
    const e = {};
    if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(form.pan.toUpperCase()))
      e.pan = "Enter a valid PAN (e.g. ABCDE1234F)";
    if (!form.dob) e.dob = "Date of birth is required";
    if (form.password.length < 8) e.password = "Minimum 8 characters";
    if (form.password !== form.confirm) e.confirm = "Passwords do not match";
    if (!form.agreed) e.agreed = "You must accept the terms";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => {
    if (validateStep1()) setStep(2);
  };

  const handleSubmit = async () => {
  if (validateStep2()) {
    try {
      const res = await axios.post("http://localhost:5000/users/signup", {
        fullName: form.fullName,
        email: form.email,
        phone: form.phone,
        pan: form.pan,
        dob: form.dob,
        password: form.password,
      });

      console.log(res.data);

      setSubmitted(true);

      // redirect to dashboard after 2 sec
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  }
};

  const inputStyle = (field) => ({
    background: "rgba(255,255,255,0.06)",
    border: `1px solid ${errors[field] ? "#ef4444" : "rgba(255,255,255,0.12)"}`,
    borderRadius: "12px",
    color: "#f1f5f9",
    padding: "13px 16px",
    fontSize: "0.95rem",
    outline: "none",
    width: "100%",
    transition: "border 0.2s",
  });

  const labelStyle = {
    color: "#cbd5e1",
    fontSize: "0.85rem",
    fontWeight: "600",
    marginBottom: "6px",
    display: "block",
    letterSpacing: "0.03em",
  };

  const errorStyle = {
    color: "#f87171",
    fontSize: "0.78rem",
    marginTop: "4px",
  };

  if (submitted) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #1a0505, #2a0808, #1f0808)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="text-center text-white px-4">
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #ef4444, #b91c1c)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 24px",
              fontSize: "2rem",
              boxShadow: "0 0 40px rgba(239,68,68,0.4)",
            }}
          >
            ✓
          </div>
          <h2 className="fw-bold mb-3" style={{ fontSize: "2rem" }}>
            Account Created!
          </h2>
          <p style={{ color: "#cbd5e1", fontSize: "1.05rem", maxWidth: "380px", margin: "0 auto 28px" }}>
            Welcome aboard. Your account is being set up — we'll email you once it's ready to trade.
          </p>
          <Link
            to="/"
            className="px-5 py-3 d-inline-block"
            style={{
              background: "linear-gradient(90deg, #ef4444, #b91c1c)",
              borderRadius: "14px",
              color: "white",
              fontWeight: "600",
              textDecoration: "none",
              boxShadow: "0 8px 24px rgba(239,68,68,0.35)",
            }}
          >
            Go to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1a0505, #2a0808, #1f0808)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 16px 40px",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "fixed",
          top: "10%",
          right: "5%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(239,68,68,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "fixed",
          bottom: "10%",
          left: "5%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(185,28,28,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ width: "100%", maxWidth: "480px" }}>

        {/* Logo */}
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
            Create your account
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "0.9rem", marginTop: "6px" }}>
            Start investing in minutes
          </p>
        </div>

        {/* Step indicator */}
        <div className="d-flex align-items-center justify-content-center mb-4 gap-3">
          {[1, 2].map((s) => (
            <React.Fragment key={s}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background:
                    step >= s
                      ? "linear-gradient(135deg, #ef4444, #b91c1c)"
                      : "rgba(255,255,255,0.08)",
                  border: step >= s ? "none" : "1px solid rgba(255,255,255,0.15)",
                  color: step >= s ? "white" : "#64748b",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.85rem",
                  fontWeight: "700",
                  transition: "all 0.3s",
                  boxShadow: step >= s ? "0 4px 14px rgba(239,68,68,0.35)" : "none",
                }}
              >
                {step > s ? "✓" : s}
              </div>
              {s < 2 && (
                <div
                  style={{
                    flex: 1,
                    maxWidth: "60px",
                    height: "2px",
                    background:
                      step > s
                        ? "linear-gradient(90deg, #ef4444, #b91c1c)"
                        : "rgba(255,255,255,0.1)",
                    transition: "all 0.3s",
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Card */}
        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.09)",
            borderRadius: "24px",
            padding: "36px 32px",
            backdropFilter: "blur(20px)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
          }}
        >
          {step === 1 ? (
            <>
              <p style={{ color: "#94a3b8", fontSize: "0.82rem", fontWeight: "600", letterSpacing: "0.08em", marginBottom: "24px" }}>
                STEP 1 — PERSONAL DETAILS
              </p>

              <div className="mb-3">
                <label style={labelStyle}>Full Name</label>
                <input
                  style={inputStyle("fullName")}
                  placeholder="Rahul Sharma"
                  value={form.fullName}
                  onChange={(e) => update("fullName", e.target.value)}
                />
                {errors.fullName && <p style={errorStyle}>{errors.fullName}</p>}
              </div>

              <div className="mb-3">
                <label style={labelStyle}>Email Address</label>
                <input
                  style={inputStyle("email")}
                  placeholder="rahul@example.com"
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                />
                {errors.email && <p style={errorStyle}>{errors.email}</p>}
              </div>

              <div className="mb-4">
                <label style={labelStyle}>Mobile Number</label>
                <div style={{ display: "flex", gap: "8px" }}>
                  <span
                    style={{
                      ...inputStyle("phone"),
                      width: "60px",
                      flexShrink: 0,
                      color: "#94a3b8",
                      textAlign: "center",
                    }}
                  >
                    +91
                  </span>
                  <input
                    style={{ ...inputStyle("phone"), flex: 1 }}
                    placeholder="9876543210"
                    type="tel"
                    maxLength={10}
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value.replace(/\D/, ""))}
                  />
                </div>
                {errors.phone && <p style={errorStyle}>{errors.phone}</p>}
              </div>

              <button
                onClick={handleNext}
                style={{
                  width: "100%",
                  padding: "14px",
                  background: "linear-gradient(90deg, #ef4444, #b91c1c)",
                  border: "none",
                  borderRadius: "14px",
                  color: "white",
                  fontWeight: "700",
                  fontSize: "1rem",
                  cursor: "pointer",
                  boxShadow: "0 8px 24px rgba(239,68,68,0.35)",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.opacity = "0.88")}
                onMouseLeave={(e) => (e.target.style.opacity = "1")}
              >
                Continue →
              </button>
            </>
          ) : (
            <>
              <p style={{ color: "#94a3b8", fontSize: "0.82rem", fontWeight: "600", letterSpacing: "0.08em", marginBottom: "24px" }}>
                STEP 2 — ACCOUNT SECURITY
              </p>

              <div className="mb-3">
                <label style={labelStyle}>PAN Number</label>
                <input
                  style={inputStyle("pan")}
                  placeholder="ABCDE1234F"
                  value={form.pan}
                  onChange={(e) => update("pan", e.target.value.toUpperCase())}
                  maxLength={10}
                />
                {errors.pan && <p style={errorStyle}>{errors.pan}</p>}
              </div>

              <div className="mb-3">
                <label style={labelStyle}>Date of Birth</label>
                <input
                  style={inputStyle("dob")}
                  type="date"
                  value={form.dob}
                  onChange={(e) => update("dob", e.target.value)}
                />
                {errors.dob && <p style={errorStyle}>{errors.dob}</p>}
              </div>

              <div className="mb-3">
                <label style={labelStyle}>Password</label>
                <input
                  style={inputStyle("password")}
                  type="password"
                  placeholder="Min. 8 characters"
                  value={form.password}
                  onChange={(e) => update("password", e.target.value)}
                />
                {errors.password && <p style={errorStyle}>{errors.password}</p>}
              </div>

              <div className="mb-4">
                <label style={labelStyle}>Confirm Password</label>
                <input
                  style={inputStyle("confirm")}
                  type="password"
                  placeholder="Re-enter password"
                  value={form.confirm}
                  onChange={(e) => update("confirm", e.target.value)}
                />
                {errors.confirm && <p style={errorStyle}>{errors.confirm}</p>}
              </div>

              {/* Terms */}
              <div className="d-flex align-items-start gap-2 mb-4">
                <input
                  type="checkbox"
                  id="terms"
                  checked={form.agreed}
                  onChange={(e) => update("agreed", e.target.checked)}
                  style={{ marginTop: "3px", accentColor: "#ef4444", cursor: "pointer" }}
                />
                <label
                  htmlFor="terms"
                  style={{ color: "#94a3b8", fontSize: "0.85rem", cursor: "pointer", lineHeight: "1.5" }}
                >
                  I agree to the{" "}
                  <a href="#" style={{ color: "#f87171" }}>Terms of Service</a> and{" "}
                  <a href="#" style={{ color: "#f87171" }}>Privacy Policy</a>
                </label>
              </div>
              {errors.agreed && <p style={{ ...errorStyle, marginTop: "-12px", marginBottom: "12px" }}>{errors.agreed}</p>}

              <div className="d-flex gap-3">
                <button
                  onClick={() => { setStep(1); setErrors({}); }}
                  style={{
                    flex: 1,
                    padding: "14px",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "14px",
                    color: "#cbd5e1",
                    fontWeight: "600",
                    fontSize: "0.95rem",
                    cursor: "pointer",
                  }}
                >
                  ← Back
                </button>
                <button
                  onClick={handleSubmit}
                  style={{
                    flex: 2,
                    padding: "14px",
                    background: "linear-gradient(90deg, #ef4444, #b91c1c)",
                    border: "none",
                    borderRadius: "14px",
                    color: "white",
                    fontWeight: "700",
                    fontSize: "0.95rem",
                    cursor: "pointer",
                    boxShadow: "0 8px 24px rgba(239,68,68,0.35)",
                  }}
                >
                  Create Account
                </button>
              </div>
            </>
          )}
        </div>

        {/* Login link */}
        <p className="text-center mt-4" style={{ color: "#64748b", fontSize: "0.88rem" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#f87171", fontWeight: "600" }}>
            Log in
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;