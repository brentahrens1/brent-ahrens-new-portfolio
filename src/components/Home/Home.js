import React, { useState } from 'react'
import '../../sass/_home.scss'

import { projects } from '../../const/projects'

const Home = () => {
    let linkOpen = false

    const imageEnter = () => {
        linkOpen = true
    }

    const imageLeave = () => {
        linkOpen = false
    }

    return (
        <div className="project">
            {
                projects.map((project, idx) => 
                    <div key={idx} className="project__inner" style={{background: project.background}}>
                        <div className="project__content">
                            <h1 className="project__title">{project.title}</h1>
                            <div className="project__image" onMouseEnter={imageEnter} onMouseLeave={imageLeave}>
                                <img src={project.img} alt={project.title} />
                            </div>
                            <p className="project__description">{project.description}</p>
                            <h1 className={ linkOpen ? "project__link-popup" : "project__link-hide"}><a href={project.link} target="_blank" rel="noopener noreferrer">{project.linkTitle}</a></h1>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Home;