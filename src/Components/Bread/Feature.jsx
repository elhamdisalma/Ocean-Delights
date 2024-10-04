import React from 'react';
import { FaDollarSign } from 'react-icons/fa'; 
import F1 from '../Assets/Feature1.png';
import F2 from '../Assets/Feature2.png';
import F3 from '../Assets/Feature3.png';

const Feature = ({ image, title, price }) => (
  <div className="relative bg-[#fff] shadow-lg overflow-hidden transform hover:scale-110 transition duration-300 ease-in-out">
    <img src={image} alt={title} className="w-full h-50 object-cover" />
    <div className="p-4">
      <h3 className="text-2xl font-extrabold text-gray-800">{title}</h3>
      <div className="flex items-center mt-2 text-xl text-black">
        <FaDollarSign className="mr-1 text-md" /> {price}
      </div>
    </div>
  </div>
);

const CardsGrid = () => {
  const cardsData = [
    { id: 1, image: F3, title: 'Puff Pastry', price: '12' },
    { id: 2, image: F2, title: 'Doughnuts', price: '8' },
    { id: 3, image: F1, title: 'Brownies', price: '5' },
  ];

  return (
    <div className=" justify-center items-center h-screen px-24">
       <h1 className="text-5xl font-black text-black font-sansita text-center pb-20">
        Featured Treats
    </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12">
        {cardsData.map((card) => (
          <Feature key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardsGrid;
