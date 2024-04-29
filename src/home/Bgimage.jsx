import React from 'react';
import {Link} from 'react-router-dom'

const Bgimage = () => {
  return (
 
        <div className=' md:w-full  md:h-screen relative'>
        <div className='w-full md:h-full object-contain'>
            <img src="src/assets/Bgimgwhite.jpg" className='md:w-full md:h-[800px] w-auto
            h-auto'  alt="target" />
      <div className='absolute md:top-[445px] md:left-[76px] top-[140px] left-[30px]  ' data-aos="zoom-in-up" data-aos-delay='300'>
      <h1 className='md:font-extrabold md:text-5xl font-semibold text-3xl text-deep-orange-900'>Learning Today,<br/><span className='text-brown-800'>Leading Tomorrow.</span></h1>
            <p className='md:font-bold md:text-3xl md:mt-2  font-semibold text-base  text-deep-orange-900'>We are team of talented designers making websites with Bootstrap & Tailwind...</p>
            <button className=' md:mt-5  md:text-lg border-2 rounded-2xl md:px-8 md:py-3 px-4 py-1 transition duration-150 ease-out hover:ease-in bg-black text-red-600 font-bold  hover:bg-deep-orange-900 hover:text-black'><Link to={'/about'}>Get Started...</Link></button>
            
       
      </div>
      
           
        </div>
        
    </div>
   

  
    
  )
}

export default Bgimage