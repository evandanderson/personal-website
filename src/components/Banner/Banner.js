import './style.css'

export default function Banner(props) {
    return (
        <div className="banner" style={props.style}>
            <img className='banner-image' src={props.src} alt={props.alt}></img>
            <div className='banner-description'>
                <header><h2>{props.title}</h2></header>
                <p>{props.description}</p>
                <br/>
                <a href={props.href}>{props.text}</a>
            </div>
        </div>
    )
}