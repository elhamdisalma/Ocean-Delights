import React from 'react'
import ChikenWings from '../Components/Food/ChikenWings'
import Categories from '../Components/Food/Categories'
import Kitchen from '../Components/Food/Kitchen'
import Recipes from '../Components/Food/Recipes'
import Inbox from '../Components/Food/Inbox'
import Footer from '../Components/footer/footer'
import Instagram from '../Components/Food/Instagram'
import CardsGrid from '../Components/Food/Card'

const Product = () => {
  return (
    <div>
      <Kitchen />
      
      <Categories />
      <ChikenWings />
      <Instagram />
      <Recipes />
      <CardsGrid />
      <Inbox />
      <Footer />
      
    </div>
  )
}

export default Product
