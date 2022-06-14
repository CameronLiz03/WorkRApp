import React from 'react'
import './services.css'
import { FcTodoList } from 'react-icons/fc'
import ServicesImg from '../servicesimg/ServicesImg'
import image1 from '../../images/sp1.webp'
import image2 from '../../images/sp2.webp'
import image3 from '../../images/sp3.jpg'
import image4 from '../../images/sp4.jpg'
import image5 from '../../images/sp5.jpg'
import image6 from '../../images/sp6.webp'
import image7 from '../../images/sp7.jpg'
import image8 from '../../images/sp8.jpg'
import image9 from '../../images/sp9.webp'
import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs'



export default function Services() {
  return (

    <div>

      <div name='services' className='service'>
          <ul className="serviceList">
                  <button className= "serviceListItem" name="button" type="submit" >Tailor</button>
                  <button className= "serviceListItem" name="button" type="submit" >Nanny</button>
                  <button className= "serviceListItem" name="button" type="submit" >Bricklayer</button>
                  <button className= "serviceListItem" name="button" type="submit" >Tutor</button>
                  <button className= "serviceListItem" name="button" type="submit" >Plumber</button>
          </ul>

          <div className="serviceFilter">
              <input className= "serviceButton" name="button" type="textbox" placeholder="Filter"></input>
              <FcTodoList className='serviceBtnList'/>
          </div>
      </div>

      <div className='servicesImg'>
          < ServicesImg img={image1} name='Sola' location='2.2km away' work='Tailor' star='4.2/5' />
          < ServicesImg img={image2} name='Alex' location='1km away' work='Carpenter' star='4.4/5' />
          < ServicesImg img={image3} name='Obinna' location='1km away' work='Baker' star='4.5/5' />
          < ServicesImg img={image4} name='Adewumi' location='2.7km away' work='Painter' star='2.7/5' />
          < ServicesImg img={image5} name='Abdullahi' location='0.5km away' work='Dry Cleaner' star='3/5' />
          < ServicesImg img={image6} name='Vivian' location='8km away' work='Tailor' star='3.6/5' />
          < ServicesImg img={image7} name='Rofiat' location='4km away' work='Fruit/Food' star='4/5' />
          < ServicesImg img={image8} name='Sheriff' location='1km away' work='Mechanic' star='3.5/5' />
          < ServicesImg img={image9} name='Nkenchor' location='1km away' work='Welder' star='4.9/5' />
      </div>

      <p className='sBox'>
        <button className='arrowS'><BsChevronDoubleLeft /></button>
        <button className='sBoxN'>1</button>
        <button className='sBoxN'>2</button>
        <button className='sBoxN'>3</button>
        <button className='sBoxN'>4</button>
        <button className='sBoxN'>5</button>
        <button className='sBoxN'>6</button>
        <button className='arrowS'><BsChevronDoubleRight /></button>
      </p>

    </div>
    
  )
}
