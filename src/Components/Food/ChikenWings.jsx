import React from 'react';
import dishImage from '../Assets/wings.png'; 
import authorImage from '../Assets/chef.jpg'; 

const ChikenWings = () => {
  return (
    <div className="bg-[#E7FAFE] rounded-3xl shadow-lg p-8 flex flex-col-2 justify-between items-center max-w-6xl mx-auto">
      {/* Left side with text */}
      <div className="w-full lg:w-1/2 space-y-4">
        {/* Hot Recipes Badge */}
        <div className="flex items-center space-x-2">
          <span className="bg-gray-100 flex font-bold text-gray-900 px-3 py-1 rounded-full text-sm ">
          <svg class="w-[23px] h-[23px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-3 5h3m-6 0h.01M12 16h3m-6 0h.01M10 3v4h4V3h-4Z"/>
        </svg>
        Hot Recipes</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold text-gray-900">Spicy delicious</h1>
        <h1 className="text-5xl font-bold text-gray-900">chicken wings</h1>

        {/* Description */}
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Info (Time & Category) */}
        <div className="flex space-x-4">
          <div className="flex items-center space-x-1">
             <button type="button" class="text-black bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-400 font-medium rounded-3xl text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-gray-300 dark:hover:bg-gray-300 dark:focus:ring-gray-400">
             <svg xmlns="http://www.w3.org/2000/svg"   fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 me-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6 3H6a9 9 0 1116 0z" />
            </svg>
               30 Minutes
            </button>
          </div>
          <div className="flex items-center space-x-1">
            <button type="button" class="text-black bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-400 font-medium rounded-3xl text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-gray-300 dark:hover:bg-gray-300 dark:focus:ring-gray-400">
            <svg class="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
            <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
            </svg>
            Chicken
            </button>
          </div>
        </div>

        

        {/* View Recipes Button */}
        
        <div className='flex flex-col-2 gap-40 '>
            {/* Author Info */}
        <div className="flex items-center space-x-4 ">
          <img src={authorImage} alt="Author" className=" w-10 h-10 rounded-full" />
          <div>
            <p className="text-gray-800 font-semibold">John Smith</p>
            <p className="text-gray-400 text-sm">15 March 2022</p>
          </div>
        </div>
          <button className="bg-black text-white px-6 py-2 rounded-full mt-4 hover:bg-gray-800">
            View Recipes
          </button>
        </div>
      </div>

      {/* Right side with image */}
      <div className="w-full lg:w-1/2 mt-16 lg:mt-0">
        <div className="relative">
          {/* Hand-picked badge */}
          <div className="absolute -top-8 -right-8 bg-black text-white p-2 rounded-full text-center">
            <span className="text-sm">HAND-PICKED RECIPES</span>
          </div>
          {/* Dish Image */}
          <img src={dishImage} alt="Chicken Wings" className="w-[90%] rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default ChikenWings;
