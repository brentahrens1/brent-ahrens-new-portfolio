import React, { useState } from 'react'
import '../../sass/_footer.scss'

const Footer = () => {
    const [ isContactOpen, setIsContactOpen ] = useState(false)

    const contactExpand = () => {
        setIsContactOpen(true)
        let contact = document.querySelector(".footer__contact")
        contact.innerHTML = `<p><a href="mailto:brentholmesahrens@gmail.com">brentholmesahrens@gmail.com</a></p>`
        contact.style.width = "310px"
    }

    const contactClose = () => {
        setIsContactOpen(false)
        let contact = document.querySelector(".footer__contact")
        contact.innerHTML = `<p>Contact</p>`
        contact.style.width = "85px"
    }

    return (
        <div className="footer">
            <div className="footer__contact" onMouseEnter={contactExpand} onMouseLeave={contactClose}>
                <p className="footer__contact">Contact</p>
            </div>
                <p className="footer__info">Developer, Los Angeles, CA</p>
        </div>
    )
}

export default Footer