import React from 'react';
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>All Rights Reserved to Fr Siam</p>
            <p>&copy; {year}</p>
        </footer>
    );
};

export default Footer;