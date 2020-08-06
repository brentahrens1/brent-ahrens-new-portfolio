import React from 'react'
import '../../sass/_home.scss'

import { projects } from '../../const/projects'

const Home = () => {
    return (
        <div className="project">
            {
                projects.map((project, idx) => 
                    <div className="project__inner" style={{background: project.background}}>
                        <div className="project__content">
                            <h1 className="project__title">{project.title}</h1>
                            <div className="project__image">
                                <img src={project.img} alt={project.title} />
                            </div>
                            <p className="project__description">{project.description}</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Home;