"use client";

import { Carousel } from "flowbite-react";
import { useTheme } from '../../ThemeContext'; // Importation du contexte de thème
import image1 from '../Assets/carou1.jpg';
import image2 from '../Assets/carou2.jpg';
import image3 from '../Assets/carou3.jpg';

import image4 from '../Assets/carou4.jpg';
import image5 from '../Assets/carou5.jpg';
import image6 from '../Assets/carou6.jpg';

import image7 from '../Assets/carou7.jpg';
import image8 from '../Assets/caroussel_cake1.jpg';
import image9 from '../Assets/caroussel_cake2.jpg';

import image10 from '../Assets/caroussel_cake3.jpg';
import image11 from '../Assets/caroussel_cake4.jpg';
import image12 from '../Assets/caroussel_cake5.jpg';

export default function Component() {
  const { isDarkMode } = useTheme(); // Utilisation du contexte du thème

  return (
    <div>
      <div>
        <p className={`font-script text-4xl center font-extrabold dark:text-white ${isDarkMode ? 'text-gray-200' : 'text-[#56474b]'} pl-[370px]  ${isDarkMode ? 'bg-gradient-to-b from-[#1a202c] to-[#2d3748] ' : 'bg-gradient-to-b from-[#ffffff] to-[#ffe1ea] '} italic  pb-[40px] `}>Our Finest Cakes & Cupcakes Await!</p>
      </div>
    <div className={`grid h-64 grid-cols-4 gap-6 sm:h-96 xl:h-80 2xl:h-104 pl-[50px] pr-[50px]  ${isDarkMode ? 'bg-gradient-to-b from-[#2d3748] to-[#1a202c] ' : 'bg-gradient-to-b from-[#ffe1ea] to-[#ffffff] '}`}>
      <Carousel> 
        <img src={image1} alt="Cake 1" className="object-cover" />
        <img src={image2} alt="Cake 2" className="object-cover" />
        <img src={image3} alt="Cake 3" className="object-cover" />
      </Carousel>
      <Carousel>
        <img src={image4} alt="Cake 1" className="object-cover" />
        <img src={image5} alt="Cake 2" className="object-cover" />
        <img src={image6} alt="Cake 3" className="object-cover" />
      </Carousel>
      <Carousel> 
        <img src={image7} alt="Cake 1" className="object-cover" />
        <img src={image8} alt="Cake 2" className="object-cover" />
        <img src={image9} alt="Cake 3" className="object-cover" />
      </Carousel>
      <Carousel> 
        <img src={image10} alt="Cake 1" className="object-cover" />
        <img src={image11} alt="Cake 2" className="object-cover" />
        <img src={image12} alt="Cake 3" className="object-cover" />
      </Carousel>
    </div>
    </div>
  );
}
