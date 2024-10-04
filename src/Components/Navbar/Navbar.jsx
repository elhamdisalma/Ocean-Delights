import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../ThemeContext'; 
import logo from '../Assets/logo.png';

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme(); 

  return (
    <div className={`flex justify-around p-[22px] ${isDarkMode ? 'bg-[#1a202c]' : 'bg-[#ffffff]'} transition-colors`}>
      <div>
        <img src={logo} alt="Logo" className='w-full h-auto max-w-[100px] object-contain' />
      </div>

      <div className="mb-4">
        <ul className={` flex flex-wrap -mb-px text-sm font-medium text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} id="default-styled-tab" role="tablist">
          <li className="me-2" role="presentation">
            <button className={`uppercase mx-4 inline-block p-4 border-b-2 font-semibold rounded-t-lg hover:text-gray-800 hover:border-gray-500 ${isDarkMode ? 'dark:hover:text-gray-300' : ''}`} id="dashboard-styled-tab" data-tabs-target="#styled-dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">
              <Link to='/'>Food</Link>
            </button>
          </li>

          <li className="me-2">
            <button className={`uppercase mx-4 p-4 border-b-2 rounded-t-lg font-semibold hover:text-gray-800 hover:border-gray-500 ${isDarkMode ? 'dark:hover:text-gray-300' : ''}`} id="settings-styled-tab" data-tabs-target="#styled-settings" type="button" role="tab" aria-controls="settings" aria-selected="false">
              <Link to='/pizza'>Pizza</Link>
            </button>
          </li>

          <li className="me-2" role="presentation">
            <Link className={`mx-4 text-lg p-4 rounded-t-lg mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`} id="profile-styled-tab" data-tabs-target="#styled-profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
              <strong>Ocean Delights & Bakery </strong>
              <i className="fas fa-gem"></i>
            </Link>
          </li>

          <li className="me-2" role="presentation">
            <button className={`uppercase mx-4 p-4 border-b-2 rounded-t-lg font-semibold hover:text-gray-800 hover:border-gray-500 ${isDarkMode ? 'dark:hover:text-gray-300' : ''}`} id="settings-styled-tab" data-tabs-target="#styled-settings" type="button" role="tab" aria-controls="settings" aria-selected="false">
              <Link to='/cakes'>Cakes</Link>
            </button>
          </li>
          <li role="presentation">
            <button className={`uppercase mx-4 p-4 border-b-2 rounded-t-lg hover:text-gray-800 hover:border-gray-500 font-semibold ${isDarkMode ? 'dark:hover:text-gray-300' : ''}`} id="contacts-styled-tab" data-tabs-target="#styled-contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">
              <Link to='/bread'>Bread</Link>
            </button>
          </li>
        </ul>
      </div>

      <div>
        <Link to='/login'>
          <button className={` w-[100px] h-[35px] outline-none border border-[#7a7a7a] rounded-[75px] text-[#515151] text-sm font-light ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-white text-gray-700'} cursor-pointer active:bg-[#f3f3f3]`}>
            Login
          </button>
        </Link>
      </div>

      <button onClick={toggleDarkMode} className={`p-2 rounded ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors`}>
        {isDarkMode ? '🌙' : '🌞'}
      </button>
    </div>
  );
};

export default Navbar;
