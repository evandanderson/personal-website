import './style.css'

export default function Banner(props) {
    return (
        <div className={`banner ${props.type}`}>
            <img className={`banner-image ${props.type}`} src={props.src} alt={props.alt} style={props.imageStyle}></img>
            <div className={`banner-description ${props.type}`}>
                <header><h2>{props.title}</h2></header>
                <p>{props.description}</p>
                <br/>
                <a href={props.href}>{props.text}</a>
            </div>
        </div>
    )
}