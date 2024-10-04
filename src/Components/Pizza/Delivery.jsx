import React from 'react';
import { FaDollarSign } from 'react-icons/fa'; 
import F1 from '../Assets/delivery1.png';
import F2 from '../Assets/delivery2.png';
import F3 from '../Assets/delivery3.png';

const Delivery = ({ image, title, description }) => (
  <div className="relative bg-[#fff] shadow-lg overflow-hidden border-2 border-transparent hover:border-[#F54748] rounded-3xl transition duration-300 ease-in-out flex flex-col justify-center items-center ">
    <img src={image} alt={title} className="w-[60%] h-[70%] object-contain" />
    <div className="p-4">
      <h3 className="text-xl font-extrabold text-center text-black">{title}</h3>
      <div className="flex items-center justify-center mt-2 text-md text-gray-600 text-center">
         {description}
      </div>
    </div>
  </div>
);

const CardsGrid = () => {
  const cardsData = [
    { id: 1, image: F1, title: 'Convenient Ordering', description: 'Ordering food requires just a few simple steps' },
    { id: 2, image: F2, title: 'Quickest Delivery', description: 'Consistently Timely Delivery, Even Faster' },
    { id: 3, image: F3, title: 'Superior Quality', description: 'For us, quality is paramount, not just speed' },
  ];

  return (
    <div className="flex flex-col justify-center items-center h-screen px-24">
      <p className="text-[#F54748] font-medium font-lobster text-center text-xl pb-1">Our Offerings</p>
      <h1 className="text-4xl font-black text-black text-center pb-2">
        Your Preferred Food
      </h1>
      <h1 className="text-3xl font-black text-black text-center pb-14">
        Delivery Companion
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 justify-center items-center">
        {cardsData.map((card) => (
          <Delivery key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardsGrid;
