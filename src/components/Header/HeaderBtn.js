import React from 'react';
import Resume from '../../assets/Resume of Foyzur Rahman Siam.pdf';

const HeaderBtn = () => {
    return (
        <div className='cta'>
            <a href={Resume} download>Download Resume</a>
            <a href="#contact">Let's talk</a>
        </div>
    );
};

export default HeaderBtn;