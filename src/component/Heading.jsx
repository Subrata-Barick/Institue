import React from 'react';



const Heading = ({title,subtitle}) => {
  return (
    <div>
        <div className='w-full text-center md:mt-[100px] md:border-2 md:border-gray-600 md:h-[150px] ' >
        <div className='flex justify-center items-center w-full flex-col bg-deep-orange-900 h-full '>
        <h1 className='text-5xl font-bold text-black'>{title}</h1>
        <p className='mt-3 text-xl font-semibold text-black mx-7'>{subtitle}</p>

        </div>
       
      </div>

     
    </div>
  )
}

export default Heading