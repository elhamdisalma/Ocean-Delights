import React from 'react'
import chefKitchen from '../Assets/Group 880.png'
import arrow_icon from '../Assets/arrow.png'

const Kitchen = () => {
  return (
    <div className={`h-2/3 rounded-3xl bg-gradient-to-b from-[#ffffff] to-[#E7FAFE] flex flex-col lg:flex-row mt-0` }>
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center px-6 lg:px-[170px] leading-tight">
        
        {/* Heading and Icon */}
        

          {/* Text */}
          <h1 className={`text-5xl font-black pl-[10px] text-black`}>
            Everyone can be a 
          </h1>
          <p className={`text-5xl font-black  pl-[10px] text-black pt-3`}>
            chef in thier own kitchen
          </p>
          <h2 className={`text-sm  mt-2 pl-[10px] text-gray-600 pt-5 leading-10 `}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis adipisci quasi incidunt qui sint, sit tempora sequi ipsa velit.
          </h2>
        

        {/* Button */}
        <button type="button" class="text-white w-[150px] h-[50px] bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-400 font-medium rounded-xl p-5 text-sm px-5 py-2.5 mt-12 ml-4 text-center inline-flex items-center dark:bg-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-900">
                Learn More
            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </button>
        </div>

      {/* Right Section (Image) */}
      <div className="flex-1 flex items-center justify-center mt-8 lg:mt-0">
        <img src={chefKitchen} className='max-w-[90%] md:max-w-[60%] lg:max-w-[95%] h-auto object-contain m-[100px]' alt="Cake" />
      </div>
    </div>
  )
}

export default Kitchen
