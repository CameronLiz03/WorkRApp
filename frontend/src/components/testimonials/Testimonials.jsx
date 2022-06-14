import React from 'react'
import "./testimonials.css"
import image1 from '../../images/rp1.jpg'
import image2 from '../../images/rp2.jpg'
import image3 from '../../images/rp3.jpg'
import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs'

export default function Testimonials() {
  return (
    <div className='pTb'>
        <div className='tText'>
            <h1>Trusted by over <span className='tCount'>400,000</span> users</h1>
                <div className='tCards'>
                    <div className='tCard'>
                        <h4 className='tCText'><p>"WorkR has been a life saver since I moved to Lagos"</p></h4>
                        <div className='tImg'>
                        <img src={image1} alt="" />
                            <p>Babatunde in Oshodi</p>
                        </div>
                    </div>

                    <div className='tCard'>
                        <h4 className='tCText'><p>"I found the best jollof rice spot in my hood on WorkR!!"</p></h4>
                        <div className='tImg'>
                        <img src={image2} alt="" />
                            <p>Simeon in Ikeja</p>
                        </div>
                    </div>

                    <div className='tCard'>
                        <h4 className='tCText'><p>"I got a tailor to mend my dress in under 5 mins on WorkR"</p></h4>
                        <div className='tImg'>
                        <img src={image3} alt="" />
                            <p>Ijeoma in Ikoyi</p>
                        </div>
                    </div>
                </div>

                <p className='tArrow'>
                <button><BsChevronDoubleLeft className='tArrow1' /></button>
        
                <button><BsChevronDoubleRight className='tArrow2' /></button>
                </p>

                <button className= "tButton">Create an account today</button>
                
            </div>

        
            
        
    </div>
  )
}
