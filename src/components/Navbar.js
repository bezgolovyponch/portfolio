import React from 'react';
import myPDF from '../assets/CV_Svistukhin.pdf';


const Navbar = () => {
  return (
    <div className="Navigation-wrapper">
      <div className='logo-contain'></div>
      <div className='Nav-links'>
        <a className="Nav-link"  href={myPDF} target="_blank" rel="noopener noreferrer" download>
        <button class="button-28">Download CV</button>
        </a>
      </div>
    </div>
  );
};
export default Navbar;