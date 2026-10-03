import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminPanel = ({ products, onAddProduct, onDeleteProduct }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && price && description && image) {
      onAddProduct({
        name,
        price: parseFloat(price),
        description,
        image
      });
      setName("");
      setPrice("");
      setDescription("");
      setImage("");
    }
  };

  return (
    <div className="container admin-panel">
      <h1>Admin Panel</h1>

      {/* Add Product Form */}
      <div className="add-product-form">
        <h3>Add New Product</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Price:</label>
            <input
              type="number"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Image URL:</label>
            <input
              type="text"
              className="form-control"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn">
            Add
          </button>
        </form>
      </div>

      {/* Admin Products List */}
      <h3>Product Inventory ({products.length})</h3>
      <ul className="admin-product-list">
        {products.map((product) => (
          <li key={product.id} className="admin-product-item">
            <span>
              {product.name} - ${product.price}
            </span>
            <span>
              <button
                className="float-right btn-danger"
                onClick={() => onDeleteProduct(product.id)}
              >
                Delete
              </button>
            </span>
            <span>
              <Link to={`/admin/edit/${product.id}`} className="float-right btn">
                Edit
              </Link>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
