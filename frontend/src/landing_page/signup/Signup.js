import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ for redirect

const styles = {
  container: {
    maxWidth: "350px",
    margin: "40px auto",
    padding: "30px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  }, 
  heading: {
    marginBottom: "8px",
  },
  subHeading: {
    marginBottom: "20px",
    color: "#666",
    fontSize: "14px",
  },
  form: {},
  mobileInput: {
    width: "100%",
    padding: "8px 12px",
    border: "1px solid #ccc",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#0b72ff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
  },
  terms: {
    marginTop: "12px",
    fontSize: "12px",
    color: "#999",
    textAlign: "center",
  },
};

function Signup() {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpInput, setOtpInput] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // ✅

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleGetOtp = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3001/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone: email }),
      });

      const data = await res.json();
      if (data.success) {
        setOtpSent(true);
        setMessage("OTP sent!");
      } else {
        setMessage("Failed to send OTP");
      }
    } catch (err) {
      setMessage("Server error while sending OTP");
    }
  };

  const handleOtpChange = (e) => {
    setOtpInput(e.target.value);
  };

  const handleConfirmOtp = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3001/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone: email, otp: otpInput }),
      });

      const data = await res.json();
      if (data.success) {
        setMessage("OTP verified successfully!");
        setTimeout(() => {
          navigate("/dashboard"); // ✅ redirect to dashboard
        }, 1000);
      } else {
        setMessage("Invalid OTP");
      }
    } catch (err) {
      setMessage("Server error while verifying OTP");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Signup now</h2>
      <p style={styles.subHeading}>Or track your existing application</p>

      {!otpSent ? (
        <form onSubmit={handleGetOtp} style={styles.form}>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={handleEmailChange}
            required
            style={{ ...styles.mobileInput, borderRadius: "4px" }}
          />
          <button type="submit" style={{ ...styles.button, marginTop: "15px" }}>
            Get OTP
          </button>
        </form>
      ) : (
        <form onSubmit={handleConfirmOtp} style={styles.form}>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otpInput}
            onChange={handleOtpChange}
            required
            maxLength={6}
            style={{ ...styles.mobileInput, marginBottom: "15px", borderRadius: "4px" }}
          />
          <button type="submit" style={styles.button}>
            Confirm OTP
          </button>
        </form>
      )}

      {message && <p style={{ textAlign: "center", marginTop: "15px" }}>{message}</p>}

      <p style={styles.terms}>
        By proceeding, you agree to the StoxPro terms &amp; privacy policy
      </p>
    </div>
  );
}

export default Signup;
