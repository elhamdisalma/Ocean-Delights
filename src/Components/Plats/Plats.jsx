import React from 'react'
import plat from '../Assets/plat de salade.png'
import pomme_icon from '../Assets/pomme-verte.png'
import arrow_icon from '../Assets/arrow.png'
import { useTheme } from '../../ThemeContext'; 

const Plats = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    
    
      <div className='h-screen bg-gradient-to-b from-[#ffffff] via-[#ced8b5] to-[#e1ffea22] flex flex-col lg:flex-row  mt-0'>
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center  px-6 lg:px-[170px] leading-tight">
        
        {/* Heading and Icon */}
        <div>
          <div className="flex items-center gap-2 lg:gap-5">
            <p className='text-[#FB0108] text-[50px] lg:text-[65px] font-bold font-script pl-[90px]'>Your Food is</p>
            <img src={pomme_icon} alt="" className="w-[40px] lg:w-[50px]" />
          </div>

          {/* Text */}
          <p className='text-[#FB0108] text-[50px] lg:text-[65px] font-bold font-script pl-[90px]'>waiting for you</p>
          <h2 className='text-[#444939] text-[13px] lg:text-[25px] font-semibold mt-2 font-script pl-[70px] '>
          We are hiring professional chefs to come to your home and prepare delicious customized meals for a fraction of the cost. Get your food easily and don't worry about the time.
          </h2>
        </div>

        {/* Button */}
        <div className="flex justify-center lg:justify-start items-center gap-4 w-full lg:w-[310px] h-[60px] lg:h-[70px] rounded-full mt-[30px] bg-[#FB0108] text-white text-[18px] lg:text-[22px] font-medium">
          <div className='pl-[50px] font-script '>Food Menu</div>
          <img src={arrow_icon} alt="" className="w-[20px] lg:w-[24px]" />
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="flex-1 flex items-center justify-center mt-8 lg:mt-0">
        <img src={plat} className='max-w-[100%] md:max-w-[70%] lg:max-w-full h-auto object-contain m-[100px] ' alt="Cake" />
      </div>
    </div>
  )
}

export default Plats
