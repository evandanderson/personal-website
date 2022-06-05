import React from 'react';

export default function Page(props) {
    return (
        <div className='app'>
            <nav>
                <ul>
                    <li><a className='nav-item' href='/'>Home</a></li>
                    <li><a className='nav-item' href='/projects'>Projects</a></li>
                    <li><a className='nav-item' href='/about'>About</a></li>
                </ul>
            </nav>
            <main>
                {props.children}
            </main>
            <footer></footer>
        </div>
    )
}