import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ProfilePage() {
  const [user, setUser] = useState({});
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get("/api/user");
      setUser(response.data);
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await axios.get("/api/orders");
      setOrders(response.data);
    };
    fetchOrders();
  }, []);

  return (
    <div>
      <h1>Profile Page</h1>
      <div>
        <h2>User Information</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
      <div>
        <h2>Order History</h2>
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <Link to={`/orders/${order.id}`}>{order.date}</Link>
              <p>Total: ${order.total}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProfilePage;
