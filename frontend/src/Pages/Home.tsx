// import React from 'react'

import About from "../Components/About"
import Banner from "../Components/Banner"
import Benefits from "../Components/Benefits"
import ContactForm from "../Components/Contact"
import Courses from "../Components/Courses"
import Footer from "../Components/Footer"


function Home() {
  return (
    <div>
        <Banner/>
        <About /> 
        <Courses/>
        <Benefits />
        <ContactForm />
        <Footer />

        
      
    </div>
  )
}

export default Home
