import React from 'react';
import image1 from '../Assets/chef_pizza1.png';
import image2 from '../Assets/chef_pizza2.png';
import image3 from '../Assets/chef_pizza3.png';




const ChefPizza = () => {
  
  return (
    <div className={`relative mt-16 bg-white`}> 
      {/* Section principale avec les chefs */}
      <p className="text-[#F54748] font-semibold  text-center text-sm pb-3">BEST CHEF</p>
        <h1 className="text-3xl font-black text-black text-center pb-20">
                The best chef at Pizzateria
        </h1>
      
      <div className={`flex flex-col-3 gap-24 items-center justify-center mb-8 text-center text-sm relative z-10 `}>
        
        <div className='text-center'>
          <img src={image1} alt="Chef 1" className="w-[200px] h-[200px] shadow-lg shadow-black mx-auto rounded-full" />
          <p className='font-bold text-xl py-3'>Diego Maldini</p>
          <h1 className='text-[#F54748] text-sm font-semibold'>Executive Chef</h1>
        </div>

        <div>
          <img src={image2} alt="Chef 2" className="w-[200px] h-[200px] shadow-lg shadow-black mx-auto rounded-full" />
          <p className='font-bold text-xl py-3'>Edward Garlen</p>
          <h1 className='text-[#F54748]  text-sm font-semibold'>Chef de Partie</h1>
        </div>

        <div>
          <img src={image3} alt="Chef 3" className="w-[200px] h-[200px] shadow-lg shadow-black mx-auto rounded-full" />
          <p className='font-bold text-xl py-3'>Yosephian</p>
          <h1 className='text-[#F54748] text-sm font-semibold'>Sous Chef</h1>
        </div>
      </div>

    </div>
  );
};

export default ChefPizza;
