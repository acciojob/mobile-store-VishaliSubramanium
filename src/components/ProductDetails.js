import React from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === String(id));

  if (!product) {
    return (
      <div className="container">
        <h2>Product not found</h2>
        <Link to="/" className="btn">
          Back
        </Link>
      </div>
    );
  }

  return (
    <div className="container product-details">
      <Link to="/" className="btn">
        Back
      </Link>
      <div className="details-card">
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p className="price">${product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
