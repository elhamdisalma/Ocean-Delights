import React, { useState } from 'react';
import cake1 from '../Assets/tort_ 1.png';  
import cake2 from '../Assets/tort_2.png';  
import cake3 from '../Assets/Rectangle 23.png';  
import piece8 from '../Assets/piece8.png';
import piece6 from '../Assets/piece6.png';
import piece7 from '../Assets/piece2.png';
import { useTheme } from '../../ThemeContext';

const CakeSelector = () => {
  const { isDarkMode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('Girl');

  const cakes = [
    { id: 1, weight: '2kg', price: '3 780р', img: cake1 },  
    { id: 2, weight: '2kg', price: '3 124р', img: cake2 }, 
    { id: 3, weight: '2kg', price: '4 570р', img: cake3 },
  ];

  return (
    <div className={`p-10 border-2 relative font-script ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-[#f3f0f3] border-pink-200'}`}>
      
      <h1 className={`text-5xl font-bold mb-6 ${isDarkMode ? 'text-gray-200' : 'text-pink-700'}`}>
        Choose your most delicious cake
      </h1>

      <div className="flex space-x-4 mb-8 text-xl">
        {['To the girl', 'To the boy', 'To a woman', 'To a man', 'Wedding', 'Thematic'].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full ${selectedCategory === category ? 'bg-pink-700' : 'bg-pink-300'} ${isDarkMode ? 'text-gray-200' : 'text-white'}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-center">
        <button className={`${isDarkMode ? 'text-gray-200' : 'text-pink-700'} p-2`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <div className="flex space-x-6">
          {cakes.map((cake) => (
            <div
              key={cake.id}
              className={`p-4 w-56 text-center rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-white text-gray-800'}`}
            >
              <img src={cake.img} alt={`Cake ${cake.id}`} className="w-full object-cover mb-4 ml-5" style={{ width: '150px', height: '150px' }} />
              <p className="text-gray-500">От {cake.weight}</p>
              <p className={`text-lg font-bold ${isDarkMode ? 'text-pink-400' : 'text-pink-700'}`}>{cake.price}</p>
              <button className="text-white bg-gradient-to-r from-pink-300 via-pink-400 to-pink-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Order
              </button>
            </div>
          ))}
        </div>

        <button className={`${isDarkMode ? 'text-gray-200' : 'text-pink-700'} p-2`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      <div className="flex justify-center space-x-2 mt-4">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${i === 0 ? 'bg-pink-700' : 'bg-pink-300'} ${isDarkMode ? 'bg-gray-500' : ''}`}
          ></div>
        ))}
      </div>

      <img src={piece6} alt="Cake 1" className="absolute top-20 right-0 w-[130px] opacity-70" />
      <img src={piece8} alt="Cake 2" className="absolute top-96 right-24 w-[100px] opacity-60" />
      <img src={piece7} alt="Cake 3" className="absolute top-60 left-10 w-[120px] opacity-70" />
    </div>
  );
};

export default CakeSelector;
