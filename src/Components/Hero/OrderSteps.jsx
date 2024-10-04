import React from 'react';

import piece3 from '../Assets/piece8.png'
import piece4 from '../Assets/piece4.png'
import piece5 from '../Assets/piece5.png'

const OrderSteps = () => {
  const steps = [
    {
      id: 1,
      title: 'We confirm the order',
      description: 'We accept your order and confirm all the details to clarify the filling and design of the cake.',
      bgColor: 'bg-white ',
      textColor1: 'text-pink-700',
      textColor2: 'text-white',
      icon: '1',
      bgColorFull:'bg-pink-700 ' ,
    },
    {
      id: 2,
      title: 'Making a cake',
      description: 'We prepare the cake based on your preferences.',
      bgColor: 'bg-pink-700',
      textColor1: 'text-white',
      textColor2: 'text-pink-700',
      icon: '2',
      bgColorFull:'bg-white' ,
    },
    {
      id: 3,
      title: 'We are sending the order',
      description: 'We send the prepared product by courier or any other convenient method.',
      bgColor: 'bg-pink-700',
      textColor1: 'text-white',
      textColor2: 'text-pink-700',
      icon: '3',
      bgColorFull:'bg-white' ,
    },
    {
      id: 4,
      title: 'Receiving an order',
      description: 'You are informed that your order is ready to be picked up.',
      bgColor: 'bg-pink-700',
      textColor1: 'text-white',
      textColor2: 'text-pink-700',
      icon: '4',
      bgColorFull:'bg-white' ,
    },
  ];

  return (
    <div className="bg-white py-12 mx-32 relative">
      {/* Title */}
      <h2 className="text-pink-700 text-5xl font-bold text-center mb-4 font-script">Why you can rely on us</h2>
      <p className="text-gray-600 text-center mb-10 font-script text-xl ">How we accept your orders.</p>

      {/* Steps */}
      <div className="flex items-center justify-center space-x-6 font-script">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className={`flex flex-col items-center text-center space-y-4 ${step.bgColorFull} rounded-2xl p-4`}>
              {/* Circle Number */}
              <div className={`w-16 h-16 flex items-center justify-center rounded-full ${step.bgColor} ${step.textColor1}`}>
                <span className="text-2xl font-bold">{step.icon}</span>
              </div>

              {/* Step Title */}
              <h3 className={`text-2xl font-bold ${step.textColor2}`}>{step.title}</h3>

              {/* Step Description */}
              <p className="text-base text-gray-800 max-w-xs">{step.description}</p>
            </div>

            {/* Arrow between steps */}
            {index !== steps.length - 1 && (
              <div className="flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-8 h-8 text-pink-700"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>



      <img src={piece3} alt="" className="absolute top-20 left-7 w-[100px] opacity-40" />
      <img src={piece5} alt="" className="absolute top-96 right-0 w-[120px] opacity-60" />
      <img src={piece4} alt="" className="absolute top-90 right-30 w-[120px] opacity-60" />


    </div>
  );
};

export default OrderSteps;
