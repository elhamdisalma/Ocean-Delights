import React from 'react';
import { FaDollarSign, FaInfoCircle } from 'react-icons/fa'; 
import F1 from '../Assets/product1.png';
import F2 from '../Assets/product2.png';
import F3 from '../Assets/product3.png';
import F4 from '../Assets/product4.png';
import F5 from '../Assets/product5.png';
import F6 from '../Assets/product6.png';
import bg from '../Assets/bg_product.png';

const Products = ({ image, title, price }) => (
  <div className="relative shadow-lg bg-no-repeat bg-cover overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out rounded-lg"
    style={{ backgroundImage: `url(${bg})` }}
  >
    {/* Image du produit (affichage complet) */}
    <img src={image} alt={title} className="w-full h-[200px] object-contain" />
    
    {/* Contenu en bas de l'image */}
    <div className="p-4 text-center">


      
      {/* Prix avec icône dollar */}
      <div className="flex justify-between items-center mt-2 text-white">
        <div className="flex items-center text-2xl">
          <FaDollarSign className="mr-1" /> 
          {price}
        </div>

        {/* Icône info */}
        <FaInfoCircle className="text-white cursor-pointer text-3xl" />
      </div>


      <div className="flex justify-between items-center mt-2 text-white">
        <div className="flex items-center text-lg">
            <h3 className="text-2xl text-left font-medium text-white">{title}</h3>
        </div>

        {/* Bouton "Add" */}
        <button className="mt-2 w-20 text-lg  bg-[#933C24] hover:bg-[#B45309] text-white py-1 px-4 rounded">
            Add
        </button>
      </div>
      

    </div>
  </div>
);

const CardsGrid = () => {
  const cardsData = [
    { id: 1, image: F1, title: 'Whole Grain Bread', price: '40' },
    { id: 2, image: F2, title: 'Whole Grain Bread', price: '36' },
    { id: 3, image: F3, title: 'Whole Grain Bread', price: '20' },
    { id: 4, image: F4, title: 'Whole Grain Bread', price: '28' },
    { id: 5, image: F5, title: 'Whole Grain Bread', price: '45' },
    { id: 6, image: F6, title: 'Whole Grain Bread', price: '22' },
  ];

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-5xl font-black text-black font-sansita text-center pb-24">
        Top Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-24">
        {cardsData.map((card) => (
          <Products key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardsGrid;
