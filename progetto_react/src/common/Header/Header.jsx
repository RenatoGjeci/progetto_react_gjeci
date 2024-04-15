import React from 'react'
import "./Header.css"
import logo from '../../logo.jpg'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <header>
        <div className='title'>
        <img src = {logo} alt= "logo" className = "logo"/>
        </div>
            <ul className='navbar'>
                <li>
                    <Link to="/" className='Link'>Home</Link>
                </li>
                <li>
                    <Link to="/Shop" className='Link'>Shop</Link>
                </li>
                <li>
                    <Link to="/About"className='Link'>About</Link>
                </li>
                <li>
                    <Link to="/Contact" className='Link'>Contact</Link>
                </li>
                
            </ul>
    </header>
  )
}

export default Header