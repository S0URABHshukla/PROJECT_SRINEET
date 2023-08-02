import React from 'react'
import {Link} from 'react-router-dom'
import nav from './Navbar.module.css'

function Navbar() {
  return (
    <div className={nav.navbar}>
        <div className={nav.logo}> <img style={{width:'100px'}} src="srineetlogo.png" alt="logo" /> </div>
        <div >
             <Link to="/" className={nav.link}>Home</Link> 
             <Link to="/services" className={nav.link}>Download Catalogues</Link> 
             <Link to="/termsOfService" className={nav.link}>Why Choose Us?</Link> 
             <Link to="/api" className={nav.link}>Contact Us</Link> 
        </div>
        {/* <div> <button className={nav.btn}>Sign up</button> </div> */}
        <div>
            
        </div>
    </div>
  )
}

export default Navbar