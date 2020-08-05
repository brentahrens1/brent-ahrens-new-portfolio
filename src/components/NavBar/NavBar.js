import React, { useState } from 'react'
import '../../sass/_navbar.scss'

import { Link } from 'react-router-dom'

const NavBar = () => {

    const [ isContactOpen, setIsContactOpen ] = useState(false)

    const contactExpand = () => {
        setIsContactOpen(true)
        let contact = document.querySelector(".nav__contact")
        contact.innerHTML = `<p><a href="mailto:brentholmesahrens@gmail.com">brentholmesahrens@gmail.com</a></p>`
        contact.style.width = "310px"
    }

    const contactClose = () => {
        setIsContactOpen(false)
        let contact = document.querySelector(".nav__contact")
        contact.innerHTML = `<p>Contact</p>`
        contact.style.width = "85px"
    }

    return (
        <div className="nav">
            <div className="navbar">
                <div className="navbar__under">
                    <div className="navbar__dropdown">
                        <li><Link to="/">Index</Link></li>
                        <li><Link to="/">About</Link></li>
                        <li className="nav__list-item"><a href="#">Github</a></li>
                    </div>
                    <div className="navbar__name">
                        <h1>Brent Ahrens</h1>
                    </div>
                </div>
                <ul className="navbar__list">
                    <li className="navbar__list-item"><Link to="/">Index</Link></li>
                    <li className="navbar__list-item"><Link to="/">About</Link></li>
                    <li className="navbar__list-item"><a href="#">Github</a></li>
                </ul>
                <div className="hamburger">
                    <div className="hamburger__bar" />
                    <div className="hamburger__bar" />
                    <div className="hamburger__bar" />
                </div>
            </div>
            <div className="nav__contact" onMouseEnter={contactExpand} onMouseLeave={contactClose}>
                <p>Contact</p>
            </div>
            <div className="nav__location">
                <p>Developer, Los Angeles, CA</p>
            </div>
        </div>
    )
}

export default NavBar