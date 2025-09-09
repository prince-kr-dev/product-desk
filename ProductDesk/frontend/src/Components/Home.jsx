import { useState } from "react";
import { useProducts } from "../Context/ProductContext";
import Modal from "./Modal";
import ProductCard from "./ProductCard";
import  Loader  from "./Loader";

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
      <h1 className="text-4xl font-medium pb-5 text-center text-gray-900 dark:text-gray-200">All Products</h1>

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
          <Loader/>
        )}
      </div>

      {isOpenModal && (
        <Modal setIsOpenModal={setIsOpenModal} product={selectedProduct} />
      )}
    </div>
  );
}

export default Home;
