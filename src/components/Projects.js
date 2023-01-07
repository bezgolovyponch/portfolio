import React from "react";
const Projects = () => {
  return (
    <div className="projects-section">
      <div className="projects-wrapper">
        <div className="projects-text">
          <h2 className="projects-subtitle">
          Take a look at some of my recent projects below - they may not be world-changing, but they get the job done! 
          </h2>
        </div>
        <div className="columns-projects">
          <div className="project">
            <div className="img-container">
              <img
                className="pr-image"
                alt="pragout-screenshot"
                src="https://i.postimg.cc/Yq0gKMYR/pragout-screenshot.jpg"
              ></img>
              <div className="overlay">
                <h3>eCommerce site built in React</h3>
                <a target="blank" href="https://www.pragout.cz/">
                  <button className="button-28">Open live</button>
                </a>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="img-container">
              <img
                className="pr-image"
                alt="pragout-screenshot"
                src="https://i.postimg.cc/xC75J5rJ/arch-site.jpg"
              ></img>
              <div className="overlay">
                <h3>Unused design for the client</h3>
                <a target="blank" href="https://arh-site.webflow.io/">
                  <button className="button-28">Open live</button>
                </a>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="img-container">
              <img
                className="pr-image"
                alt="pragout-screenshot"
                src="https://i.postimg.cc/FsP7cR18/image.png"
              ></img>
              <div className="overlay">
                <h3>Fully responsive palette-picker app (JS)</h3>
                <a target="blank" href="https://create-palette.netlify.com/">
                  <button className="button-28">Open live</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
