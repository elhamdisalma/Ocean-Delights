import React from 'react';
import { useTheme } from '../../ThemeContext'; 
import image1 from '../Assets/caroussel_cake1.jpg'; 
import cake1 from '../Assets/bar1.jpg';
import cake2 from '../Assets/bar2.jpg';
import cake3 from '../Assets/bar3.jpg';
import cake4 from '../Assets/bar4.jpg';
import cake5 from '../Assets/caroussel_cake5.jpg';
import piece3 from '../Assets/piece3.png'
import piece4 from '../Assets/piece4.png'
import piece5 from '../Assets/piece5.png'

const Popular = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`relative  ${isDarkMode ? 'bg-gradient-to-b from-[#1a202c] to-[#2d3748] ' : 'bg-gradient-to-b from-[#ffffff] via-[#ffe1ea] to-[#ffffff] '}`}>
      <div>
        <p className={` mt-14 font-script text-4xl center font-extrabold  dark:text-white pl-[370px] italic ${isDarkMode ? 'text-gray-200' : 'text-[#56474b]'} pl-[450px]    pb-[40px] pt-[30px] shadow-gray-950`}>Delicious Organic Recipes!</p>
      </div>
    <div className={`grid grid-cols-2 gap-8  h-[80vh] mx-32  `}>
      {/* Section de gauche : Grande image et texte */}
      
      <div className={`flex flex-col items-center p-4 ${isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-white text-gray-800'} shadow-lg rounded-lg h-[70vh]`}>
        <img className="h-[60%] w-auto max-w-full rounded-lg mb-4" src={cake5} alt="Cake" />
        <div className="text-center h-[20%]">
          <h2 className="text-xl font-semibold mb-2">Welcome to Ocean Delights!</h2>
          <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
          Discover our sweet creations, from artisanal cakes to refined pastries.</p>
        </div>

        <div className="flex items-center mt-4 space-x-4 h-[10%]">
          <img className="rounded-full w-16 h-16" src={image1} alt="Image description" />
          <p className={`font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>Chef Salma El Hamdi</p>
        </div>
      </div>

      {/* Section de droite : Plusieurs images en grille */}
      <div className={`grid grid-cols-2 gap-4 p-4 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg rounded-lg h-[70vh]`}>
        <div>
          <img className="h-[100%] w-auto max-w-full rounded-lg" src={cake1} alt="Cake 1" />
        </div>
        <div>
          <img className="h-[100%] w-auto max-w-full rounded-lg" src={cake3} alt="Cake 3" />
        </div>
        <div>
          <img className="h-[100%] w-auto max-w-full rounded-lg" src={cake2} alt="Cake 2" />
        </div>
        <div>
          <img className="h-[100%] w-auto max-w-full rounded-lg" src={cake4} alt="Cake 4" />
        </div>
      </div>
    </div>

      <img src={piece3} alt="" className="absolute top-20 left-7 w-[100px] opacity-40" />
      <img src={piece5} alt="" className="absolute top-80 right-0 w-[120px] opacity-60" />
      <img src={piece4} alt="" className="absolute top-90 right-30 w-[120px] opacity-60" />
    </div>
  );
};

export default Popular;
