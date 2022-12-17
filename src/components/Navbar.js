import React from 'react';
import CV from './SvistukhinCVM.pdf';

const Navbar = () => {
  return (
    <div className="Navigation-wrapper">
      <div className='logo-contain'></div>
      <div className='Nav-links'>
        <a className="Nav-link" href={CV} target="_blank" rel="noopener noreferrer" download>
        <button className="button-28">Download CV</button>
        </a>
      </div>
    </div>
  );
};
export default Navbar;