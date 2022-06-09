import React from 'react';
import './Header.css';
import HeaderBtn from './HeaderBtn';
import Me from '../../assets/without_bg.png';
import HeaderSocial from './HeaderSocial';

const Header = () => {
    return (
        <header>
            <div className="mycontainer header_container">
                <h5>Hello I'm</h5>
                <h1>Md Foyzur Rahman Siam</h1>
                <h5 className="mytext-light">Front End Developer</h5>
                <HeaderBtn />
                <HeaderSocial />

                <div className="mine">
                    <img src={Me} alt="myImage" />
                </div>

                <a href="#contact" className='scroll_down'>Scroll Down</a>
            </div>
        </header>
    );
};

export default Header;