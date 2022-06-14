import React from 'react';
import "./topbar.css";
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-scroll';

export default function Topbar() {
  return (
    <div className="top">
        <div className="topLeft">
            <h2 className="topTitle">Work<span className='letterR'>R</span></h2> 
        </div>

        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem"><Link  to="home"  smooth={true} offset={-100} duration={500}><span className='letterHome'>Home</span></Link></li>
                <li className="topListItem"><Link  to="works"  smooth={true} offset={-100} duration={500}>How it works</Link></li>
                <li className="topListItem"><Link  to="services"  smooth={true} offset={-150} duration={500}>Services</Link></li>
                <li className="topListItem"><Link  to="providers"  smooth={true} offset={-230} duration={500}>SignUp as a Service Provider</Link></li>
                <li className="topListItem"><Link  to="contact us"  smooth={true} offset={-10} duration={500}>contact us</Link></li>
            </ul>
        </div> 

        <div className="topRight">
            <button className= "topButton" name="button" type="submit">SignUp/Login</button>
            <FaUserAlt className='topUserIcon'/>
        </div>  
    
    </div>
  )
}
