import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faZ,faAnchorLock } from '@fortawesome/free-solid-svg-icons';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import footer from './Footer.module.css'

function Footer() {
  return (
    <div id='foo'>
        <footer className='bg-black text-white pt-5 pb-4'>
            <div className='container text-center text-md-left' >
                <div className='row text-center text-md-left'>
                    <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 text-start pardeep '>
                        <h5 className='text-uppercase mb-4 font-weight-bold changesColor ' style={{color:"#235395"}}>SRIneet</h5>
                        <p className={footer.srineet} style={{textAlign:'justify'}}>SRIneet was built on the platform of customer satisfaction, innovation & Quality Control to revolutionize the industry in India. SRIneet has remained true to its core value.</p>
                        
                    </div>
                    <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-3'>
                        <h5 className='text-uppercase mb-4 font-weight-bold changesColor text-start pardeep' style={{color:"#235395"}}>Products</h5>
                        <p style={{width:'100%', textAlign:'start'}}>
                            <a href="#" className='text-white' style={{textDecoration:"none"}}>Table Top</a>                            
                        </p>
                        <p style={{width:'100%', textAlign:'start'}}>
                            <a href="#" className='text-white' style={{textDecoration:"none"}}>Wall Hung Basin</a>                            
                        </p>
                        <p style={{width:'100%', textAlign:'start'}}>
                            <a href="#" className='text-white' style={{textDecoration:"none"}}>Basin With Pedestal</a>                            
                        </p>
                        <p style={{width:'100%', textAlign:'start'}}>
                            <a href="#" className='text-white' style={{textDecoration:"none"}}>One Piece Closet</a>                            
                        </p>
                    </div>
                    <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mt-3'>
                        <h5 className='text-uppercase mb-4 font-weight-bold changesColor text-start pardeep' style={{color:"#235395"}}>usefullinks</h5>
                            <p style={{width:'auto', textAlign:'start'}}>
                                <a href="#" className='text-white' style={{textDecoration:"none"}}>Why Choose Us?</a>                            
                            </p>
                            <p style={{width:'auto', textAlign:'start'}}>
                                <a href="#" className='text-white' style={{textDecoration:"none"}}>Download catalouge</a>                            
                            </p>
                            <p style={{width:'auto', textAlign:'start'}}>
                                <a href="#" className='text-white' style={{textDecoration:"none"}}>Contact us</a>                            
                            </p>
                            <p style={{width:'auto', textAlign:'start'}}>
                                <a href="#" className='text-white' style={{textDecoration:"none"}}>Help</a>                            
                            </p>
                    </div>
                    <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mt-3'>
                        <h5 className='text-uppercase mb-4 font-weight-bold changesColor text-start pardeep' style={{color:"#235395"}}>Contact</h5>
                        <div className='text-start pardeep'>
                        <p style={{width:'auto'}}><span><HomeIcon/> </span>Faridabad , Haryana</p>
                        <p style={{width:'auto'}}><span><EmailIcon/> </span>info@srineet.com</p>
                        <p style={{width:'auto'}}><span><CallIcon/> </span>+91 8571971583</p>
                        </div>
                    </div>

                </div>
                <hr className='mb-4'/>

                <div className='row align-items-center'>
                    <div className='col-md-7 col-lg-8'>
                        <p style={{maxWidth:'100%',textAlign:'center',width:'100%'}}>
                            Copyright @2022-2023 All rights reserved by:<a href="#" target='' style={{textDecoration:"none"}}> <strong className='changesColor'>SRIneet</strong></a>
                        </p>
                    </div> 
                    <div className='col-md-5 col-lg-4'>
                        <div className='text-center text-md-right'>
                            <ul className='list-unstyled list-inline'>
                                <li className='list-inline-item'>
                                    <a href="#" className='btn-floating btn-sm text-white' style={{fontSize:"23px"}}><LinkedInIcon /></a>
                                </li>
                                <li className='list-inline-item'>
                                    <a href="#" className='btn-floating btn-sm text-white' style={{fontSize:"23px"}}><FacebookIcon/></a>
                                </li>
                                <li className='list-inline-item'>
                                    <a href="#" className='btn-floating btn-sm text-white' style={{fontSize:"23px"}}><InstagramIcon/></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        
    </div>
  )
}

export default Footer