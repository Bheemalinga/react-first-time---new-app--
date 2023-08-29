import React from 'react'
import '../styles/section4.css'
import Products from '../../pages/Products'

function Navbar() {
  return <>
  <div className="navbar">
    <div>
      Website Navbar
    </div>
    <div>
      <Products name = "In Navbar"/>
    </div>
  </div>
  </>
}

export default Navbar;