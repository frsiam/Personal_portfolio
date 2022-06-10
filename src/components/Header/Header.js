import React from 'react';
import './Header.css';
import HeaderBtn from './HeaderBtn';
import Me from '../../assets/without_bg.png';
import HeaderSocial from './HeaderSocial';
import { Typewriter } from 'react-simple-typewriter'

const Header = () => {
    return (
        <header>
            <div className="mycontainer header_container">
                <div>
                    <h5>Hello I'm</h5>
                    <h1>Md Foyzur Rahman Siam</h1>
                    <h3 className="mytext-light">
                        Frontend Developer
                    </h3>
                    <HeaderBtn />
                </div>
                {/* <HeaderSocial /> */}

                <div className="mine">
                    <img src={Me} alt="myImage" />
                </div>

                {/* <a href="#contact" className='scroll_down'>Scroll Down</a> */}
            </div>
        </header>
    );
};

export default Header;