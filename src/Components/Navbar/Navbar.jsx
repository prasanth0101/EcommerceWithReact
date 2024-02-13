import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart from '../Assets/cart.png'
import { Link } from 'react-router-dom'


const Navbar = () => {

  const [category,setCategory] = useState('shop')



  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo}/>
            <h4>Addidas</h4>
        </div>
        <ul className='links'>
            <li onClick={()=>setCategory('shop')} ><Link to='/' style={category==='shop'?{color:'blue',textDecoration:"none"}:{textDecoration:"none",color:"black"}}>Shop</Link></li>
            <li onClick={()=>setCategory('men')} ><Link to='/men' style={category==='men'?{color:'blue',textDecoration:"none"}:{textDecoration:"none",color:"black"}}>Men</Link></li>
            <li onClick={()=>setCategory('women')} ><Link to='/women' style={category==='women'?{color:'blue',textDecoration:"none"}:{textDecoration:"none",color:"black"}}>Women</Link></li>
            <li onClick={()=>setCategory('kids')} ><Link to='/kids' style={category==='kids'?{color:'blue',textDecoration:"none"}:{textDecoration:"none",color:"black"}}>Kids</Link></li>
        </ul>
        <div className="login">
            <button>Login</button>
            <img src={cart}/>
            <p className='count'>0</p>
        </div>

    </div>
  )
}

export default Navbar