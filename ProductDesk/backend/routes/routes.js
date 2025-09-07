import express from "express";
import Product from "../models/product.js";
import mongoose from "mongoose";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (err) {
    console.log(`Error in create product: ${err.message}`);
    res.status(500).json({ success: false, message: "Product not found" });
  }
});

router.post("/", async (req, res) => {
  try {
    const product = req.body; //user will send this data

    if (!product.name || !product.price || !product.image) {
      return res
        .status(400)
        .json({ success: false, message: "Please provide all fields" });
    }

    const newProduct = new Product(product);

    await newProduct.save();
    res.status(201).json({
      success: true,
      data: newProduct,
    });
  } catch (err) {
    console.log(`Error in create product: ${err.message}`);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true, // return the updated document
      runValidators: true, // optional: validate fields against schema
    });
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (err) {
    console.log(`Error in create product: ${err.message}`);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ success: false, message: "Invalid Id" });
    }

    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (err) {
    console.log(`Error in create product: ${err.message}`);
    res.status(500).json({ success: false, message: "Product not found" });
  }
});

export default router;