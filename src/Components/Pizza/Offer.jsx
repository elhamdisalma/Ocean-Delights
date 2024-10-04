import React from 'react';
import dishImage from '../Assets/vippng 1.png'; 

const ChikenWings = () => {
  return (
    <div className="bg-[#FDECEC] rounded-3xl m-32 shadow-lg flex flex-col-2 justify-between items-center max-w-6xl ">
      {/* Left side with text */}
      <div className="w-full lg:w-1/2 space-y-4 p-10">

        {/* Title */}
        <h1 className="text-5xl font-bold text-black font-lobster">Make Your First Order </h1>
        <h1 className="text-5xl font-bold text-black font-lobster">
        and Get <span className="text-[#F54748]">50% Off</span>
        </h1>

        {/* Description */}
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        
        <div className="flex space-x-4">
            <div className="flex items-center mt-10 justify-center">
            <span className="text-[#F54748] underline cursor-pointer mr-5">Customize order</span>
            <button className="bg-[#F54748] text-white px-6 py-3 rounded-lg shadow-lg">
                Order Now
            </button>
            </div>
        </div>

        
        
        
      </div>

      {/* Right side with image */}
      <div className="w-full lg:w-1/2 mt-16 lg:mt-0">
        <div className="relative">
          <img src={dishImage} alt="Chicken Wings" className="w-[100%] rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default ChikenWings;
