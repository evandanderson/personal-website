import { useEffect, useState } from 'react'
import Banner from '../../components/Banner/Banner'
import Page from '../../components/Page'
import './style.css'
import VibesExample from '../../images/VibesExample.png'

const words = [
    'Apache',
    'AWS',
    'CSS',
    'Debian',
    'Django',
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
                title='Project Spotlight: Vibes for Spotify'
                href='/projects'
                text='View projects'
                description='Vibes is a powerful and unique companion for Spotify that offers analytics, recommendations, playlist creation, and more. Built using the Spotify Web API, Vibes analyzes songs, artists, albums, playlists, and your Spotify library to provide you with a fresh and intuitive way to explore and discover music.'
                src={VibesExample}
                style={{background: 'rgb(252,110,107)', background: 'linear-gradient(180deg, rgba(252,110,107,1) 0%, rgba(104,193,193,1) 100%)'}}
            />
            <Banner title='About Me'
                href='/about'
                text='View more'
                description='About me description'
                src='https://www.giantbomb.com/a/uploads/scale_medium/0/4109/189784-cp.jpg'
                style={{flexDirection: 'row-reverse'}}
            />
        </Page>
    )
}