import React from 'react';
import croissant from '../Assets/croissant.jpg';
import bread from '../Assets/bread.png';

const Header = () => {
  return (
    <div className={`h-1/3 bg-gradient-to-r  from-[#5b301f] to-[#fff] rounded-2xl relative flex flex-col lg:flex-row mt-0`}>
      {/* Left Section */}
      <div className="flex-1 flex items-end lg:items-center justify-start mt-8 lg:mt-0 mb-0 ml-0">
        
        <img src={bread} className='max-w-[80%] max-h-[80%] h-auto object-contain' alt="Bread" />
        
        <div className="relative">
          <img src={croissant} className="w-[150px] lg:w-[200px] h-[150px] lg:h-[200px] rounded-full  object-cover shadow-black shadow-xl" alt="Croissant" />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex flex-col justify-center px-6 lg:px-[170px] leading-tight">
        
        <h1 className={`text-5xl font-black pl-[10px] text-[#4A1D1F] text-center font-sansita`}>
            Bring you Happiness 
        </h1>
        <p className={`text-5xl font-black pl-[10px] text-[#4A1D1F] pt-3 text-center font-sansita`}>
            through a piece of cake
        </p>
        
        <h2 className={`text-sm mt-2 pl-[10px] text-[#29160f] pt-5 leading-10 text-center`}>
        Reach out to us to place an order or ask about our many menu options. We'd love to help you create a memorable dessert experience.
        </h2>



        <div className="flex space-x-1 ml-32">
          <div className="flex items-center space-x-1">
            {/* Button */}
            <button type="button" className="text-white  w-[150px] h-[50px] bg-gradient-to-r from-orange-950 to-gray-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#542f22] shadow-xl  justify-center shadow-orange-900/50 font-medium rounded-lg p-5 text-sm px-5 py-2.5 mt-12 ml-4 text-center inline-flex items-center ">
              Order Now
            </button>
          </div>
          <div className="flex items-center space-x-1">
              {/* Button */}
              <button type="button" className="text-orange-950 w-[150px] h-[50px] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#542f22] shadow-xl shadow-orange-900/50 font-medium rounded-lg p-5 overflow-hidden justify-center text-sm px-5 py-2.5 mt-12 ml-4 text-center inline-flex items-center border border-orange-950 hover:text-white transition-all duration-300 ease-in-out">
                See All Menus
              </button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Header;
