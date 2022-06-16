import './style.css'

export default function Banner(props) {
    return (
        <div className={`banner ${props.type}`}>
            <img className='image' src={props.src} alt={props.alt}></img>
            <div className='description'>
                <header><h2>{props.title}</h2></header>
                <p>{props.description}</p>
                <br/>
                <a href={props.href}>{props.text}</a>
            </div>
        </div>
    )
}