import React, { useContext } from 'react'
import { ProductContext } from '../contexts/productContext'
import ProductCart from './ProductCart';

const Product = () => {
    const {products} = useContext(ProductContext)

    let category = ["All"];

    products.filter((Product) => {
        if (!category.includes(Product.category)) {
            category.push(Product.category);
        }
    })

  return (
    <div>
      <div className="w-[1200px] m-auto">
        <div className="flex gap-5 flex-wrap">
            {category.map((cate) => (
                <button className='text-lg font-medium bg-white hover:bg-slate-100 px-5 py-2 border border-gray-300 rounded-md'>{cate}</button>
            ))}
        </div>
        <div className="grid grid-cols-4 gap-5 mt-10">
          {products.map((product) => (
            <ProductCart key={product.id} product={product}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Product
