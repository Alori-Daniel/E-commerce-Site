import React, { useState } from 'react'
import "./navbar.css"

import logo from "../../assets/logo.png"
import cart_icon from '../../assets/cart_icon.png'
import { Link } from 'react-router-dom'

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
          <li onClick={()=> setMenu("1")}><Link style={{textDecoration:"none"}} to='/'>Shop</Link> {menu === "1" && <hr />}</li>
          <li onClick={()=> setMenu("2")}> <Link style={{textDecoration:"none"}} to='/mens'>Men</Link>  {menu === "2" && <hr />}</li>
          <li onClick={()=> setMenu("3")}><Link style={{textDecoration:"none"}} to='/womens'>Women</Link> {menu === "3" && <hr />}</li>
          <li onClick={()=> setMenu("4")}><Link style={{textDecoration:"none"}} to='/kids'>Kids</Link> {menu === "4" && <hr />}</li>
        </ul>
        <div className="nav-login-cart">
          <Link to='/login'><button>Login</button></Link> 
           <Link to ='/cart'><img src={cart_icon} alt="" /></Link> 
          <div className="nav-cart-count">0</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
