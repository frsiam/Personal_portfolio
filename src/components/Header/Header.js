import React from 'react';

const Header = () => {
    return (
        <>
            <header className='header'>
                <div className="container d_flex">
                    <div className="logo">
                        <img src="" alt="" />
                    </div>
                    <div className="navlink">
                        <ul className="link f_flex uppercase">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#resume">Resume</a></li>
                            <li><a href="clients">Clients</a></li>
                            <li><a href="#blog">Blog</a></li>
                            <li><a href="#content">Content</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;