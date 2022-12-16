import React from "react";

const Projects = () => {
    return (
        <div className="projects-section">
            <div className="projects-wrapper">
                <h2 className="projects-title">
                    My recent work
                </h2>
                <h2 className="projects-subtitle">
                    Here are a few past projects I've done.
                </h2>
                <div className="columns-projects">
                    <div className="project">
                        <div className="img-container">
                            <img className="pr-image" alt="pragout-screenshot"  src="https://i.postimg.cc/Yq0gKMYR/pragout-screenshot.jpg"></img>
                            <div className="overlay">
                                <h3>E-commerce platform built from scratch</h3>
                                <button className="button-28">Download CV</button>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                    <div className="img-container">
                            <img className="pr-image" alt="pragout-screenshot" src="https://i.postimg.cc/xC75J5rJ/arch-site.jpg"></img>
                            <div className="overlay">
                            <h3>E-commerce platform built from scratch</h3>
                                <button className="button-28">Download CV</button>
                                
                            </div>
                        </div>
                    </div>
                    <div className="project">
                    <div className="img-container">
                            <img className="pr-image" alt="pragout-screenshot" src="https://i.postimg.cc/hGBHhS8W/portfolio.jpg"></img>
                            <div className="overlay">
                            <h3>E-commerce platform built from scratch</h3>
                                <button className="button-28">Download CV</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};
export default Projects;