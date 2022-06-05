import { useEffect, useState } from 'react'
import Page from '../../components/Page'
import './style.css'

const words = [
    'Apache',
    'AWS',
    'Babel',
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
            <div className='home-container'></div>
            <div className='home-banner'>
                <code>
                    <strong>Building innovative solutions</strong>
                    <br/>
                    <strong>{`with ${text}`}</strong>
                </code>
            </div>
        </Page>
    )
}