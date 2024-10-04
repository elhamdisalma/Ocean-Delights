import React from 'react';
import { useTheme } from '../../ThemeContext'; 

const Footer = ({ style, className }) => {
  const { isDarkMode } = useTheme();

  return (
    <footer
      style={style}
      className={`${isDarkMode ? 'bg-[#1a202c] text-gray-300' : 'bg-[#ffffff] text-[#333]'} py-6 ${className}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Section de gauche : Logo et description */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Ocean Delights & Bakery
            </h1>
            <p className="mt-2">Bringing you the finest cakes and treats, baked with love and passion.</p>
          </div>

          {/* Section du milieu : Liens de navigation */}
          <div className="flex flex-col md:flex-row mb-4 md:mb-0">
            <a href="#about" className="hover:text-gray-950 px-4">About Us</a>
            <a href="#menu" className="hover:text-gray-950 px-4">Menu</a>
            <a href="#contact" className="hover:text-gray-950 px-4">Contact</a>
          </div>

          {/* Section de droite : Réseaux sociaux */}
          <div className="flex justify-center md:justify-end">
            <a href="https://facebook.com" className="px-2">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" className="px-2">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" className="px-2">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            &copy; 2024 Ocean Delights & Bakery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
