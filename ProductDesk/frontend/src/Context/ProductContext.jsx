import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const API_URL = "https://product-desk.onrender.com/api/products"; // your backend API

  // ✅ GET all products
  const fetchProducts = async () => {
    try {
      const res = await axios.get(API_URL);
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  //POST new product
  const addProduct = async (newProduct) => {
    try {
      const res = await axios.post(API_URL, newProduct);
      setProducts(res.data.data);
      await fetchProducts();
    } catch (err) {
      console.error("Error adding product:", err);
    }
  };

  // DELETE product
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setProducts((prev) => ({
        ...prev,
        data: prev.data.filter((p) => (p._id || p.id) !== id),
      }));
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  //UPDATE product (PUT)
  const updateProduct = async (id, updatedProduct) => {
    try {
      const res = await axios.put(`${API_URL}/${id}`, updatedProduct);
      setProducts((prev) => ({
        ...prev,
        data: prev.data.map((p) => (p.id === id ? res.data : p)),
      }));
      await fetchProducts();
    } catch (err) {
      console.error("Error updating product:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        deleteProduct,
        updateProduct,
        fetchProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook
export const useProducts = () => useContext(ProductContext);
