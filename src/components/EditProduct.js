import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditProduct = ({ products, onUpdateProduct }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);

  const [name, setName] = useState(product ? product.name : "");
  const [price, setPrice] = useState(product ? product.price : "");
  const [description, setDescription] = useState(product ? product.description : "");
  const [image, setImage] = useState(product ? product.image : "");

  if (!product) {
    return <div className="container">Product not found</div>;
  }

  const handleSave = (e) => {
    e.preventDefault();
    onUpdateProduct({
      id: product.id,
      name,
      price: parseFloat(price),
      description,
      image
    });
    navigate(`/products/${product.id}`);
  };

  return (
    <div className="container">
      <h2>Edit Product</h2>
      <form onSubmit={handleSave}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            className="form-control"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div>
          {/* Empty spacer div to align button as child 3 */}
        </div>
        <div>
          {/* Third container child to match selector :nth-child(3) > .float-right */}
          <button type="submit" className="float-right btn">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
