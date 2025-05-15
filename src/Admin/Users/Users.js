import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../Auth/Sidebar";

function Users() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    role: "",
    status: "Active",
  });
  const [users, setUsers] = useState([]);

  // Fetch users from API
  const fetchUsers = async () => {
    try {
      const res = await axios.get("/api/users");
      setUsers(res.data);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const openModal = (mode, user = null) => {
    setModalMode(mode);
    if (mode === "edit" && user) {
      setFormData({
        username: user.username,
        email: user.email,
        role: user.role,
        status: user.status,
      });
    } else {
      setFormData({
        username: "",
        email: "",
        role: "",
        status: "Active",
      });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      if (modalMode === "add") {
        await axios.post("/api/users", formData);
      } else if (modalMode === "edit") {
        await axios.put(`/api/users/${formData.email}`, formData);
      }
      fetchUsers(); // refresh user list
      closeModal();
    } catch (err) {
      console.error("Error saving user:", err);
    }
  };

  const handleDelete = async (email) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`/api/users/${email}`);
        fetchUsers();
      } catch (err) {
        console.error("Error deleting user:", err);
      }
    }
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div className="main" style={{ flex: 1, padding: 20 }}>
          <div className="topbar">
            <h1>User Management</h1>
            <div className="user-info">Welcome, Admin</div>
          </div>
          <div className="content">
            <div
              className="header"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <h2>User List</h2>
              <button className="add-btn" onClick={() => openModal("add")}>
                + Add User
              </button>
            </div>

            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, idx) => (
                  <tr key={user.email}>
                    <td>{idx + 1}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>{user.status}</td>
                    <td className="actions">
                      <button
                        className="edit-btn"
                        onClick={() => openModal("edit", user)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(user.email)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="modal"
          style={{
            display: "flex",
            position: "fixed",
            zIndex: 1000,
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.5)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="modal-content"
            style={{
              background: "#fff",
              padding: 24,
              width: "100%",
              maxWidth: 500,
              borderRadius: 8,
              position: "relative",
            }}
          >
            <span
              className="close-btn"
              style={{
                position: "absolute",
                top: 10,
                right: 16,
                fontSize: 18,
                cursor: "pointer",
                color: "#fff",
              }}
              onClick={closeModal}
            >
              &times;
            </span>

            <h3>{modalMode === "add" ? "Add User" : "Edit User"}</h3>
            <form onSubmit={handleSave}>
              <label htmlFor="username">User Name</label>
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={handleChange}
                required
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={modalMode === "edit"}
              />

              <label htmlFor="role">Role</label>
              <select
                id="role"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="">Select role</option>
                <option value="Admin">Admin</option>
                <option value="Customer">Customer</option>
              </select>

              <label htmlFor="status">Status</label>
              <select
                id="status"
                value={formData.status}
                onChange={handleChange}
                required
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>

              <div
                className="btn-row"
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: 20,
                }}
              >
                <button
                  type="button"
                  className="btn-cancel"
                  onClick={closeModal}
                  style={{ marginRight: 10 }}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-save">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Users;
