import React from 'react'
import Footer from '../Components/footer/footer'
import Header from '../Components/Pizza/Header'
import Chef from '../Components/Pizza/Chef'
import Delivery from '../Components/Pizza/Delivery'
import ChefPizza from '../Components/Pizza/ChefPizza'
import Menu from '../Components/Pizza/Menu'
import Offer from '../Components/Pizza/Offer'
import SpeedyDeliverySection from '../Components/Pizza/SpeedyDeliverySection'


const Pizza = () => {

  return (
    <div>
      <SpeedyDeliverySection />
      
     <Menu />
     <Chef />
     <ChefPizza />
    <Header />

    
    
    
    
    <Delivery />
    
    <Offer />
    <Footer />
    </div>
  )
}

export default Pizza