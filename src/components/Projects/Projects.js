import React from 'react';
import './Projects.css'
import crystal from '../../assets/crystal-computers.PNG';
import fruit from '../../assets/fruit-house.PNG';
import quran from '../../assets/quran-tutor.PNG';


const Projects = () => {
    return (
        <section id='projects'>
            <h5>My Recent Works</h5>
            <h2>Projects</h2>
            <div className="mycontainer project_container">
                <article className="project_item">
                    <div className="project_item_image">
                        <img src={crystal} alt="" />
                    </div>
                    <h3>Crystal Computers</h3>
                    <div className="project_item_btn">
                        <a href="https://github.com/frsiam" className='mybtn' target='_blank'>Github</a>
                        <a href="https://crystal-computers-tech.web.app/" className='mybtn mybtn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>

                <article className="project_item">
                    <div className="project_item_image">
                        <img src={fruit} alt="" />
                    </div>
                    <h3>Fruit House</h3>
                    <div className="project_item_btn">
                        <a href="https://github.com/frsiam" className='mybtn' target='_blank'>Github</a>
                        <a href="https://fruit-stall-96376.web.app/" className='mybtn mybtn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>

                <article className="project_item">
                    <div className="project_item_image">
                        <img src={quran} alt="" />
                    </div>
                    <h3>Quran Tutor</h3>
                    <div className="project_item_btn">
                        <a href="https://github.com/frsiam" className='mybtn' target='_blank'>Github</a>
                        <a href="https://quran-private-tutor.web.app/" className='mybtn mybtn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Projects;