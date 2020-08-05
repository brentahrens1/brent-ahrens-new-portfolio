import React, { useState, useEffect } from 'react'
import '../../sass/_navbar.scss'

import { Link } from 'react-router-dom'

const NavBar = () => {
    const [ scrollTop, setScrollTop ] = useState(window.scrollY)
    const [ visible, setVisible ] = useState(true)
    const [ isContactOpen, setIsContactOpen ] = useState(false)
    const [ isOpen, setIsOpen ] = useState(false)

    window.onresize = () => (window.innerWidth > 900 && isOpen) && setIsOpen(false)

    const handleScroll = () => {
        let currentScroll = window.scrollY
        if (currentScroll > scrollTop) {
            setVisible(false)
            console.log(scrollTop)
        } else {
            setVisible(true)
            console.log(scrollTop)
        }
    }

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

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="nav">
            <div className="navbar">
                <div className="navbar__under">
                    <div className={`navbar__dropdown ${isOpen ? "show" : "hide"}`}>
                        <ul className="dropdown__list">
                            <li className="dropdown__list-item"><Link to="/">Index</Link></li>
                            <li className="dropdown__list-item"><Link to="/">About</Link></li>
                        </ul>
                        <li className="nav__list-item"><a href="#">Github</a></li>
                    </div>
                    <div className={ visible ? "navbar__name" : "navbar__hidden" }>
                        <h1>Brent Ahrens</h1>
                    </div>
                </div>
                <ul className="navbar__list">
                    <li className="navbar__list-item"><Link to="/">Index</Link></li>
                    <li className="navbar__list-item"><Link to="/">About</Link></li>
                    <li className="navbar__list-item"><a href="#">Github</a></li>
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