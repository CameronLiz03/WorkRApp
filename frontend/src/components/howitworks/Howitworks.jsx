import React from 'react'
import "./howitworks.css"

export default function Howitworks() {
  return (
    <div name= 'works' className='howItWorks'>
        <div className='howItWorksBox'>
            <span className='howItWorksText'>Find trusted <p><span className='howItWorksSelectText'>services</span></p> around you and hire with confidence.</span>

            <img className='howItWorksImg' src='images/Maps.png' alt=''/>
        </div>
        <div className='howItWorksBall'></div>
    </div>
  )
}
