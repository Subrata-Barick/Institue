import React, { useState } from 'react';
import CountUp from 'react-countup';
//import ScrollTrigger from 'react-scroll-trigger';


const Counter = () => {
    //const[countOn,setCountOn]=useState(false)
 
  return (
    <div >
      {/* <ScrollTrigger onEnter={()=>setCountOn(true)} onExit={()=>setCountOn(false)}> */}
        <div className='w-full bg-neutral-950  text-orange-900 p-[50px] font-bold flex justify-between md:text-6xl  mt-[20px]  md:mt-[40px] bg-gray-400'>
            <h1><CountUp start={0} end={1232} duration={3} delay={0}/>
                
                
                <p className='md:text-2xl md:ml-5 md:mt-3 text-base mt-2 '>Students</p>
            </h1>
            <h1> 
                <CountUp start={0} end={64} duration={2} delay={0}/>
                <p className='md:text-2xl md:mt-1 text-base mt-2'>Courses</p>
            </h1>
            <h1> 
                <CountUp start={0} end={42} duration={2} delay={0}/>
                <p className='md:text-2xl md:mt-1 text-base mt-2'>Events</p>
            </h1>
            <h1> 
                <CountUp start={0} end={15} duration={2} delay={0}/>
                <p className='md:text-2xl md:mt-1 text-base mt-2'>Trainers</p>
            </h1>
            

        </div>
        
        {/* </Scrolltrigger> */}
        
        </div>
    
  )
}

export default Counter