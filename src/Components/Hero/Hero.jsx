import React from 'react';
import { useTheme } from '../../ThemeContext'; 
import arrow_icon from '../Assets/arrow.png';
import cakeC from '../Assets/cakeC.png';
import cupcake_icon from '../Assets/cupcake_icon.png';
import cake2 from '../Assets/strawberry-cake.png'
import cake from '../Assets/cct.png'

const Hero = () => {
  const { isDarkMode } = useTheme(); // Utilisation du contexte du thème pour détecter le mode

  return (
    <div className={`h-screen ${isDarkMode ? 'bg-gradient-to-b from-[#1a202c] via-[#2d3748] to-[#1a202c]' : 'bg-[#ffffff]'} flex flex-col lg:flex-row mt-0`}>
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center px-6 lg:px-[170px] leading-tight">
        
        {/* Heading and Icon */}
        <div>
          <div className="flex items-center gap-2 lg:gap-5 justify-center">
            <p className={`text-6xl lg:text-[75px] font-bold font-script  ${isDarkMode ? 'text-gray-200' : 'text-[#ae6a7d]'}`}>
              The ideal prepared 
            </p>
            <img src={cupcake_icon} alt="" className="w-[40px] lg:w-[50px]" />
          </div>

          {/* Text */}
          <p className={`text-6xl lg:text-[75px] font-black font-script flex justify-center ${isDarkMode ? 'text-gray-200' : 'text-[#ae6a7d]'}`}>
              cake regular!
          </p>
          <h2 className={`text-xl  font-bold mt-7  font-script flex justify-center ${isDarkMode ? 'text-gray-400' : 'text-pink-950'}`}>
          These cakes are made with butter or another fat, like vegetable shortening. The common way is to mix the fat and sugar, then add eggs, and then add flour. 
          </h2>
        </div>

        {/* Button */}
        <div className="flex space-x-1 ml-32">
          <div className="flex items-center space-x-1">
            {/* Button */}
            <button type="button" className="text-white  w-[150px] h-[50px] bg-gradient-to-r from-pink-800 to-gray-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#542f22] shadow-xl  justify-center shadow-orange-900/50 font-medium rounded-lg p-5 text-sm px-5 py-2.5 mt-12 ml-4 text-center inline-flex items-center ">
              Order Now
            </button>
          </div>
          <div className="flex items-center space-x-1">
              {/* Button */}
              <button type="button" className="text-pink-900 w-[150px] h-[50px] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-950 shadow-xl shadow-orange-900/50 font-medium rounded-lg p-5 overflow-hidden justify-center text-sm px-5 py-2.5 mt-12 ml-4 text-center inline-flex items-center border border-orange-950 hover:text-pink-950 transition-all duration-300 ease-in-out">
                See All Menus
              </button>
          </div>
        </div>
        </div>

      {/* Right Section (Image) */}
      <div className="flex-1 flex items-center justify-center mt-8 lg:mt-0">
        <img src={cake} className='max-w-[100%] md:max-w-[100%] lg:max-w-full h-auto object-contain m-[100px]' alt="Cake" />
      </div>
    </div>
  );
}

export default Hero;
