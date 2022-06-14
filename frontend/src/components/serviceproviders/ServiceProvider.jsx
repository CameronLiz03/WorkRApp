import React from 'react'
import "./serviceproviders.css"
import image1 from '../../images/sup.png'

export default function ServiceProvider() {
  return (
    <div  name= 'providers' className='pCBox'>
        <div className='providerBox'>
            <h4 className='providerText'>83% of customers say <p>they'd rather do</p> <p>business <span className='providerSelectText'>online</span></p></h4> 
            <button className='clickBtn'>Join as a service provider</button>
        </div> 

        <div>
            <img className='providerImg' src={image1} alt=''/>
            <div className='imgBall'></div>
        </div>  
    </div>
  )
}

