import React from 'react';
import './Nav.css';
import { FaHome } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { MdLibraryBooks } from "react-icons/md";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { BiMessageRoundedDetail } from "react-icons/bi";

const Nav = () => {
    return (
        <nav>
            <a href="#">
                <FaHome />
            </a>
            <a href="#about">
                <AiOutlineUser />
            </a>
            <a href="#experience">
                <MdLibraryBooks />
            </a>
            <a href="#services">
                <MdOutlineMiscellaneousServices />
            </a>
            <a href="#contact">
                <BiMessageRoundedDetail />
            </a>
        </nav>
    );
};

export default Nav;