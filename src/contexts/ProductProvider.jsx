import React, { useState } from "react";
import { products as productData } from "./products";
import { ProductContext } from "./productContext";

const ProductProvider = ({ children }) => {
  const [products] = useState(productData);
  const [carts, setCarts] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  const addToCart = (id) => {
    const productToAdd = products.find((pro) => pro.id == id);
    const checkIfAlreadyExist = carts.find((cart) => cart.id == id);
    if (checkIfAlreadyExist == undefined) {
      setCarts([...carts, { ...productToAdd, quantity: 1 }]);
    } else {
      setCarts(
        carts.map((pro) =>
          pro.id == id ? { ...pro, quantity: pro.quantity + 1 } : pro
        )
      );
    }
  };

  return (
    <ProductContext.Provider value={{ products, addToCart, carts, setCarts, isCartOpen, setIsCartOpen, selectedProduct, setSelectedProduct, isProductModalOpen, setIsProductModalOpen }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
