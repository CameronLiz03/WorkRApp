import React from 'react'
import './contactus.css'

export default function ContactUs() {
  return (
    <div name='contact us' className='contactPage'>
        <div className='contactBox'>
            <div>
                <p className='wName'>WORK<span className='wCP'>R</span></p>
            </div>
            <div className='contactDetails'>
                <p className='contact'>Contact</p>
                <ul className='cItems'>
                    <a href='#'><li className='cList'>info@workr.com</li></a>
                    <a href='tel:08064696654'><li className='cList'>+23481 2222 3333</li></a>
                    <a href='#'><li className='cList'>Twitter</li></a>
                    <a href='#'><li className='cList'>Instagram</li></a>
                    <a href='#'><li className='cList'>Facebook</li></a>
                </ul>
            </div>
            <div className='companyDetails'>
                <p className='company'>Company</p>
                <ul className='cItems'>
                    <a href='#'><li className='cList'>Blog</li></a>
                    <a href='#'><li className='cList'>Press</li></a>
                    <a href='#'><li className='cList'>Careers</li></a>
                    <a href='#'><li className='cList'>About</li></a>
                </ul>
            </div>
        </div>
    </div>
  )
}
