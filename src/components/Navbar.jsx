import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../contexts/productContext";

const Navbar = () => {
  const { carts, setCarts, isCartOpen, setIsCartOpen } =
    useContext(ProductContext);
  const [total, setTotal] = useState(0);
  const cartCount = carts.reduce((sum, product) => sum + product.quantity, 0);
  // const [isCheckout, setIsCheckout] = useState(false);

  const increase = (id) => {
    setCarts(
      carts.map((cart) =>
        cart.id == id ? { ...cart, quantity: cart.quantity + 1 } : cart
      )
    );
  };

  const decrease = (id) => {
    setCarts(
      carts.map((cart) => {
        if (cart.id == id) {
          const newQuantiy = Math.max(0, cart.quantity - 1);
          return { ...cart, quantity: newQuantiy };
        }
        return cart;
      })
    );
  };

  useEffect(() => {
    let totalAmount = 0;
    carts.forEach((pro) => {
      totalAmount += pro.quantity * pro.price;
    });
    setTotal(totalAmount);
  }, [carts]);

  const removeCart = (id) => {
    setCarts(carts.filter((cart) => cart.id != id));
  };

  return (
    <div className="bg-white py-3 shadow-lg sticky top-0 z-50">
      <div className="w-[1200px] m-auto flex justify-between items-center">
        {/* Logo and Shop Title */}
        <div className="flex items-center gap-2">
          <i className="bx bxs-store text-4xl text-blue-600"></i>
          <h1 className="text-3xl font-bold">Shop</h1>
        </div>

        {/* Cart Button */}
        <button
          type="button"
          onClick={() => setIsCartOpen(true)}
          className="relative text-gray-800 hover:bg-slate-100 flex items-center gap-3 border border-gray-400 px-4 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <i className="bx bxs-shopping-bag text-lg"></i>
          Cart
          {cartCount > 0 && (
            <span className="absolute inline-flex items-center justify-center text-xs font-semibold bg-red-600 text-white rounded-full w-5 h-5 -top-1 -right-1">
              {cartCount}
            </span>
          )}
        </button>

        {/* Cart Modal */}
        {isCartOpen && (
          <div
            className="fixed inset-0 flex justify-center items-center w-full h-screen bg-black/50 bg-opacity-50 z-50"
            aria-modal="true"
            role="dialog"
          >
            <div className="relative w-[600px] max-h-[650px] h-auto bg-white rounded-2xl p-5 overflow-y-auto shadow-2xl">
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="absolute top-3 right-3 p-1 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-full"
                aria-label="Close cart"
              >
                <i className="bx bx-x text-2xl"></i>
              </button>

              {/* Cart Header */}
              <h3 className="text-2xl font-semibold mb-4">
                Shopping Cart ({cartCount} items)
              </h3>

              {/* Empty Cart */}
              {cartCount === 0 ? (
                <div className="mt-10 flex flex-col items-center justify-center gap-4">
                  <p className="text-gray-600">Your cart is empty.</p>
                  <button
                    type="button"
                    onClick={() => setIsCartOpen(false)}
                    className="mt-2 w-1/2 bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 transition"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <>
                  {/* Cart Items */}
                  <div className="mt-3 flex flex-col gap-4">
                    {carts.map((product) => (
                      <div
                        key={product.id}
                        className="flex items-center justify-between gap-5 border border-gray-300 p-3 rounded"
                      >
                        {/* Product Info */}
                        <div className="flex items-center gap-3">
                          <img
                            className="w-[70px] h-auto object-contain"
                            src={product.image}
                            alt={product.name || "Product image"}
                          />
                          <div>
                            <h2 className="text-lg font-medium">
                              {product.name}
                            </h2>
                            <p className="text-gray-500">
                              ${product.price.toFixed(2)}
                            </p>
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            disabled={product.quantity <= 1}
                            onClick={() => decrease(product.id)}
                            className="w-9 h-9 rounded-md border border-gray-300 hover:bg-slate-100 text-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                            aria-label="Decrease quantity"
                          >
                            -
                          </button>
                          <span className="text-lg font-medium">
                            {product.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => increase(product.id)}
                            className="w-9 h-9 rounded-md border border-gray-300 hover:bg-slate-100 text-2xl"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>

                        {/* Total Price and Remove Button */}
                        <div className="flex flex-col items-center gap-2">
                          <p className="text-xl font-semibold">
                            ${(product.price * product.quantity).toFixed(2)}
                          </p>
                          <button
                            type="button"
                            onClick={() => removeCart(product.id)}
                            className="text-red-500 hover:text-red-700"
                            aria-label="Remove item from cart"
                          >
                            <i className="bx bx-trash text-xl"></i>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Cart Footer */}
                  <div className="mt-6 border-t pt-4">
                    <h1 className="text-2xl font-bold">
                      Total: ${total.toFixed(2)}
                    </h1>
                    <div className="flex gap-4 mt-3">
                      <button
                        type="button"
                        onClick={() => setIsCartOpen(false)}
                        className="flex-1 bg-white text-gray-900 border border-gray-300 py-2 rounded-md hover:bg-gray-50 transition"
                      >
                        Continue Shopping
                      </button>
                      <button
                        type="button"
                        onClick={() => setCarts([])}
                        className="flex-1 bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 transition"
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
