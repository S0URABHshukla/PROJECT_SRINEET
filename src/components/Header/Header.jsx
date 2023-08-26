import React from 'react'
import header from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const recipientEmail = "Enquire.srineet@gmail.com";
  const subject = "Inquiry";
  const body = "Hello, I have an inquiry.";

  const phoneNumber = "+918571971583";

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = () => {
    const mailtoLink = `mailto:${recipientEmail}`;
    window.location.href = mailtoLink;
  };
  return (
    <div  className={header.container} >
        <div className={header.download} style={{color:'#777777', fontSize:''}}> <a style={{textDecoration:'none', color:'#777777'}} href={"./Srineet-Brochure.pdf"}> <span style={{marginRight:'5px'}}><FontAwesomeIcon icon={faFileArrowDown} /></span > Download catalouge</a></div>
        <div style={{display:'flex', gap:'10px'}}>
          <div onClick={handleEmailClick}><span style={{fontSize:'',color:'#777777'}}>Mail</span>  <span className={header.infoo}  style={{color:'#FCC22B',fontFamily:'"Montserrat", Helvetica, Arial, sans-serif', fontSize:''}}>Enquire.srineet@gmail.com</span></div>
          <div onClick={handlePhoneClick}><span style={{fontSize:'',color:'#777777'}}>Contact us</span> <span className={header.infoo} style={{color:'#FCC22B',fontFamily:'"Montserrat", Helvetica, Arial, sans-serif', fontSize:''}}>+91 8571971583</span></div>
        </div>
    </div>
  )
}

export default Header