import React, { useContext } from "react";
import { ProductContext } from "../contexts/productContext";

const ProductCart = ({ product }) => {
  const { addToCart, setIsCartOpen, setSelectedProduct, setIsProductModalOpen } = useContext(ProductContext);
  return (
    <div
      className="rounded-lg p-3 bg-white border border-gray-200 shadow hover:shadow-2xl cursor-pointer transition-shadow duration-200"
      onClick={() => { setSelectedProduct(product); setIsProductModalOpen(true); }}
    >
      <div className="w-full h-[200px] overflow-hidden">
        <img className="w-full h-full object hover:scale-105 transition-transform duration-200" src={product.image} alt="" />
      </div>
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-sm my-1 text-gray-500 line-clamp-1">
        {product.description}
      </p>
      <div className="text-yellow-500 flex items-center gap-1">
        <i className="bx bxs-star text-lg"></i>
        <i className="bx bxs-star text-lg"></i>
        <i className="bx bxs-star text-lg"></i>
        <i className="bx bxs-star text-lg"></i>
        <i className="bx bx-star text-lg"></i>
        <span className="text-black">({product.rate})</span>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-2xl my-2 font-semibold text-yellow-600">${product.price}</h3>
        <span className="text-xs bg-slate-200 py-1 px-2 rounded-sm">
          {product.category}
        </span>
      </div>
      <button
        onClick={(e) => { e.stopPropagation(); addToCart(product.id); setIsCartOpen(false); setIsProductModalOpen(false); }}
        className="rounded-md bg-gray-900 w-full text-white flex items-center justify-center gap-5 py-2"
      >
        <i className="bx bx-cart text-xl"></i>
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCart;
