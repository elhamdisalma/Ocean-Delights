"use client";

import { useState } from "react";
import { Card } from "flowbite-react";

// Images for different sets
import plat1 from "../Assets/food_24.png";
import plat2 from "../Assets/food_25.png";
import plat3 from "../Assets/food_28.png";

// Example of another set of dishes (you can replace with real data)
import plat4 from "../Assets/food_29.png";
import plat5 from "../Assets/food_30.png";
import plat6 from "../Assets/food_31.png";

export function Cards() {
  // State to hold the current set of cards (set 1 as default)
  const [currentSet, setCurrentSet] = useState(1);

  // Dishes content for each set
  const sets = [
    [
      { img: plat1, title: "Soupe épicée aux légumes", price: "10€", rating: 4.5 },
      { img: plat2, title: "Soupe crémeuse de champignons", price: "12€", rating: 5.0 },
      { img: plat3, title: "Soupe tomate et basilic", price: "9€", rating: 4.8 },
    ],
    [
      { img: plat4, title: "Garden Salad", price: "10$", rating: 4.5 },
      { img: plat5, title: "Pina Colada Chicken", price: "18$", rating: 9.2 },
      { img: plat6, title: "Maple Glazed Salmon", price: "14$", rating: 7.3 },
    ],
  ];

  // Handler to switch between sets
  const switchToSet = (setNumber) => {
    setCurrentSet(setNumber);
  };

  return (
    
    <div className="flex justify-center items-center p-[50px] h-screen bg-gradient-to-b from-[#e1ffea22] via-[#ced8b5] to-[#ffffff]  lg:flex-row  mt-0">
      
      {/* Button to switch to Set 2 - positioned to the left with "<" */}
      <button
        className="mx-2 px-4 py-2 bg-[#363f0d] text-white text-2xl rounded-lg hover:bg-[#676f3a]"
        onClick={() => switchToSet(2)}
      >
        {"<"}
      </button>

      {/* Cards Grid */}
      <div className="grid grid-cols-3 gap-4">
        {sets[currentSet - 1].map((dish, index) => (
          <div key={index} className="pr-[50px]">
            <Card className="w-[220px] h-[350px]" imgAlt={dish.title} imgSrc={dish.img}>
              <a href="#">
                <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                  {dish.title}
                </h5>
              </a>
              <div className="mb-5 mt-2.5 flex items-center">
                <span className="ml-3 mr-6 rounded bg-green-100 px-2.5 py-0 text-xs font-semibold text-green-800 dark:bg-green-200 dark:text-green-800">
                  {dish.rating}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white py-0">
                  {dish.price}
                </span>
                <a
                  href="#"
                  className="rounded-xl bg-[#363f0d] px-5 py-1 text-center text-sm font-medium text-white hover:bg-[#676f3a] focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Ajouter au panier
                </a>
              </div>
            </Card>
          </div>
        ))}
      </div>

      {/* Button to switch to Set 1 - positioned to the right with ">" */}
      <button
        className="mx-2 px-4 py-2 bg-[#363f0d] text-white text-2xl rounded-lg hover:bg-[#676f3a]"
        onClick={() => switchToSet(1)}
      >
        {">"}
      </button>
    </div>
  );
}
