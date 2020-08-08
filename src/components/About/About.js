import React from 'react'
import '../../sass/_about.scss'

const About = () => {
    return (
        <div className="about">
            <div className="about__info">
                <p>Hello, I am an independent designer and front-end developer. Feel free to contact me for design, branding or web development projects.</p>
                <br></br>
                <p>Feel free to contact me for web development projects.</p>
            </div>
            <div className="about__contact">
                <p><a href="#" target="_blank">CV</a></p>
                <p><a href="#" target="_blank">Linkedin</a></p>
                <p><a href="#" target="_blank">Email: brentholmesahrens@gmail.com</a></p>
            </div>
        </div>
    )
}

export default About