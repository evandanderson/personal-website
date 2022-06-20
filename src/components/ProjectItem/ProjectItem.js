import LanguageItem from "../LanguageItem/LanguageItem"
import "./style.css"

export default function ProjectItem(props) {
    return (
        <div className="project-card-container">
            <div className="project-card" onClick={props.onClick}>
                <img className="project-image" src={props.src} alt={props.alt} height='100%' width='100%'></img>
                <div className="project-content">
                    <header>
                        <h3>{props.title}</h3>
                    </header>
                    <div className="project-description">
                        <p>{props.description}</p>
                        <br/>
                        <div className="project-languages">
                            {props.languages.map((langauge, index) => (
                                <LanguageItem key={index} language={langauge} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}