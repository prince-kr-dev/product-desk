import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../Context/ProductContext";
import toast from "react-hot-toast";

const CreatePage = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const { addProduct } = useProducts();

  const navigate = useNavigate();

  const handleClick = () => {
    if (!name || !price || !image) {
      alert("All fields are required!");
      return;
    }

    const newProduct = {name, price, image};

    addProduct(newProduct);

    setName("");
    setPrice("");
    setImage("");
    navigate("/");

    toast.success("Product addded successfully")
  }  

  return (
    <div className="max-w-lg md:max-w-2xl mx-auto px-4">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-3xl md:text-3xl font-medium text-center my-8">
          Create New Product
        </h1>

        <div className="w-full bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-md">
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Product Name"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Image URL"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              onClick={handleClick}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition"
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
