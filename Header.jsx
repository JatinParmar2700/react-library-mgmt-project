import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
export default function Header() {
  return (
    <div className='header'>
        <ul>
            
            <Link to="/">Home</Link>
           <Link to="/Fiction"><li>Fiction</li></Link> 
           <Link to="/NoneFiction"><li>None Fiction</li></Link> 
           <Link to="/SelfHelp"><li>Self Help</li></Link> 
           <Link to="/Addbook"><li>AddBook</li></Link>
           
        </ul>
    </div>
  )
}
