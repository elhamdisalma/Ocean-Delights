import React from 'react';
import pizza from '../Assets/header_pizza.png'

const SpeedyDeliverySection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-b from-white to-[#FDECEC]px-8 py-12">
      {/* Texte de la section */}
      <div className="md:w-1/2 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start mb-4">
          <span className="bg-red-200 text-red-600 px-4 py-1 rounded-full font-semibold flex items-center">
            Beyond Speedy 
            <span className="ml-2">🍕</span>
          </span>
        </div>
        <h1 className="text-5xl font-extrabold text-black mb-4 font-lobster">
          Ensure Your <span className="text-[#F54748] font-lobster">Food</span> is Delivered with Speed
        </h1>
        <p className="text-gray-700 mb-8 font-medium">
          Our mission is to satisfy your appetite with delectable dishes, delivered swiftly and at no extra cost.
        </p>
        <button className="bg-[#F54748] text-white px-6 py-3  rounded-2xl font-semibold hover:bg-red-600">
          Get Started
        </button>
      </div>

      
        <img
          src={pizza}
          alt="Pizza"
          className="w-[50%]  md:w-1/2 mt-8 md:mt-0 flex justify-center"
        />
      
    </div>
  );
};

export default SpeedyDeliverySection;
