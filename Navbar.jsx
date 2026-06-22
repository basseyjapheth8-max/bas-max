export default Navbar
import { useState } from 'react'
import './Navbar.css'

function Navbar({ ownerName }) {
    const [menuOpen, setMenuOpen] = useState(false)

    function toggleMenu() {
        setMenuOpen(!menuOpen)
    }
    return (
        <nav className="navbar">
            <div className="navbar__brand">
            <span className="navbar__logo">⚛</span>
            <span className="navbar__name">{ownerName}</span>
            </div>

            {/* Hamburger Menu Icon */}
            <button className="navbar__toggle" onClick={toggleMenu}>
                        {menuOpen ? '✕' : '☰'}  {/* show X when open, ☰ when closed */}
            </button>

            <ul className="navbar__links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}