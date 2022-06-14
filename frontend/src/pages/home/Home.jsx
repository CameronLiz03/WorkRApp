import React from 'react'
import "./home.css"
import Header from '../../components/header/Header'
import Howitworks from '../../components/howitworks/Howitworks'
import Services from '../../components/services/Services'
import Testimonials from '../../components/testimonials/Testimonials'
import ServiceProvider from '../../components/serviceproviders/ServiceProvider'
import ContactUs from '../../components/contactus/ContactUs'

export default function Home() {
  return (
    <>
      <div className='home'>
      <Header />
      
      <Howitworks />  
      
      <Services /> 

      <Testimonials />

      <ServiceProvider />

      <ContactUs />
      </div>
    </>
  )
}
