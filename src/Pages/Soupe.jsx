import React from 'react'
import Plats from '../Components/Plats/Plats'
import NewDish from '../Components/Plats/NewDish'
import { Cards } from '../Components/Plats/cards'
import { useTheme } from '../ThemeContext'; 
import Footer from '../Components/footer/footer'

const Soupe = () => {
const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <div className=''>
      <Plats />
      <div>
        <p className={`font-script text-4xl center font-extrabold dark:text-white ${isDarkMode ? 'text-gray-200' : 'text-[#676f3a]'} pl-[370px]  ${isDarkMode ? 'bg-gradient-to-b from-[#1a202c] to-[#2d3748]' : 'bg-[#ffffff] '} italic  pb-[40px]`}>TOP LISTE</p>
      </div>
      <Cards />
      <NewDish />
      <Footer />
    </div>
    
  )
}

export default Soupe
