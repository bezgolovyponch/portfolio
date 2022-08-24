import React from 'react';
import { Collapsible } from 'collapsible-react-component'
import 'collapsible-react-component/dist/index.css'
import Contact from './Contact';


const Footer = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <div className='Footer'>
    <div className='contact-section'>
      <div className='contact-subtitle'>
        <h2 className='subtitle'>
          
        Have some something to discuss? Let's chat! 
        </h2>
      </div>
      <button id='btn'
        className='button-28'
        type='button'
        style={{ display: open ? 'none' : 'flex' }}
        onClick={() => {
          setOpen(!open)
        }}

      >
        Get in touch!
      </button>
      <Collapsible open={open}>
        <Contact />
      </Collapsible>
      
    </div >
    <div className='real-footer'>
      <div className='social-links'>
    <a target="blank"  href="https://github.com/bezgolovyponch/" >
    <img alt='git-logo' src="https://www.svgrepo.com/show/341847/github.svg"></img>

</a>
<h4 style={{paddingLeft: "2px"}}> 
        <span/> my GitHub
        </h4>

</div>
        <h4>
          Handcrafted by me ®
        </h4>
      </div>
    </div>
    
    
    
  )
}
export default Footer;