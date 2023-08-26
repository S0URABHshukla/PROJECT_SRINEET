import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import HeroSection from '../../components/HeroSection/HeroSection'
import Products from '../../components/Products/Products'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'
import Footer from '../../components/Footer/Footer'
import ImageSlider from '../../components/ImageSlider/ImageSlider'
import Whatsapp from '../../components/Whatsapp/Whatsapp'

function Home() {
  return (
    <div>
      {/* <Header/> */}
      <Navbar/>
      <HeroSection/>
      <Products/>
      <ImageSlider/>
      <WhyChooseUs/>
      <Footer/>
      <Whatsapp/>
    </div>
  )
}

export default Home