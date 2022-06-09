import React from 'react';
import './About.css';
import Me from '../../assets/mine.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
    return (
        <section id='about'>
            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div className="mycontainer about_container">
                <div className="about_me">
                    <div className="about_me_image">
                        <img src={Me} alt="" />
                    </div>
                </div>

                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <FaAward className='about_icon' />
                            <h5>Experience</h5>
                            <small>1 Years Experience</small>
                        </article>

                        <article className="about_card">
                            <FiUsers className='about_icon' />
                            <h5>Clients</h5>
                            <small>1 Years Experience</small>
                        </article>

                        <article className="about_card">
                            <VscFolderLibrary className='about_icon' />
                            <h5>Projects</h5>
                            <small>1 Years Experience</small>
                        </article>
                    </div>
                    <p>A Electrical and Electronic Engineering graduate willing to learn new technologies and skills in a short period of time. I want to demonstrate and build my expertise as programmer by seeking the knowledge and skill sets in the areas of new technology, effective and efficient communication and best practice processes. To prove myself as a quick learner and highly energetic person I'm ready to face any challenge and also eager to build myself as a successful teammate.</p>
                    <a href="#contact" className='mybtn mybtn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    );
};

export default About;