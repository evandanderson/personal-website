import { useEffect, useState } from 'react'
import Page from '../../components/Page'
import ProjectItem from '../../components/ProjectItem/ProjectItem'

import projects from '../../projects.json'

export default function Projects() {
    const [activeCard, setActiveCard] = useState(null)

    function handleClick(event) {
        if (event.target.className === 'project-container darken') {
            setActiveCard(null)
        }
    }

    useEffect(function darken() {
        if (activeCard != null) {
            const inactiveCards = document.getElementsByClassName('project-card')
            for (const card of inactiveCards) {
                if (card.className !== 'project-card active') {
                    card.style['z-index'] = -1
                }
            } 
        }
        else {
            const cards = document.getElementsByClassName('project-card')
            for (const card of cards) {
                card.style['z-index'] = 'unset'
            } 
        }
    }, [activeCard])

    document.onclick = handleClick

    return (
        <Page>
            <div className={activeCard != null ? 'project-container darken' : 'project-container'}>
                {projects.map((project, index) => (
                    <ProjectItem
                        key={index}
                        title={project.title}
                        description={project.description}
                        languages={project.languages}
                        src={project.image}
                        alt={project.alt}
                        onClick={() => setActiveCard(index)}
                        active={activeCard === index}
                    />
                ))}
            </div>
        </Page>
    )
}