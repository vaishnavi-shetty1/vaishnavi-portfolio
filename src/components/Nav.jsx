import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import PixelLogo from './PixelLogo'
import './Nav.css'

export default function Nav() {
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const handler = e => setCoords({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])
  return (
    <nav className="nav">
      <PixelLogo />
      <ul className="nav__links">
        <li><NavLink to="/" end>HOME</NavLink></li>
        <li><NavLink to="/projects">PROJECTS</NavLink></li>
        <li><NavLink to="/contact">CONTACT</NavLink></li>
      </ul>
      <div className="nav__cursor">
        [{String(coords.x).padStart(4,'0')},{String(coords.y).padStart(4,'0')}]
      </div>
    </nav>
  )
}
