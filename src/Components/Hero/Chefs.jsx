import React from 'react';
import image1 from '../Assets/chef1.jpg';
import image2 from '../Assets/chef2.jpg';
import image3 from '../Assets/chef3.jpg';
import cake1 from '../Assets/piece1.png';
import cake2 from '../Assets/piece2.png';

import { useTheme } from '../../ThemeContext'; // Importez le hook pour la gestion du dark mode

const Chefs = () => {
  const { isDarkMode } = useTheme(); // Récupérez l'état du mode sombre
  
  return (
    <div className={`relative mt-16 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}> {/* Changement de fond pour le mode sombre */}
      {/* Section principale avec les chefs */}
      <h3 className={`mt-8 mx-[200px] mb-8 text-lg font-bold shadow-sm ${isDarkMode ? 'text-gray-200 shadow-gray-700' : 'text-pink-700 shadow-pink-950'}`}>
        We employ the best of the best
      </h3>
      
      <div className={`flex flex-col-3 gap-24 mx-[250px] mb-8 text-center text-sm relative z-10 ${isDarkMode ? 'text-gray-300' : 'text-pink-500'}`}>
        
        <div>
          <img src={image1} alt="Chef 1" className="w-[150px] h-[150px] shadow-lg shadow-black mx-auto rounded-full" />
          <p>I will be glad to help in making a beautiful and delicious cake for your loved ones, relatives, acquaintances!</p>
        </div>

        <div>
          <img src={image2} alt="Chef 2" className="w-[150px] h-[150px] shadow-lg shadow-black mx-auto rounded-full" />
          <p>Hello! I am Sonya - a private pastry chef. I specialize not only in cakes, but also in cupcakes. I can make a cake from a photo.</p>
        </div>

        <div>
          <img src={image3} alt="Chef 3" className="w-[150px] h-[150px] shadow-lg shadow-black mx-auto rounded-full" />
          <p>I achieve the task you set in creating a dessert. I can make any desired design with beautiful decor! I will be glad to decorate your holiday!</p>
        </div>
      </div>

      {/* Images de cakes en background */}
      <img src={cake1} alt="Cake 1" className="absolute top-20 left-10 w-[100px] opacity-40" />
      <img src={cake2} alt="Cake 2" className="absolute top-40 right-10 w-[120px] opacity-90" />
    </div>
  );
};

export default Chefs;
