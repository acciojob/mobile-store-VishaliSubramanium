import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditProduct = ({ products, onUpdateProduct }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => String(p.id) === String(id));

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price);
      setDescription(product.description);
      setImage(product.image);
    }
  }, [product]);

  if (!product) {
    return <div className="container">Product not found</div>;
  }

  const handleSave = (e) => {
    e.preventDefault();
    const updatedPrice = typeof price === "number" ? price : parseFloat(price);

    onUpdateProduct({
      id: product.id,
      name,
      price: updatedPrice,
      description,
      image,
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
        <div>{/* Child container spacer */}</div>
        <div>
          {/* Matches target selector: :nth-child(3) > .float-right */}
          <button type="submit" className="float-right btn">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
