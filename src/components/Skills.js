import React from "react";
const Skills = () => {
    return (
        <div className="Skills-wrapper">
            <div className="section-skills">
                <div className="narrow-container">
                    <div className="columns">
                        <div className="column">
                            <div className="card-icon">
                                <img width="100rem" alt="icon" height="100rem" src="https://www.svgrepo.com/show/389170/figma.svg">
                                </img>
                            </div>
                            <div className="top-text">
                                <h2 className="card-title">
                                    UI/UX Designer
                                </h2>
                            </div>
                            <div className="mid-text">
                                <h3 className="card-subtitle">
                                I prioritize simplicity in content structure, clean design patterns, and thoughtful interactions in my work.
                                </h3>
                            </div>
                            <div className="bottom-text">
                                <h3 className="card-subtitle">
                                    Things I enjoy designing:
                                    UX, UI, Web, Apps
                                </h3>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card-icon">
                                <img width="100rem" alt="icon" height="100rem" src="https://www.svgrepo.com/show/327388/logo-react.svg">
                                </img>
                            </div>
                            <div className="top-text">
                                <h2 className="card-title">
                                    Frontend Developer
                                </h2>
                            </div>
                            <div className="mid-text">
                                <h3 className="card-subtitle">
                                I enjoy designing and creating projects from the ground up, turning ideas into functional applications in a web browser.
                                </h3>
                            </div>
                            <div className="bottom-text">
                                <h3 className="card-subtitle">
                                Languages + Tools I use: JavaScript (React), HTML, CSS(SCSS, Bootstrap, Tailwind, flexbox), Git, Netlify, JSON
                                </h3>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card-icon">
                                <img width="100rem" alt="icon" height="100rem" src="https://www.svgrepo.com/show/307739/cost-effective-productive.svg">
                                </img>
                            </div>
                            <div className="top-text">
                                <h2 className="card-title">
                                    Team manager
                                </h2>
                            </div>
                            <div className="mid-text">
                                <h3 className="card-subtitle">I am constantly seeking ways to improve processes and keep my team motivated and satisfied with their work.
                                </h3>
                            </div>
                            <div className="bottom-text">
                                <h3 className="card-subtitle">
                                Tools I use: Miro, Jira, Basecamp, University degree
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Skills;