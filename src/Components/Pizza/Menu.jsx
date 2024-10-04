import React, { useState } from 'react';
import menu1 from '../Assets/menu1.png';
import menu2 from '../Assets/menu2.png';
import menu3 from '../Assets/menu3.png';

const menuItems = {
  Pizza: [
    {
      id: 1,
      name: 'Sausage Pizza',
      price: '$7.49',
      image: menu2, 
      rating: 4,
    },
    {
      id: 2,
      name: 'Margherita Pizza',
      price: '$6.40',
      image: menu1,
      rating: 4,
    },
    {
      id: 3,
      name: 'Meatlovers Pizza',
      price: '$9.17',
      image: menu3, 
      rating: 4,
    },
  ],
  Burger: [],
  Cupcake: [],
  Ramen: [],
};

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('Pizza');

  return (
    <div className="px-32 py-12">
      {/* Menu title */}
      <p className="text-center text-red-500 font-bold mb-2">OUR SELECTION</p>
      <h2 className="text-center text-3xl font-extrabold mb-6">A Menu That Will Always Capture Your Heart</h2>

      {/* Categories */}
      <div className="flex justify-center space-x-4 mb-8">
        {Object.keys(menuItems).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category
                ? 'bg-red-500 text-white'
                : 'bg-white border border-gray-300 text-gray-800'
            } transition-all duration-200`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
        {menuItems[selectedCategory].length > 0 ? (
          menuItems[selectedCategory].map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden transition transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-5 w-5 text-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5.121 19.071a7.5 7.5 0 1110.607 0M12 12a3 3 0 100-6 3 3 0 000 6z"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-lg font-bold text-gray-700">{item.price}</p>
                <div className="mt-2 flex justify-center">
                  {[...Array(5)].map((star, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 ${
                        index < item.rating ? 'text-yellow-500' : 'text-gray-300'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 2l2.09 6.26h6.51l-5.27 3.83 1.9 6.23-5.29-3.86-5.28 3.85 1.9-6.22L3.4 8.26h6.5L12 2z"
                      />
                    </svg>
                  ))}
                </div>
                <button className="mt-4 bg-red-500 text-white px-6 py-2 rounded-full shadow-lg">
                  Read More
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500">
            No items available for {selectedCategory}.
          </p>
        )}
      </div>
    </div>
  );
};

export default Menu;
