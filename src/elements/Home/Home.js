import { useEffect, useState } from 'react'
import Banner from '../../components/Banner/Banner'
import Page from '../../components/Page'
import './style.css'
import VibesExample from '../../images/VibesExample.png'
import Profile from '../../images/Profile.png'

const words = [
    'Apache',
    'AWS',
    'CSS',
    'Debian',
    'Django',
    'GCP',
    'Git',
    'HTML',
    'Java',
    'JavaScript',
    'Lua',
    'Python',
    'React',
    'SQLite',
    'Webpack'
]

export default function Home() {

    const delay = 500
    let [text, setText] = useState('')
    let [index, setIndex] = useState(0)

    useEffect(() => {
            for (let i = 0; i < words[index].length + 1; i++) {
                const currentText = words[index].substring(0, i)
                setTimeout(() => setText(currentText), 100 * i)
                setTimeout(() => setText(currentText), (100 * (words[index].length - 1)) + delay + ((words[index].length - (i + 1)) * 100))
            }
            if (index < words.length - 1) {
                setTimeout(() => setIndex(index + 1), (100 * (words[index].length - 1)) + delay + ((words[index].length - 1) * 100))
            }
    }, [index])

    return (
        <Page>
            <div className='hero-banner'>
                <img className='hero-image' src='https://www.teahub.io/photos/full/281-2811959_photo-wallpaper-computer-coding-programing-codding-software-development.jpg' alt=''></img>
                <h1 className='hero-text'>
                    Building innovative solutions
                    <br/>
                    {`with ${text}`}
                </h1>
            </div>
            <Banner
                type='project'
                title='Project Spotlight: Vibes for Spotify'
                href='/projects'
                text='View projects'
                description='Vibes is a powerful and unique companion for Spotify that offers analytics, recommendations, playlist creation, and more. Built using the Spotify Web API, Vibes analyzes your Spotify library to provide you with a fresh and intuitive way to explore and discover music.'
                src={VibesExample}
                alt='Vibes for Spotify screenshot'
            />
            <Banner
                type='about'
                title='About Me'
                href='/about'
                text='View more'
                description="I'm a full-stack developer from Dallas, Texas with over 5 years of personal and academic experience. I enjoy finding innovative and creative solutions to challenging problems ranging from UI/UX development to API design."
                src={Profile}
                alt='Picture of Evan Anderson'
            />
        </Page>
    )
}