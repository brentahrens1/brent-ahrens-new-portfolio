import React from 'react'
import '../../sass/_index.scss'

import { projects } from '../../const/projects'

const Index = () => {
    return (
        <div className="index">
            {
                projects.map((project, idx) => 
                    <div key={idx} className="index__inner" style={{background: project.background}}>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <div className="index__content">
                                <h1 className="index__title">{project.title}</h1>
                                <div className="index__image">
                                    <img src={project.img} alt={project.title} />
                                    <h1 className="index__link-popup"><a href={project.link} target="_blank" rel="noopener noreferrer">{project.linkTitle}</a></h1>
                                </div>
                            </div>
                        </a>
                        <h1 className="index__link-mobile"><a href={project.link} target="_blank" rel="noopener noreferrer">{project.linkTitle}</a></h1>
                    </div>
                )
            }
        </div>
    )
}

export default Index