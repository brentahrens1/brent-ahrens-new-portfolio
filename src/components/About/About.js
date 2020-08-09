import React from 'react'
import '../../sass/_about.scss'

import CV from '../../cv/BrentAhrens_Resume.pdf'

const About = () => {
    return (
        <div className="about">
            <div className="about__info">
                <p>I’m a passionate, self-motivated front end web developer who thrives in demanding and dynamic roles that leverage my affinity for cutting edge technology and collaboration.</p>
                <br></br>
                <p>Feel free to contact me for web development projects.</p>
                <h5>Skills: React js | Vue js | Javascript | CSS3 | SASS | SCSS | Next js | Nuxt js | Node js | NPM | RESTful APIs | React Native | HTML5 | SEO | Github | Wordpress | Squarespace | Git | Google Analytics | Agile</h5>
            </div>
            <div className="about__contact">
                <p><a href={CV} target="_blank" rel="noopener noreferrer">CV</a></p>
                <p><a href="https://www.linkedin.com/in/brenthahrens/" target="_blank" rel="noopener noreferrer">Linkedin</a></p>
                <p><a href="mailto:brentholmesahrens@gmail.com" target="_blank" rel="noopener noreferrer">Email: brentholmesahrens@gmail.com</a></p>
            </div>
        </div>
    )
}

export default About