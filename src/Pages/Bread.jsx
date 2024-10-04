import React from 'react'
import Footer from '../Components/footer/footer'
import Header from '../Components/Bread/Header'
import Discount from '../Components/Bread/Discount'
import About from '../Components/Bread/About'
import Feature from '../Components/Bread/Feature'
import Product from '../Components/Bread/Products'
import ExploreMore from '../Components/Bread/ExploreMore'
import bg from '../Components/Assets/bg_footer.png'


const Bread = () => {

  return (
    <div>
        <Header />
        <Product />
        <Discount />
        <ExploreMore />
        <About />
        <Feature />
        
        

      <Footer style={{ backgroundImage: `url(${bg})` }} className="relative  bg-no-repeat bg-cover text-white"/>
    </div>
  )
}

export default Bread