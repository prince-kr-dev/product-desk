import { X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useProducts } from "../Context/ProductContext";
import toast from "react-hot-toast";

export default function Modal({ setIsOpenModal, product }) {
  const { updateProduct } = useProducts();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  // Pre-fill inputs when modal opens with selected product
  useEffect(() => {
    if (product) {
      setName(product.name || "");
      setPrice(product.price || "");
      setImage(product.image || "");
    }
  }, [product]);

  const handleClick = async (e) => {
    e.preventDefault();

    if (!product) return;

    const updatedProduct = { name, price, image };
    const productId = product._id || product.id;

    try {
      await updateProduct(productId, updatedProduct);
      setIsOpenModal(false);
    } catch (err) {
      console.error("Error updating product:", err);
    }

    toast.success("Product updated successfully");
  };

  const handleClose = () => {
    setIsOpenModal(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
      <div className="bg-gray-900 rounded-2xl shadow-lg w-11/12 max-w-md p-6 relative">
        
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-white hover:bg-gray-950 p-0.5 rounded-md cursor-pointer transition-all"
        >
          <X />
        </button>

        <h2 className="text-xl font-semibold mb-4 text-white">Edit Product</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="border p-2 rounded-lg"
          />
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
            className="border p-2 rounded-lg"
          />
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Image URL"
            className="border p-2 rounded-lg"
          />
          <button
            onClick={handleClick}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
