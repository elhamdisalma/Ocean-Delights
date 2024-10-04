"use client";
import React from 'react'

import tart from '../Assets/tort_ 1.png'
import { useTheme } from '../../ThemeContext'; 
import mask1 from '../Assets/Mask group1.png'
import mask2 from '../Assets/Mask group2.png'
import mask3 from '../Assets/Mask group3.png'
import mask4 from '../Assets/Mask group4.png'
import mask5 from '../Assets/Mask group5.png'

const Order = () => {
    const { isDarkMode } = useTheme();
  return (
    <div className={`relative m-24 rounded-3xl  ${isDarkMode ? 'bg-gradient-to-b from-[#1a202c] to-[#2d3748] ' : 'bg-[#F5E4EC] '}`}>
      
      <div className='flex flex-col-2 gap-10 p-10'>
        <div >
        <img src={tart} alt="" className="w-[300px] h-[200px] mx-auto mt-8" />
        </div>
        

            <div>
                <h1 className='font-bold font-script ml-[220px] text-4xl text-pink-700'>Order a cake</h1>
                <p className='text-pink-500 font-script text-xl text-center my-3'>Fill out this form and we will contact you shortly and discuss your wishes and preferences for the order. We will also consult you if necessary.</p>
                
                <form class="max-w-sm mx-auto">
                <div class="relative m-2">
                        <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                            <svg class="w-4 h-4 text-pink-200 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM14 14s-1-4-6-4-6 4-6 4a6 6 0 1 1 12 0z"/>
                            </svg>
                        </div>
                        <input type="text" id="phone-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-200 focus:border-purple-300 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-300 dark:focus:border-purple-300" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Salma El Hamdi" required />
                        
                    </div>
                    <div class="relative m-2">
                        <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                            <svg class="w-4 h-4 text-pink-200 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                                <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"/>
                            </svg>
                        </div>
                        <input type="text" id="phone-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-300 focus:border-purple-300 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-300 dark:focus:border-purple-300" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="+212 (06) 567-432-65" required />
                        
                    </div>
                </form>
                <button type="button" class="text-white bg-gradient-to-r from-pink-700 to-pink-400 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2 ml-[180px]">Submit request</button>
            
            </div>

      <img src={mask1} alt="" className="absolute top-10 left-10 w-[50px] " />
      <img src={mask2} alt="" className="absolute top-40 right-0 w-[50px] opacity-100" />
      <img src={mask3} alt="" className="absolute top-40 left-60 w-[50px] opacity-100" />
      <img src={mask4} alt="" className="absolute top-40 right-72 w-[50px] opacity-100" />
      <img src={mask5} alt="" className="absolute top-80 left-2 w-[50px] opacity-100" />
            
      </div>

     


    </div>
  )
}

export default Order
