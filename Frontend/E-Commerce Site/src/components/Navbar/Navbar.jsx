import React, { useState } from 'react'
import "./navbar.css"

import logo from "../../assets/logo.png"
import cart_icon from '../../assets/cart_icon.png'

const Navbar = () => {

  const [menu, setMenu]= useState("1")
 
  return (
    <div>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="" />
          <p>SHOPPER</p>
        </div>
        <ul className="nav-menu">
          <li onClick={()=> setMenu("1")}>Shop {menu === "1" && <hr />}</li>
          <li onClick={()=> setMenu("2")}>Men {menu === "2" && <hr />}</li>
          <li onClick={()=> setMenu("3")}>Women {menu === "3" && <hr />}</li>
          <li onClick={()=> setMenu("4")}>Kids {menu === "4" && <hr />}</li>
        </ul>
        <div className="nav-login-cart">
          <button>Login</button>
          <img src={cart_icon} alt="" />
          <div className="nav-cart-count">0</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
