import React, { useState } from 'react';
import './Products.css';
import Sidebar from './../Auth/Sidebar';

function Products() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    status: "Active",
  });

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Smartphone",
      category: "Electronics",
      price: 399.99,
      status: "Active",
    },
    {
      id: 2,
      name: "Desk Lamp",
      category: "Home",
      price: 29.99,
      status: "Inactive",
    },
  ]);

  const openModal = (mode, product = null) => {
    setModalMode(mode);
    if (mode === "edit" && product) {
      setFormData({
        name: product.name,
        category: product.category,
        price: product.price,
        status: product.status,
      });
    } else {
      setFormData({
        name: "",
        category: "",
        price: "",
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

  const handleSave = (e) => {
    e.preventDefault();
    if (modalMode === "add") {
      const newProduct = {
        id: products.length + 1,
        ...formData,
        price: parseFloat(formData.price),
      };
      setProducts([...products, newProduct]);
    } else if (modalMode === "edit") {
      setProducts((prev) =>
        prev.map((p) =>
          p.name === formData.name ? { ...p, ...formData } : p
        )
      );
    }
    closeModal();
  };

  const handleDelete = (name) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((p) => p.name !== name));
    }
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div className="main" style={{ flex: 1, padding: 20 }}>
          <div className="topbar">
            <h1>Product Management</h1>
            <div className="user-info">Welcome, Admin</div>
          </div>
          <div className="content">
            <div className="header" style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
              <h2>Product List</h2>
              <button className="add-btn" onClick={() => openModal("add")}>+ Add Product</button>
            </div>

            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, idx) => (
                  <tr key={product.name}>
                    <td>{idx + 1}</td>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>${product.price.toFixed(2)}</td>
                    <td>{product.status}</td>
                    <td className="actions">
                      <button onClick={() => openModal("edit", product)} className="edit-btn">Edit</button>
                      <button onClick={() => handleDelete(product.name)} className="delete-btn">Delete</button>
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
        <div className="modal" style={{
          position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
          background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center",
          zIndex: 1000,
        }}>
          <div className="modal-content" style={{
            background: "#fff", padding: 24, borderRadius: 8, width: "100%", maxWidth: 500, position: "relative"
          }}>
            <span onClick={closeModal} style={{
              position: "absolute", top: 10, right: 16, cursor: "pointer", fontSize: 20, color: "#888"
            }}>&times;</span>

            <h3>{modalMode === "add" ? "Add Product" : "Edit Product"}</h3>
            <form onSubmit={handleSave}>
              <label htmlFor="name">Product Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="category">Category</label>
              <input
                type="text"
                id="category"
                value={formData.category}
                onChange={handleChange}
                required
              />

              <label htmlFor="price">Price</label>
              <input
                type="number"
                id="price"
                step="0.01"
                value={formData.price}
                onChange={handleChange}
                required
              />

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

              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 20 }}>
                <button type="button" className="btn-cancel" onClick={closeModal} style={{ marginRight: 10 }}>
                  Cancel
                </button>
                <button type="submit" className="btn-save">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Products;
