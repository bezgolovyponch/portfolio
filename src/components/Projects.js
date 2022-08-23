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
                                <h3>eCommerce site built in React</h3>
                                <a target="blank" href="https://www.pragout.cz/" >
   <button className="button-28">
      Open live
   </button>
</a> 
                            </div>
                        </div>
                    </div>
                    <div className="project">
                    <div className="img-container">
                            <img className="pr-image" alt="pragout-screenshot" src="https://i.postimg.cc/xC75J5rJ/arch-site.jpg"></img>
                            <div className="overlay">
                            <h3>Unused design for the client</h3>
                            <a target="blank" href="https://arh-site.webflow.io/" >
   <button className="button-28">
      Open live
   </button>
</a>
                                
                            </div>
                        </div>
                    </div>
                    <div className="project">
                    <div className="img-container">
                            <img className="pr-image" alt="pragout-screenshot" src="https://i.postimg.cc/hGBHhS8W/portfolio.jpg"></img>
                            <div className="overlay">
                            <h3>This one is also quite recent</h3>
                            
                               {/*  <button class="button-28">Contact</button> */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};
export default Projects;