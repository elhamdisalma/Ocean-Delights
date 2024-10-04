import React from 'react'
import about from '../Assets/about.png'

const About = () => {
  return (
    <div
      className={`relative m-20 rounded-3xl bg-no-repeat bg-cover `}
      style={{ backgroundImage: `url(${about})` }}
    >
      <div className="flex flex-col-2 gap-10 p-10">
        <div className="ml-60">
          <div className="text-center p-[10px]">
            <h1 className={`text-3xl font-semibold text-white my-6 font-sansita`}>
                About Us
            </h1>
            <p className={`text-sm mt-2 pl-[10px] text-[#B9B9B9]`}>
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibenjgg.
            </p>
            <p className={`text-sm mt-2 pl-[10px] text-[#B9B9B9] mb-3`}>
              incididunt ut labore et dolore 
            </p>
          </div>

          <button type="button" className="text-white self-centercenter w-[120px] h-[50px] bg-gradient-to-r from-[#933C24] to-[#933C24] hover:bg-gradient-to-br shadow-xl shadow-orange-900/50 font-medium rounded-lg p-5 text-sm px-5 py-2 mt-12 ml-48 text-center inline-flex items-center ">
          Read More
        </button>
        </div>
      </div>
    </div>
  )
}

export default About
