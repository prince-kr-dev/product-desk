import { useState } from "react";
import { useProducts } from "../Context/ProductContext";
import Modal from "./Modal";
import ProductCard from "./ProductCard";

function Home() {
  const { products } = useProducts();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // 👈 track selected product

  const handleEditClick = (product) => {
    setSelectedProduct(product); // set the clicked product
    setIsOpenModal(true);       // open modal
  };

  return (
    <div className="p-4">
      <h1 className="text-4xl font-medium pb-5 text-center">All Products</h1>

      <div className="flex flex-wrap justify-center gap-6">
        {products ? (
          products?.data?.map((p, index) => (
            <ProductCard
              key={index}
              product={p}
              onEdit={() => handleEditClick(p)} // 👈 pass edit handler
            />
          ))
        ) : (
          <h1 className="text-3xl">Loading...</h1>
        )}
      </div>

      {isOpenModal && (
        <Modal setIsOpenModal={setIsOpenModal} product={selectedProduct} />
      )}
    </div>
  );
}

export default Home;
