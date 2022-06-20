import { useEffect, useState } from 'react'
import Page from '../../components/Page'
import ProjectItem from '../../components/ProjectItem/ProjectItem'

import projects from '../../projects.json'

export default function Projects() {
    const [activeCard, setActiveCard] = useState(null)
    const [lastActiveCard, setLastActiveCard] = useState(null)

    function handleClick(event) {
        if (event.target.className === 'project-container darken') {
            setLastActiveCard(activeCard); setActiveCard(null)
        }
    }

    useEffect(() => {
        if (lastActiveCard != null) {
            const lastCard = document.getElementsByClassName('project-card')[lastActiveCard]
            const lastContainer = lastCard.parentElement
            const position = lastContainer.getBoundingClientRect()
            lastCard.className = 'project-card' //needs to remove !imporant top and left before proceeding
            lastCard.style['top'] = `${position.top}px !important`
            lastCard.style['left'] = `${position.left}px !important`
            setTimeout(() => {
                lastCard.style['position'] = 'unset'
            }, 250)
        }
    }, [lastActiveCard])

    useEffect(() => {
        if (activeCard != null) {
            setLastActiveCard(null)
            const cards = document.getElementsByClassName('project-card')
            for (let index = 0; index < cards.length; index++) {
                const card = cards[index]
                if (index === activeCard) {
                    const position = card.getBoundingClientRect()
                    card.style['left'] = `${position.left}px`
                    card.style['top'] = `${position.top}px`
                    card.style['position'] = 'fixed'
                    setTimeout(() => {
                        card.className = 'project-card active'
                    }, 1)
                }
                else {
                    card.parentElement.style['z-index'] = -1
                }
            }
        }
        else {
            const cards = document.getElementsByClassName('project-card')
            for (const card of cards) {
                card.parentElement.style['z-index'] = 'unset'
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
                    />
                ))}
            </div>
        </Page>
    )
}