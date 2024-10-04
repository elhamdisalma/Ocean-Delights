import React from 'react'
import { useTheme } from '../ThemeContext'; 
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Caroussel from '../Components/Caroussel/Component'
import Footer from '../Components/footer/footer'
import Chefs from '../Components/Hero/Chefs';
import Order from '../Components/Hero/Order';
import CakeSelector from '../Components/Hero/CakeSelector';
import OrderSteps from '../Components/Hero/OrderSteps';


const AboutUs = () => {
  const { isDarkMode, toggleDarkMode } = useTheme(); 

  return (
    <div className={`h-screen bg-gradient-to-b  ${isDarkMode ? 'bg-gray-800' : 'from-[#ffe1ea] to-[#e1ffea22]'}`}>
      <Hero />
        
      <Caroussel />
      
      <Order />
      <CakeSelector />
      <OrderSteps />
      <Chefs />
      <Popular />

      <Footer />
    </div>
  )
}

export default AboutUs