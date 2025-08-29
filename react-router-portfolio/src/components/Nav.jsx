import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav(){
  const linkClass = ({isActive}) => isActive ? 'active' : undefined
  return (
    <div className="navlinks">
      <NavLink to="/" className={linkClass} end>Home</NavLink>
      <NavLink to="/about" className={linkClass}>About</NavLink>
      <NavLink to="/projects" className={linkClass}>Projects</NavLink>
      <NavLink to="/contact" className={linkClass}>Contact</NavLink>

      <a className="btn" href="mailto:brandongonz.dev1@gmail.com?subject=Hello%20Brandon">Email</a>
      </div>
  )
}
