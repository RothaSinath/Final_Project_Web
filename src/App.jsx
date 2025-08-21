import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Footer from './components/Footer'
import ProductDetailModal from './components/ProductDetailModal'

const App = () => {
  return (
    <div className='bg-slate-100'>
      <Navbar/>
      <Home/>
      <Product/>
      <Footer/>
      <ProductDetailModal/>
    </div>
  )
}

export default App
