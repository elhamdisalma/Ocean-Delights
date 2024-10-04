import React from 'react'

import meat from '../Assets/meat.png'
import dessert from '../Assets/dessert.png'
import lunch from '../Assets/lunch.png'
import vegan from '../Assets/vegan.png'
import choco from '../Assets/chocolate.png'
import breakfast from '../Assets/breakfast.png'

const Categories = () => {
    const steps = [
        {
          title: 'Breakfast',
          img: breakfast,
          bgColor: 'bg-gradient-to-b from-[#ffffff] to-[#EAEBE7] ',
        },
        {
          title: 'Vegan',
          img: vegan,
          bgColor: 'bg-gradient-to-b from-[#ffffff] to-[#EFF8EA]',
        },
        {
          title: 'Meat',
          img: meat,
          bgColor: 'bg-gradient-to-b from-[#ffffff] to-[#FBE7E5]',
        },
        {
          title: 'Dessert',
          img: dessert,
          bgColor: 'bg-gradient-to-b from-[#ffffff] to-[#F8F0E2]',
        },
        {
            title: 'Lunch',
            img: lunch,
            bgColor: 'bg-gradient-to-b from-[#ffffff] to-[#EAE8E4]',
        },
        {
            title: 'Chocolate',
            img: choco,
            bgColor: 'bg-gradient-to-b from-[#ffffff] to-[#F4E5E0]',
        },
      ];
  return (
    <div className="bg-white py-12 mx-32 relative">
      {/* Title */}
      <div className="flex space-x-[625px]">
          <div className="flex items-center space-x-1">
              <h2 className="text-black text-4xl font-bold  mb-4">Categories</h2>
          </div>
          <div className="flex items-center space-x-1 " >
            <button type="button" class="text-black font-bold  bg-[#c7e6ec] hover:bg-[#c7e6ec] focus:ring-4 focus:outline-none focus:ring-[#c7e6ec]  rounded-2xl text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-[#c7e6ec] dark:hover:bg-[#c7e6ec] dark:focus:ring-[#c7e6ec]">
               View All Categories
            </button>
          </div>
        </div>
      

      {/* Steps */}
      <div className="flex items-center justify-center space-x-12 font-script ">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            
            <div className={`flex flex-col items-center text-center space-y-4 ${step.bgColor} rounded-2xl p-7 transform hover:scale-110 transition duration-300 ease-in-out`}>
              {/* Circle Number */}
              <div className={`w-16 h-16 flex items-center justify-center `}>
              <img src={step.img} alt="" className="w-[50px] lg:w-[60px]" />
              </div>

              {/* Step Title */}
              <h3 className={`text-2xl font-bold text-black`}>{step.title}</h3>
            </div>

          </React.Fragment>
        ))}
      </div>

    </div>
  )
}

export default Categories
