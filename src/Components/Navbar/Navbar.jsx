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
            <Link to="/" className='nav-logo'><img src={logo}/>
            <h4>Addidas</h4></Link>
        </div>
        <ul className='links'>
            <li ><Link to='/' className='link'>Shop</Link></li>
            <li ><Link to='/men' className='link'>Men</Link></li>
            <li ><Link to='/women' className='link'>Women</Link></li>
            <li><Link to='/kids' className='link'>Kids</Link></li>
        </ul>
        <div className="login">
            <Link to="/login"><button>Login</button></Link>
            <img src={cart}/>
            <p className='count'>0</p>
        </div>

    </div>
  )
}

export default Navbar