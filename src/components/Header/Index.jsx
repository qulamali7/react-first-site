import React from 'react';
import "./Index.scss"

const Header = () => {
    return (
        <header id='header'>
            <div className='header-content'>
                <h2>Start Bootstrap</h2>
                <nav>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Portfolio</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header