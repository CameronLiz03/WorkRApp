import React from 'react';
import "./header.css";
import { BiSearchAlt2 } from 'react-icons/bi'

export default function Header() {
  return (
    <div name= 'home' className='header'>
        
        <div className='headerTitles'>
            <span className='headerTitleLg'>Discover your neighbourhood</span>
            <span className='headerTitleSm'>Find services around you</span>
            
            <div className='headerImgs'>

              <img className='headerImg1' src='images/Electrician.jpg' alt=''/>
              <img className='headerImg2' src='images/Plumber.jpg' alt=''/>
              <img className='headerImg3' src='images/Tailor.jpg' alt=''/>
              <img className='headerImg4' src='images/Baker.jpg' alt=''/>
              <img className='headerImg5' src='images/Tutor.jpg' alt=''/>
            </div>
            

            <form className='header'>
              <div className='headerSearch'>
              <input className='headerSearchBox' type='text' placeholder='Service, street...' />
              <BiSearchAlt2 className='headerSearchIcon'/>
              </div>
            </form>
            
        </div>

        
        
    </div>
  )
}

