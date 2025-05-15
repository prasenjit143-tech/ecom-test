import React from "react";
import "./Login.css";

function Login() {
    return (
      <>
        <div className="login-container">
          <h2>Admin Login</h2>
          <form>
            <div className="form-group">
              <label htmlFor="admin-email">Email</label>
              <input
                type="email"
                id="admin-email"
                placeholder="admin@example.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="admin-password">Password</label>
              <input
                type="password"
                id="admin-password"
                placeholder="Enter password"
                required
              />
              <div className="password-toggle" onclick="togglePassword()">
                Show/Hide Password
              </div>
            </div>
            {/* <button type="submit" className="login-btn">
              Login
            </button> */}
            <a href="/admin/dashboard">Login</a>
          </form>
          <div className="footer-text">
            © 2025 Admin Panel. All rights reserved.
          </div>
        </div>
      </>
    );
    
}
export default Login