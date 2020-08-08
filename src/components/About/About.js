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
                <p><a href="#" target="_blank">CV</a></p>
                <p><a href="#" target="_blank">Linkedin</a></p>
                <p><a href="#" target="_blank">Email: brentholmesahrens@gmail.com</a></p>
            </div>
        </div>
    )
}

export default About