import React from 'react';
import { FaHeart, FaClock, FaUtensils } from 'react-icons/fa'; 
import recipe1 from '../Assets/recipe1.png'
import recipe2 from '../Assets/recipe2.png'
import recipe3 from '../Assets/recipe3.png'
import recipe4 from '../Assets/recipe4.png'
import recipe5 from '../Assets/recipe5.png'
import recipe6 from '../Assets/recipe6.png'
import recipe7 from '../Assets/recipe7.png'
import recipe8 from '../Assets/recipe8.png'
import ads from '../Assets/Ads.png'

const Card = ({ image, title, time, category }) => (
  <div className="relative bg-gradient-to-b from-[#ffffff] to-[#E7FAFE] rounded-3xl shadow-lg overflow-hidden transform hover:scale-110 transition duration-300 ease-in-out">
    <img src={image} alt={title} className="w-full h-50 object-cover" />
    <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md cursor-pointer">
      <FaHeart className="text-red-800" />
    </div>
    <div className="p-4">
      <h3 className="text-md font-semibold text-gray-800">{title}</h3>
      <div className="flex items-center mt-2 text-sm text-black">
        <FaClock className="mr-1" /> {time} &nbsp;&nbsp; 
        <FaUtensils className="mr-1" /> {category}
      </div>
    </div>
  </div>
);

const CardsGrid = () => {
  const cardsData = [
    { id: 1, image: recipe1, title: 'Big and Juicy Wagyu Beef Cheeseburger', time: '30 Minutes', category: 'Snack' },
    { id: 2, image: recipe2, title: 'Fresh Lime Roasted Salmon with Ginger Sauce', time: '30 Minutes', category: 'Fish' },
    { id: 3, image: recipe3, title: 'Strawberry Oatmeal Pancake with Honey Syrup', time: '30 Minutes', category: 'Breakfast' },
    { id: 4, image: recipe4, title: 'Fresh and Healthy Mixed Mayonnaise Salad', time: '30 Minutes', category: 'Healthy' },
    { id: 5, image: recipe5, title: 'Chicken Meatballs with Cream Cheese', time: '30 Minutes', category: 'Meat' },
    { id: 6, image: recipe6, title: 'Fruity Pancake with Orange & Blueberry', time: '30 Minutes', category: 'Sweet' },
    { id: 7, image: recipe7, title: 'The Best Easy One Pot Chicken and Rice', time: '30 Minutes', category: 'Snack' },
    { id: 8, image: recipe8, title: 'The Creamiest Creamy Chicken and Bacon Pasta', time: '30 Minutes', category: 'Noodles' },
    { id: 9, image: ads, title: 'The Creamiest Creamy Chicken and Bacon Pasta', time: '30 Minutes', category: 'Healthy' },
  ];

  return (
    <div className="container mx-auto pb-10 px-24 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12">
        {cardsData.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardsGrid;
