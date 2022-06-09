import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';

const HeaderSocial = () => {
    return (
        <div className='header_social'>
            <a href="https://linkedin.com/mdfrs" target='_blank'>
                <BsLinkedin />
            </a>
            <a href="https://github.com/frsiam" target='_blank'>
                <FaGithub />
            </a>
            <a href="https://facebook.com/siam.frs" target='_blank'>
                <BsFacebook />
            </a>
        </div>
    );
};

export default HeaderSocial;