import React from 'react';
import './Experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skill I Have</h5>
            <h2>My Experience</h2>

            <div className="mycontainer experience_container">
                <div className="experience_frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <BsPatchCheckFill />
                            <h4>HTML</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill />
                            <h4>CSS</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill />
                            <h4>Javascript</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill />
                            <h4>Bootstrap</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill />
                            <h4>TailwindCSS</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill />
                            <h4>React</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                    </div>
                </div>
                <div className="experience_frontend">
                    <h3>Backend Development</h3>
                    <div className="experience_content">

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;