import React from 'react'
import chefKitchen from '../Assets/chef4.png'
import avatar from '../Assets/Ellipse 8.png'

const Chef = () => {
  return (
    <div className={`h-2/3 rounded-3xl  flex flex-col lg:flex-row mt-0` }>
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center px-6 lg:px-[170px] leading-tight">
        
        {/* Heading and Icon */}
        
        <p className="text-[#F54748] font-bold font-lobster items-center  text-center mb-6">Customer Testimonials</p>
          {/* Text */}
          <h1 className={`text-5xl font-black pl-14 justify-center text-center text-black font-lobster`}>
            What Customers Have 
          </h1>
          <p className={`text-5xl font-black  pl-14 text-center text-black pt-3 font-lobster`}>
            to Say About Us
          </p>
          <h2 className={`text-sm font-bold  mt-2 pl-14 text-gray-600 pt-5 leading-10 `}>
          "Pizzateria is exceptional. With a wide array of delicious meals and excellent service, including remarkably fast delivery, I wholeheartedly recommend Pizzateria to you."
          </h2>
        

        {/* Button */}
        <div className="flex items-center space-x-4 mt-12 pl-14">
          <img src={avatar} alt="Author" className=" w-10 h-10 rounded-full" />
          <div>
            <p className="text-gray-800 font-semibold">Aracelly Xaviera</p>
            <p className="text-gray-400 text-sm">Culinary Enthusiast</p>
          </div>
          <div class="flex items-center">
            <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
        </div>
        <p className='font-bold text-sm'>4,8</p>
        </div>
      
        </div>

      {/* Right Section (Image) */}
      <div className="flex-1 flex items-center justify-center mt-8 lg:mt-0">
        <img src={chefKitchen} className='max-w-[60%] md:max-w-[40%] lg:max-w-[65%] h-auto object-contain m-[100px]' alt="Cake" />
      </div>
    </div>
  )
}

export default Chef
