import React from "react";
import "./Dashboard.css";
import Sidebar from "./Sidebar";

function Dashboard() {
  return (
    <>
      <div>
        <Sidebar />
        <div className="main-content">
          <div className="topbar">
            <h1>Dashboard</h1>
            <div className="user-info">Welcome, Admin</div>
          </div>
          <div className="dashboard-content">
            <div className="card">
              <h3>Total Sales</h3>
              <p>$12,345</p>
            </div>
            <div className="card">
              <h3>Orders</h3>
              <p>127</p>
            </div>
            <div className="card">
              <h3>Products</h3>
              <p>58</p>
            </div>
            <div className="card">
              <h3>Users</h3>
              <p>843</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
