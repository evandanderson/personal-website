import './style.css'

const colors = {
    CSS: "#563d7c",
    HTML: "#e34c26",
    JavaScript: "#f1e05a",
    Lua: "#000080",
    Python: "#3572A5"
}

export default function LanguageItem(props) {
    return (
        <div className='language-item'>
            <svg>
                <circle cx='0.5rem' cy='0.5rem' r='0.5rem' fill={colors[props.language]}/>
            </svg>
            <span>{props.language}</span>
        </div>
    )
}