import React from 'react'
import '../../sass/_about.scss'

const About = () => {
    return (
        <div className="about">
            <div className="about__info">
                <p>I’m a passionate, self-motivated front end web developer who thrives in demanding and dynamic roles that leverage my affinity for cutting edge technology and collaboration.</p>
                <br></br>
                <p>Feel free to contact me for web development projects.</p>
            </div>
            <div className="about__contact">
                <p><a href="../../cv/BrentAhrens_Resume.pdf" target="_blank" rel="noopener noreferrer">CV</a></p>
                <p><a href="https://www.linkedin.com/in/brenthahrens/" target="_blank" rel="noopener noreferrer">Linkedin</a></p>
                <p><a href="mailto:brentholmesahrens@gmail.com" target="_blank" rel="noopener noreferrer">Email: brentholmesahrens@gmail.com</a></p>
            </div>
        </div>
    )
}

export default About