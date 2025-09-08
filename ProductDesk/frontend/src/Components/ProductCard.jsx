import React from "react";
import { SquarePen, Trash } from "lucide-react";
import { useProducts } from "../Context/ProductContext";
import toast from "react-hot-toast";

function ProductCard({ product, onEdit }) {
  const { deleteProduct } = useProducts();

  const handleDelete = () => {
    deleteProduct(product._id || product.id);
    toast.success("Product deleted Successfully");
  };

  return (
    <div className="card bg-base-300 w-full sm:w-[48%] shadow-md hover:shadow-lg transition-shadow">
      <figure className="h-80 overflow-hidden">
        <img
          src={
            product?.image ||
            "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          }
          alt={product?.name || "Product"}
          className="w-full h-full object-cover hover:scale-107 transition-all"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title bg-black w-fit px-3 rounded-full">{product?.name || "Card Title"}</h2>
        <div className="card-actions justify-between items-center">
          <span className="font-semibold text-3xl text-green-500">
            {product?.price ? `₹${product.price}` : "₹999"}
          </span>
          <div className="flex gap-1">
            <button
              onClick={onEdit} 
              className="hover:bg-gray-700 p-2 rounded-md transition-all cursor-pointer bg-black"
            >
              <SquarePen />
            </button>
            <button
              onClick={handleDelete}
              className="hover:bg-gray-700 p-2 rounded-md transition-all cursor-pointer bg-black"
            >
              <Trash color="red" strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
