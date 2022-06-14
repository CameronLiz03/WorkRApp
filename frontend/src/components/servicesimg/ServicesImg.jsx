import React from 'react'
import { VscLocation } from 'react-icons/vsc'
import { AiFillStar } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'
import { HiOutlineArrowCircleLeft, HiOutlineArrowCircleRight } from 'react-icons/hi'

import './servicesimg.css'


export default function ServicesImg(props) {
  return (

    
  <div name='services' className='card'>
    <img src={props.img} alt="" />
    <div className='container'>
      <div className='containerF'>
      <div>
      <p><FaUser/><span>{props.name}</span></p> 
      <p><MdWork/><span>{props.work}</span> </p>
      <p><VscLocation/><span>{props.location}</span> </p>
      </div>
        <p className='starCard'><AiFillStar className='star'/><span>{props.star}</span> </p>
      
      </div>
      
      
      <div className='arrows'>
        <HiOutlineArrowCircleLeft className='leftArrow'/>
        <HiOutlineArrowCircleRight className='rightArrow'/>
      </div>
      
    </div>
  </div>
  )
}
