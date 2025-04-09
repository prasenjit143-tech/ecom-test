import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase"; // Ensure Firebase is properly initialized
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(Array(6).fill("")); // Array of 6 digits
  const otpRefs = useRef([]);
  const [isOtpLogin, setIsOtpLogin] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const recaptchaRef = useRef(null);
  const confirmationResultRef = useRef(null); // Stores Firebase confirmation result

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("https://fff-api.navkiraninfotech.com/api/login", { email, password });
      if (response.data.success) {
        
        const token = response.data.data.token; // Access the token from the response
        const email = response.data.data.user.email; // Access the email from the response
        const user_id = response.data.data.user.id; // Access the user_id from the response
        localStorage.setItem('token', token); // Save token to local storage
        localStorage.setItem('email', email); // Save email to local storage
        localStorage.setItem('user_id', user_id); // Save user_id to local storage
        setIsLoggedIn(true, token); // Update the login state
        setMessage(response.data.message); // Set success message

        // Redirect to /todos after successful login
        navigate('/');

      } else {
        throw new Error(response.data.message);
      }
    } catch (err) {
      setError(err.response?.data.message || "An error occurred during login.");
    } finally {
      setLoading(false);
    }
  };

  // ** Send OTP **
  const handleSendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      if (!recaptchaRef.current) {
        recaptchaRef.current = new RecaptchaVerifier(auth, "recaptcha-container", {
          size: "invisible",
          callback: () => console.log("Recaptcha Verified"),
        });
      }

      let formattedPhone = phone.replace(/\D/g, ""); // Remove non-numeric characters

      // Ensure the number has 10 digits (India's mobile number length)
      if (formattedPhone.length === 10) {
        formattedPhone = `+91${formattedPhone}`;
      }
      const confirmationResult = await signInWithPhoneNumber(auth, formattedPhone, recaptchaRef.current);
      confirmationResultRef.current = confirmationResult;
      setOtpSent(true);
      setMessage("OTP sent successfully. Please check your phone.");
    } catch (err) {
      setError(err.message || "Failed to send OTP.");
    } finally {
      setLoading(false);
    }
  };

  // ** Verify OTP & Login with Firebase **
  const handleOtpLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      if (!confirmationResultRef.current) {
        throw new Error("OTP not sent. Please try again.");
      }

      // **Verify the OTP with Firebase**
      const finalOtp = otp.join("");
      const result = await confirmationResultRef.current.confirm(finalOtp);
      const user = result.user;

      if (!user) {
        throw new Error("OTP verification failed. Please try again.");
      }

      // **Get Firebase ID Token**
      const idToken = await user.getIdToken();

      const loginResponse = {
        message: "Login successful",
        success: true,
        data: {
          token: idToken, // Ensure idToken is correctly assigned
          user: user
            ? {
                id: user.uid || null, // Ensure user.uid exists before using it
                email: 'km@gmail.com' || "Not Available", // Handle missing email
                phone: phone || "Not Available", // Ensure phone is set
              }
            : null, // If user is undefined, set it to null
        },
      };

      
      setIsLoggedIn(true, idToken); // Update the login state
      
      // Debugging log
      console.log("Login Response:", loginResponse);      

      var firebase_invalid_otp_message = "Invalid otp given";

      if (loginResponse) {
        otphandleLoginSuccess(loginResponse);
      } else {
        throw new Error(firebase_invalid_otp_message);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLoginSuccess = (response) => {
    const token = response.credential;
    const decoded = jwtDecode(token);
    console.log("Decoded JWT:", decoded);
    // Send the response token to your backend to validate and handle user session

    const email = decoded.email; // Access the email from the response
    const user_id = decoded.iat; // Access the user_id from the response
    const name = decoded.name;
    const picture = decoded.picture;
    localStorage.setItem('token', token); // Save token to local storage
    localStorage.setItem('email', email); // Save email to local storage
    localStorage.setItem('user_id', user_id); // Save user_id to local storage
    localStorage.setItem('name', name); // Save user_id to local storage
    localStorage.setItem('picture', picture); // Save user_id to local storage
    setIsLoggedIn(true, token); // Update the login state

    // Redirect to /todos after successful login
    navigate('/todos'); 

  };

  const handleLoginFailure = (error) => {
    console.log("Login Failed:", error);
  };
  
  const otphandleLoginSuccess = (data) => {
    console.log("Log in handleLoginSuccess:", data);
    // Ensure `data.data` and `data.data.user` exist before accessing properties
    if (!data || !data.data || !data.data.user) {
      console.error("Invalid user data:", data);
      setError("User data is missing.");
      return;
    }

    const { token, user } = data.data;

    // Ensure properties exist before setting in localStorage
    localStorage.setItem("token", token || "");
    localStorage.setItem("email", user?.email || "Not Available");
    localStorage.setItem("phone", user?.phone || "");
    localStorage.setItem("user_id", user?.id || "");
    setIsLoggedIn(true, token); // Update the login state
    navigate("/");
  };

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d?$/.test(value)) {
      const updatedOtp = [...otp];
      updatedOtp[index] = value;
      setOtp(updatedOtp);

      // Focus next input if valid digit
      if (value && index < 5) {
        otpRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (otp[index]) {
        // Just clear current input
        const updatedOtp = [...otp];
        updatedOtp[index] = "";
        setOtp(updatedOtp);
      } else if (index > 0) {
        // Move to previous input and clear it
        otpRefs.current[index - 1]?.focus();
        const updatedOtp = [...otp];
        updatedOtp[index - 1] = "";
        setOtp(updatedOtp);
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      otpRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center" style={{ maxWidth: "500px", margin: "auto", padding: "35px 0px" }}>
      <div className="card shadow-lg p-4 w-100">
        <h2 className="text-center text-dark text-uppercase mb-4">Login</h2>
        <div className="form-check form-switch text-center mb-3">
          <input className="form-check-input" type="checkbox" id="toggleLogin" checked={isOtpLogin} onChange={() => { setIsOtpLogin(!isOtpLogin); setOtpSent(false); }} />
          <label className="form-check-label ms-2" htmlFor="toggleLogin">Login with {isOtpLogin ? "Email & Password" : "Phone & OTP"}</label>
        </div>
        {!isOtpLogin ? (
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <input type="email" className="form-control border-0 py-2" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="mb-3">
              <input type="password" className="form-control border-0 py-2" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-primary w-100 py-2" disabled={loading}>{loading ? "Logging in..." : "Login"}</button>
            <GoogleOAuthProvider clientId="999221888103-iano2cpupp3dqpnj2tr5mpstp4pofn2p.apps.googleusercontent.com">
              <GoogleLogin onSuccess={handleLoginSuccess} onFailure={handleLoginFailure}/>
            </GoogleOAuthProvider>
          </form>
        ) : (
          <>
            {!otpSent ? (
              <form onSubmit={handleSendOtp}>
                <div id="recaptcha-container"></div>
                <div className="mb-3">
                  <input type="text" className="form-control border-0 py-2" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary w-100 py-2" disabled={loading}>{loading ? "Sending OTP..." : "Send OTP"}</button>
                <GoogleOAuthProvider clientId="999221888103-iano2cpupp3dqpnj2tr5mpstp4pofn2p.apps.googleusercontent.com">
                  <div className="text-center mt-3">
                    <GoogleLogin
                      onSuccess={handleLoginSuccess}
                      onFailure={handleLoginFailure}
                      type="icon"
                      theme="filled_blue"
                      shape="pill"
                      width="100%"
                      text="signin_with"
                      useOneTap
                      ux_mode="popup"
                    />
                  </div>
                </GoogleOAuthProvider>

              </form>
            ) : (
              <form onSubmit={handleOtpLogin}>
                <div className="mb-3">
                  
                <div className="d-flex justify-content-between">
                {otp.map((digit, i) => (
                  <input
                    key={i}
                    type="text"
                    className="form-control text-center mx-1"
                    style={{ width: "40px", fontSize: "1.5rem" }}
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(e, i)}
                    onKeyDown={(e) => handleKeyDown(e, i)}
                    ref={(el) => (otpRefs.current[i] = el)}
                    required
                  />
                ))}
                </div>

                </div>
                <button type="submit" className="btn btn-primary w-100 py-2" disabled={loading}>{loading ? "Verifying..." : "Login"}</button>
              </form>
            )}
          </>
        )}
        {message && <div className="alert alert-success mt-3">{message}</div>}
        {error && <div className="alert alert-danger mt-3">{error}</div>}
      </div>
    </div>
  );
}

export default Login;
