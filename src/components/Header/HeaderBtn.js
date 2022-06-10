import React from 'react';
import Resume from '../../assets/Resume of Foyzur Rahman Siam.pdf';

const HeaderBtn = () => {
    return (
        <div className='cta'>
            <a href={Resume} download className='newbtn'><span>Download Resume</span><i></i></a>
            <a href="#contact" className='newbtn2'><span>Contact Me</span><i></i></a>
        </div>
    );
};

export default HeaderBtn;