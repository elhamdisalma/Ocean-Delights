import React from 'react'
import post from '../Assets/Post.png'
import Post1 from '../Assets/Post1.png'
import Post2 from '../Assets/Post2.png'
import Post3 from '../Assets/Post3.png'


const Instagram = () => {
  return (
    <div className='relative mt-16 bg-gradient-to-b from-[#ffffff] to-[#E7FAFE]'>

        
                <div className='text-center  p-[10px]'>
                    <h1 className={`text-3xl font-black  text-black my-6`}>
                        Check out @Ocean_delights on Instagram
                    </h1>
                        
                    <p className={`text-xs  mt-2 pl-[10px] text-gray-600 `}>
                    Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                    </p>
                    <p className={`text-xs  mt-2 pl-[10px] text-gray-600 mb-3`}>
                    magna aliqut enim ad minim   
                    </p>
                </div>
            
            <div className={`flex flex-col-4 gap-6 mx-[50px] my-8 text-center text-sm relative  `}>
                
                <div className='transform hover:scale-110 transition duration-300 ease-in-out'>
                <img src={post} alt="" className="w-full h-full shadow-lg shadow-black mx-auto " />
                </div>

                <div className='transform hover:scale-110 transition duration-300 ease-in-out'>
                <img src={Post1} alt="" className="w-full h-[full shadow-lg shadow-black mx-auto " />
                </div>

                <div className='transform hover:scale-110 transition duration-300 ease-in-out'>
                <img src={Post2} alt="" className="w-full h-full shadow-lg shadow-black mx-auto " />
                </div>

                <div className='transform hover:scale-110 transition duration-300 ease-in-out'>
                <img src={Post3} alt="" className="w-full h-full shadow-lg shadow-black mx-auto " />
                </div>

            </div>
        
            <div className=''>
 
            <button type="button" class="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mx-[525px] my-16">   
                Visit Our Instagram
                <svg class="w-6 h-6 ml-2 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
                </svg>
            </button> 
        </div> 

    </div>

        


        
  )
}

export default Instagram
