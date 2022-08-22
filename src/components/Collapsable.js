import React, {useState} from "react";
import Contact from "./Contact";

function Collapsable() {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="collapsable">
        <button className="toggle" onClick={() => setIsOpen(!isOpen)}>Toggle</button>
        {isOpen && <div className="content">
           <Contact/>
        </div>}
    </div>
};

export default Collapsable;