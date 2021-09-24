import React from 'react'

import '../../sass/_about.scss'
import '../../sass/_home.scss'

import BrentAbout from '../../images/about/brent-about.jpeg'

import CV from '../../cv/BrentAhrensResume.pdf'

const About = () => {
    return (
        <div className="about">
            <div className="project">
                <div className="project__inner">
                    <div className="project__content">
                            <div className="project__image">
                                <a href="mailto:brentholmesahrens.com" target="_blank" rel="noopener noreferrer">
                                <img src={BrentAbout} alt="Brent Ahrens | Frontend Developer" />
                                <h1 className="project__link-popup"><a href="mailto:brentholmesahrens.com" target="_blank" rel="noopener noreferrer">Contact Me</a></h1>
                                </a>
                            </div>
                        <h4 className="project__tech"><a href={CV} target="_blank" rel="noopener noreferrer">Resume</a> | <a href="https://www.linkedin.com/in/brenthahrens/" target="_blank" rel="noopener noreferrer">Linkedin</a></h4>
                        <p className="project__description">I’m a passionate, self-motivated frontend web developer who thrives in demanding and dynamic roles that leverage my affinity for cutting edge technology and collaboration.</p>
                    </div>
                    <h1 className="project__link-mobile"><a href="mailto:brentholmesahrens.com" target="_blank" rel="noopener noreferrer">brentholmesahrens@gmail.com</a></h1>
                </div>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <div className="skills__list">
                    <ul>
                        <h3>React js</h3>
                        <h3>Typescript</h3>
                        <h3>Javascript</h3>
                        <h3>SCSS</h3>
                        <h3>CSS3</h3>
                        <h3>Tachyons</h3>
                        <h3>Tailwind</h3>
                        <h3>POST CSS</h3>
                        <h3>Next js</h3>
                        <h3>Stimulus Js</h3>
                        <h3>Node js</h3>
                        <h3>Express</h3>
                        <h3>Vue js</h3>
                    </ul>
                    <ul>
                        <h3>Wordpress</h3>
                        <h3>Squarespace</h3>
                        <h3>Webflow</h3>
                        <h3>Semplice</h3>
                        <h3>Firebase</h3>
                        <h3>NPM</h3>
                        <h3>HTML5</h3>
                        <h3>Git</h3>
                        <h3>Github</h3>
                        <h3>SEO</h3>
                        <h3>Nuxt js</h3>
                        <h3>RESTful API's</h3>
                    </ul>
                </div>
                <div className="skills__contact">
                    <h1>Contact</h1>
                    <h3><a href={CV} target="_blank" rel="noopener noreferrer">Resume</a></h3>
                    <h3><a href="https://www.linkedin.com/in/brenthahrens/" target="_blank" rel="noopener noreferrer">Linkedin</a></h3>
                    <h3><a href="mailto:brentholmesahrens@gmail.com" target="_blank" rel="noopener noreferrer">Email: brentholmesahrens@gmail.com</a></h3>
                </div>
            </div>
        </div>
        // <div className="about">
        //     <div className="about__info">
        //         <p>I’m a passionate, self-motivated frontend web developer who thrives in demanding and dynamic roles that leverage my affinity for cutting edge technology and collaboration.</p>
        //         <h3>Skills</h3>
        //         <h5>React js | Vue js | Javascript | CSS3 | SASS | SCSS | Next js | Nuxt js | Node js | NPM | RESTful APIs | React Native | HTML5 | SEO | Github | Wordpress | Squarespace | Git | Google Analytics | Agile</h5>
        //     </div>
        //     <div className="about__contact">
        //         <p><a href={CV} target="_blank" rel="noopener noreferrer">CV</a></p>
        //         <p><a href="https://www.linkedin.com/in/brenthahrens/" target="_blank" rel="noopener noreferrer">Linkedin</a></p>
        //         <p><a href="mailto:brentholmesahrens@gmail.com" target="_blank" rel="noopener noreferrer">Email: brentholmesahrens@gmail.com</a></p>
        //     </div>
        // </div>
    )
}

export default About