import React, { useState } from 'react';

// Images des pizzas (tu dois remplacer ces chemins par les vrais chemins des images)
import pizza1 from '../Assets/pizza1.png';
import pizza2 from '../Assets/pizza2.png';
import pizza3 from '../Assets/pizza3.png';
import pizza4 from '../Assets/pizza4.png';

const Header = () => {
  // Tableau contenant les pizzas et leurs titres
  const pizzas = [
    { image: pizza1, title: 'Meat Lovers - Chicken' },
    { image: pizza2, title: 'Hot Garlic Prawns' },
    { image: pizza3, title: 'Veggie Supreme' },
    { image: pizza4, title: 'Super Supreme' },
  ];

  // État pour la pizza et le titre sélectionnés
  const [selectedPizza, setSelectedPizza] = useState(pizzas[0]);

  return (
    <div className=" bg-gradient-to-r  from-[#fedddd] to-[#fff] p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between">
      {/* Section Texte */}
      <div className="md:w-1/2">
        <p className="text-red-800 font-bold font-lobster items-center text-center">Today's Special Pizza</p>
        <h1 className="text-6xl font-extrabold mt-2 font-lobster items-center text-center">{selectedPizza.title}</h1>
        <p className="text-gray-700 mt-2 items-center text-center">
          Rich tomato sauce base topped with cream cheese, onions, green chili...
        </p>

        {/* Petites pizzas cliquables */}
        <div className="flex mt-4 space-x-3 items-center justify-center">
          {pizzas.map((pizza, index) => (
            <img
              key={index}
              src={pizza.image}
              alt={`Pizza ${index + 1}`}
              className={`w-20 h-20 rounded-full cursor-pointer border-2 ${
                selectedPizza.image === pizza.image ? 'border-black' : 'border-transparent'
              }`}
              onClick={() => setSelectedPizza(pizza)}
            />
          ))}
        </div>

        {/* Customisation */}
        <div className="flex items-center mt-10 justify-center">
          <span className="text-red-800 underline cursor-pointer mr-5">Customize order</span>
          <button className="bg-red-800 text-white px-6 py-3 rounded-lg shadow-lg">
            Try Now
          </button>
        </div>
      </div>

      {/* Grande pizza */}
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center items-center ">
        
          <img
            src={selectedPizza.image}
            alt="Selected Pizza"
            className="w-[80%] h-[80%] object-contain shadow-lg"
          />
        
      </div>
    </div>
  );
};

export default Header;
