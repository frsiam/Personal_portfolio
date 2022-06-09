import React from 'react';
import './Header.css';
import HeaderBtn from './HeaderBtn';

const Header = () => {
    return (
        <header>
            <div className="container header_container">
                <h5>Hello I'm</h5>
                <h1>Md Foyzur Rahman Siam</h1>
                <h5 className="text-light">Front End Developer</h5>
                <HeaderBtn />
            </div>
        </header>
    );
};

export default Header;