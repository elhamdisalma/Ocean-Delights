import React from 'react'
import discount from '../Assets/discount.png'

const Discount = () => {
  return (
    <div
      className={`relative m-20 rounded-3xl bg-no-repeat bg-cover `}
      style={{ backgroundImage: `url(${discount})` }}
    >
      <div className="flex flex-col-2 gap-10 p-10">
        <div className="ml-60">
          <div className="text-center p-[10px]">
            <h1 className={`text-3xl font-semibold text-[#933C24] my-6 font-sansita`}>
                20% Off  Your First Order
            </h1>
            <p className={`text-xs mt-2 pl-[10px] text-[#5D5D5D]`}>
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibenjgg.
            </p>
            <p className={`text-sm mt-2 pl-[10px] text-[#5D5D5D] mb-3`}>
              incididunt ut labore et dolore magna aliqut enim ad minim
            </p>
          </div>

          <button type="button" className="text-white self-centercenter w-[120px] h-[50px] bg-gradient-to-r from-[#933C24] to-[#933C24] hover:bg-gradient-to-br shadow-xl shadow-orange-900/50 font-medium rounded-xl p-5 text-sm px-5 py-2.5 mt-12 ml-40 text-center inline-flex items-center ">
          Learn More
        </button>
        </div>
      </div>
    </div>
  );
};

export default Discount;
