import './style.css'
import Page from '../../components/Page';

export default function About() {
    return (
        <Page>
            <div className='about-container'>
                <div className='contact-container'>
                <header>
                    <h2>Contact me</h2>
                </header>
                <form>
                    <label for='name'>Name</label>
                    <input id='name' type='text'></input>
                    <label for='company'>Company</label>
                    <input id='company' type='text'></input>
                    <label for='subject'>Subject</label>
                    <input id='subject' type='text'></input>
                    <label for='message'>Message</label>
                    <textarea id='message' type='text'></textarea>
                </form>
                </div>
            </div>
        </Page>
    )
}