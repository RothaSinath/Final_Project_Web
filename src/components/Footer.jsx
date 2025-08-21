import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-900 text-white mt-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            <div>
                <h3 className='text-lg font-semibold mb-4'>ShopHub</h3>
                <p className='text-gray-400'>Your one-stop destination for quality products at great prices.</p>
            </div>
            <div>
                <h4 className='text-lg font-semibold mb-4'>Customer Service</h4>
                <ul className='space-y-2 text-gray-400'>
                    <li>Contact</li>
                    <li>FAQ</li>
                    <li>Returns</li>
                    <li>Shipping Info</li>
                </ul>
            </div>
            <div>
                <h4 className='text-lg font-semibold mb-4'>Company</h4>
                <ul className='space-y-2 text-gray-400'>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                </ul>
            </div>
            <div>
                <h4 className='text-lg font-semibold mb-4'>Connect</h4>
                <ul className='space-y-2 text-gray-400'>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                    <li>LinkedIn</li>
                </ul>
            </div>
        </div>
        <div className='border-t border-gray-800 mt-8 pt-8 text-center text-gray-400'>
            <p>© 2024 ShopHub. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
