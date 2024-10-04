import React from 'react'
import plat1 from '../Assets/pasta.png'
import pomme_icon from '../Assets/pomme-verte.png'
import arrow_icon from '../Assets/arrow.png'

const NewDish = () => {
  return (
    <div className='h-screen bg-gradient-to-b from-[#e1ffea22] via-[#ced8b5] to-[#ffffff] flex flex-col lg:flex-row  mt-0'>
      

      {/* Left Section (Image) */}
      <div className="flex-1 flex items-center justify-center mt-8 lg:mt-0">
        <img src={plat1} className='max-w-[100%] md:max-w-[70%] lg:max-w-full h-auto object-contain m-[100px] ' alt="Cake" />
      </div>

      {/* Right Section */}
      <div className="flex-1 flex flex-col justify-center  px-6 lg:px-[170px] leading-tight">
        
        {/* Heading and Icon */}
        <div>

          {/* Text */}
          <p className='text-[#363f0d] text-[30px] lg:text-[45px] font-bold font-script pl-[200px] center'>New Our Dish</p>
          <h2 className='text-[#676f3a] text-[10px] lg:text-[20px] font-semibold mt-2 font-script pl-[70px] '>
          This spaghetti dish is everything we love – it’s as simple as pasta, a rich tomato sauce, and perfectly cooked noodles. A comforting meal that everyone will enjoy.
          </h2>
        </div>

        {/* Button */}
        <div className="flex justify-center lg:justify-start items-center gap-4 w-[500px] center pl-[500px] ">
        <button type="button" class="text-white bg-gradient-to-br from-[#676f3a] to-[#363f0d] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"> Check</button>
        <img src={arrow_icon} alt="" className="w-[20px] lg:w-[24px]" />
        </div>
      </div>
    </div>



  )
}

export default NewDish
