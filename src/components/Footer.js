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
          
        Interested in collaborating with me?
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
        <h3>
          Handcrafted by me ® Maxim Svistukhin
        </h3>
      </div>
    </div>
    
    
    
  )
}
export default Footer;