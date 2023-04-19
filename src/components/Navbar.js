import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>

        <nav>

            <NavLink to="/">Home</NavLink>
            <NavLink to="/blogs">Blogs</NavLink>      
            <NavLink to="/contact">Contact</NavLink>

        </nav>
      
    </div>
  )
}
