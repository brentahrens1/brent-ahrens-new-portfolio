import React, { useState } from 'react'
import '../../sass/_navbar.scss'

import { Link } from 'react-router-dom'

const NavBar = () => {
    const [ visible, setVisible ] = useState(true)
    const [ isOpen, setIsOpen ] = useState(false)

    let scrollTop = window.scrollY
    let contactOpen = false

    window.onresize = () => (window.innerWidth > 750 && isOpen) && setIsOpen(false)

    const handleScroll = () => {
        let currentScroll = window.scrollY
        currentScroll > scrollTop ? setVisible(false) : setVisible(true)  
    }

    window.addEventListener('scroll', handleScroll)

    const contactExpand = () => {
        contactOpen = true
        let contact = document.querySelector(".nav__contact")
        contact.innerHTML = '<p><a href="mailto:brentholmesahrens@gmail.com">brentholmesahrens@gmail.com</a></p>'
        contact.style.width = "310px"
    }

    const contactClose = () => {
        contactOpen = false
        let contact = document.querySelector(".nav__contact")
        contact.innerHTML = '<p>Contact</p>'
        contact.style.width = "85px"
    }

    return (
        <div className="nav">
            <div className="navbar">
                <div className="navbar__under">
                    <div className="navbar__under-drop">
                        <div className={`navbar__dropdown ${isOpen ? "show" : "hide"}`}>
                            <ul className="dropdown__list">
                                <li className="dropdown__list-item" onClick={() => setIsOpen(!isOpen)}><Link to="/index">Index</Link></li>
                                <li className="dropdown__list-item" onClick={() => setIsOpen(!isOpen)}><Link to="/about">About</Link></li>
                                <li className="nav__list-item" onClick={() => setIsOpen(!isOpen)}><a href="https://github.com/brentahrens1" target="_blank">Github</a></li>
                            </ul>
                        </div>
                        <div className={`navbar__name ${visible ? "navbar__visible" : "navbar__hidden"}`}>
                            <Link to="/"><h1>Brent Ahrens</h1></Link>
                        </div>
                    </div>
                </div>
                <ul className="navbar__list">
                    <li className="navbar__list-item"><Link to="/index">Index</Link></li>
                    <li className="navbar__list-item"><Link to="/about">About</Link></li>
                    <li className="navbar__list-item"><a href="https://github.com/brentahrens1" target="_blank">Github</a></li>
                </ul>
                <div className={`hamburger ${isOpen ? "open" : "closed"}`} onClick={() => setIsOpen(!isOpen)}>
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