import React, { useContext, useState } from 'react'
import { ProductContext } from '../contexts/productContext'
import ProductCart from './ProductCart';

const Product = () => {
    const {products} = useContext(ProductContext)
    const [selectedCategory, setSelectedCategory] = useState('All')

    const categories = ['All', ...Array.from(new Set(products.map((p) => p.category)))]

    const filteredProducts = selectedCategory === 'All'
      ? products
      : products.filter((p) => p.category === selectedCategory)

  return (
    <div>
      <div className="w-[1200px] m-auto">
        <div className="flex gap-5 flex-wrap">
            {categories.map((cate) => (
                <button
                  key={cate}
                  onClick={() => setSelectedCategory(cate)}
                  type="button"
                  aria-pressed={selectedCategory === cate}
                  className={`text-lg font-medium px-5 py-2 border rounded-md transition-colors ${selectedCategory === cate ? 'bg-gray-900 text-white border-gray-900' : 'bg-white hover:bg-slate-100 border-gray-300'}`}
                >
                  {cate}
                </button>
            ))}
        </div>
        <div className="grid grid-cols-4 gap-5 mt-10">
          {filteredProducts.map((product) => (
            <ProductCart key={product.id} product={product}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Product
