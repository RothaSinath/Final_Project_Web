import React, { useContext, useState } from "react";
import { ProductContext } from "../contexts/productContext";

const ProductDetailModal = () => {
    const { selectedProduct, isProductModalOpen, setIsProductModalOpen, addToCart, setIsCartOpen } = useContext(ProductContext);
    const [quantity, setQuantity] = useState(1);

    if (!isProductModalOpen || !selectedProduct) return null;

    const onClose = () => setIsProductModalOpen(false);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="relative w-[1000px] max-w-4xl bg-white rounded-2xl p-6">
                <button onClick={onClose} className="absolute right-4 top-4">
                    <i className='bx bx-x text-2xl'></i>
                </button>
                <div className="grid grid-cols-2 gap-6 pt-10">
                    <div className="w-full h-[400px] overflow-hidden rounded-lg border border-none ">
                        <img className="w-full h-full object-cover" src={selectedProduct.image} alt={selectedProduct.name} />
                    </div>
                    <div className="space-y-6">
                        {/* new */}
                        <div>
                            <div className="flex items-center">
                                <div className="text-yellow-500 flex items-center gap-1">
                                    <i className="bx bxs-star text-lg"></i>
                                    <i className="bx bxs-star text-lg"></i>
                                    <i className="bx bxs-star text-lg"></i>
                                    <i className="bx bxs-star text-lg"></i>
                                    <i className="bx bx-star text-lg"></i>
                                </div>
                                <span className="text-black">({selectedProduct.rate})</span>
                            </div>
                            <h1 className="text-3xl font-bold mb-2">{selectedProduct.name}</h1>
                            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-3xl font-bold text-green-600">${selectedProduct.price}</span>
                                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{selectedProduct.category}</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Product Details</h3>
                            <div className="space-y-1">
                                <div className="flex justify-between py-2 border-b border-gray-100">
                                    <span className="font-medium capitalize">Brand :</span>
                                    <span className="text-gray-600">{selectedProduct.brand || 'N/A'}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-gray-100">
                                    <span className="font-medium capitalize">Compacity :</span>
                                    <span className="text-gray-600">{selectedProduct.compacity || 'N/A'}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-gray-100">
                                    <span className="font-medium capitalize">Power :</span>
                                    <span className="text-gray-600">{selectedProduct.power || 'N/A'}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-gray-100">
                                    <span className="font-medium capitalize">Temperature range :</span>
                                    <span className="text-gray-600">{selectedProduct.temperature_range || 'N/A'}</span>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <span className="font-medium">Quantity</span>
                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="w-9 h-9 rounded-md border border-gray-300 hover:bg-slate-100 text-2xl"
                                    >-</button>
                                    <span className="min-w-6 text-center">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="w-9 h-9 rounded-md border border-gray-300 hover:bg-slate-100 text-2xl"
                                    >+</button>
                                </div>
                            </div>
                            <button
                                onClick={() => { for (let i = 0; i < quantity; i++) { addToCart(selectedProduct.id); } setIsCartOpen(false); onClose(); }}
                                className="rounded-md bg-gray-900 text-white px-5 py-2 w-full"
                            >
                                Add {quantity} to cart - $ {(selectedProduct.price * quantity).toFixed(2)}
                            </button>
                        </div>
                        {/* new */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailModal;


