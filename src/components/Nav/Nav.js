import React, { useState } from 'react';
import './Nav.css';
import { FaHome } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { MdLibraryBooks } from "react-icons/md";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { BiMessageRoundedDetail } from "react-icons/bi";

const Nav = () => {
    const [activeNav, setActiveNave] = useState('#')
    return (
        <nav>
            <a href="#" onClick={() => setActiveNave('#')} className={activeNav === '#' ? 'active' : ''}><FaHome /></a>

            <a href="#about" onClick={() => setActiveNave('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>

            <a href="#projects" onClick={() => setActiveNave('#projects')} className={activeNav === '#projects' ? 'active' : ''}><MdOutlineMiscellaneousServices /></a>

            <a href="#experience" onClick={() => setActiveNave('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdLibraryBooks /></a>
            <a href="#contact" onClick={() => setActiveNave('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageRoundedDetail /></a>
        </nav>
    );
};

export default Nav;