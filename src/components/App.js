import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import AdminPanel from "./AdminPanel";
import EditProduct from "./EditProduct";
import './../styles/App.css';

const initialProducts = [
  { id: "1", name: "iPhone 13", price: 799, description: "Apple smartphone with A15 Bionic chip.", image: "https://via.placeholder.com/150" },
  { id: "2", name: "Samsung Galaxy S21", price: 699, description: "Flagship phone with 120Hz AMOLED display.", image: "https://via.placeholder.com/150" },
  { id: "3", name: "Google Pixel 6", price: 599, description: "Google's custom Tensor processor phone.", image: "https://via.placeholder.com/150" },
  { id: "4", name: "OnePlus 9", price: 650, description: "Fast charging flagship experience.", image: "https://via.placeholder.com/150" },
  { id: "5", name: "Xiaomi Mi 11", price: 550, description: "High performance camera phone.", image: "https://via.placeholder.com/150" },
  { id: "6", name: "Sony Xperia 5 III", price: 899, description: "Compact phone for photography enthusiasts.", image: "https://via.placeholder.com/150" },
  { id: "7", name: "Realme GT", price: 450, description: "Affordable flagship specs.", image: "https://via.placeholder.com/150" },
  { id: "8", name: "Asus ROG Phone 5", price: 999, description: "Ultimate gaming smartphone.", image: "https://via.placeholder.com/150" }
];

const App = () => {
  const [products, setProducts] = useState(initialProducts);

  const addProduct = (newProduct) => {
    setProducts((prev) => [...prev, { ...newProduct, id: Date.now().toString() }]);
  };

  const updateProduct = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((p) =>
        String(p.id) === String(updatedProduct.id)
          ? {
              ...p,
              ...updatedProduct,
              price: typeof updatedProduct.price === "number"
                ? updatedProduct.price
                : parseFloat(updatedProduct.price)
            }
          : p
      )
    );
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => String(p.id) !== String(id)));
  };

  return (
    <div>
      <Router>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/admin">Admin Panel</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<ProductList products={products} />} />
          <Route path="/products/:id" element={<ProductDetails products={products} />} />
          <Route
            path="/admin"
            element={
              <AdminPanel
                products={products}
                onAddProduct={addProduct}
                onDeleteProduct={deleteProduct}
              />
            }
          />
          <Route
            path="/admin/edit/:id"
            element={<EditProduct products={products} onUpdateProduct={updateProduct} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
