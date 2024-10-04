import React from 'react'
import salade from '../Assets/salade.png'
import plat from '../Assets/Photo-plate.png'

const Inbox = () => {
  return (
    <div className={`relative m-24 rounded-3xl  bg-[#E7FAFE]`}>
      
        <div>
        <img src={salade} alt="" className="w-[300px] h-[300px] mx-auto mt-8 absolute bottom-0 left-0 " />
        <img src={plat} alt="" className="w-[200px] h-[200px] mx-auto mt-8 absolute bottom-0 right-0 " />
        </div>

    <div className='flex flex-col-2 gap-10 p-10'>
      

          <div className='ml-60'>
            <div className='text-center  p-[10px]'>
                <h1 className={`text-3xl font-black  text-black my-6`}>
                    Deliciousness to your inbox
                </h1>
                
                <p className={`text-xs  mt-2 pl-[10px] text-gray-600 `}>
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor 
                </p>
                <p className={`text-xs  mt-2 pl-[10px] text-gray-600 mb-3`}>
                incididunt ut labore et dolore magna aliqut enim ad minim  
                </p>
            </div>
              
                <form class="max-w-md mx-auto ">   
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black" placeholder="Your email address..." required />
                        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30">Subscribe</button>
                    </div>
                </form>

          </div>

          
    </div>

   


  </div>
  )
}

export default Inbox
