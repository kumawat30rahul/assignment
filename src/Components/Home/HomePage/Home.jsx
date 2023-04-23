import React from 'react'
import About from '../About'
import Navbar from '../Navbar'
import Testimonials from '../User Testimonials/Testimonials'
import ChakraComponent from '../Chakra/MPoneSolComponent'
import Reviews from '../Reviews/R-Component'
import Footer from '../Footer'
import AstroComp from '../Astrologers/AstrologerComponent'
import Background from '../../../Components/Home/Common/Background'
import Banner from '../Banner'

function Home() {
  return (
    <div className='home'>
      <Navbar />
      <About />
      <Background >
        <Testimonials />
        <Banner />
        <AstroComp />
      </Background>
       <ChakraComponent />
       <Reviews /> 
      <Footer /> 
    </div>
  )
}

export default Home
