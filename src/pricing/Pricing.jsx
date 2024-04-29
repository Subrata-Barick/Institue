import React from 'react';
import Heading from '../component/Heading';
const title='Pricing';
const subtitle='In todays competitive software landscape, pricing plays a crucial role in determining a product s success. Effective software pricing strategies not only generate revenue but also align with customer value perception and market dynamics.'
 const PricingAll=[
  {
    name:'JavaFull Stack',
    about:'Html,Css,Java Script,java,my Sql,framework,bootstrap,tailwind,React Js,Angular,Type Script',
    duration:'6-8 Month',
    price:'10,000.00',

  },
  {
    name:'Core Java Basic',
    about:'Oops Concepts,Overloading & Overriding,Exception Handling,Packages,',
    duration:'3 Month',
    price:'3,000.00',

  },
  {
    name:'Oracle DB',
    about:'SQL & PLSQL',
    duration:'3 Month',
    price:'3,000.00',

  },
  {
    name:'Live Project',
    about:'ALL the Projects basic Concept ',

    duration:'3 Month',
    price:'10,000.00',

  },
  {
    name:'C, C++',
    about:'C-token,Control Statement and Expression,Looping,Arrays and String,Dynamic Memory Allocation',
    duration:'3-4 Month',
    price:'3,000.00',

  },
  {
    name:'PHP',
    about:'Evaluation of Php, Basic Syntax, Defining variable and constant, Php Data type, Operator and Expression. ',
    duration:'6-8 Month',
    price:'10,000.00',

  },
  {
    name:'Dot Net',
    about:'. Object Oriented Programming,Errors & Exception Handling Dot Net Syllabus,Collections',
    duration:'6-8 Month',
    price:'10,000.00',

  },
  {
    name:'Python',
    about:'List, Ranges & Tuples in Python,Input and Output in Python,Python Object Oriented,Python Multithreaded Programming etc',
    duration:'6-8 Month',
    price:'10,000.00',

  },
  {
    name:'E Commerce App Dev',
    about:'finance, accounting,computer applications.',
    duration:'6-8 Month',
    price:'25,000.00',

  },
  {
    name:'Web Design',
    about:'HTML,CSS,JavaScript,Illustrator,Adobe Photoshop',
    duration:'3 Month',
    price:'3,000.00',

  }
 ]
const Pricing = () => {
  return (
    <div>
     <div className='md:mt-0 mt-[90px]'>
        <div>
          <div>
          <Heading title={title} subtitle={subtitle}/>
          </div>
        </div>
        <div>
          <div className='w-full h-full '>
            <div className='mx-[60px] my-[60px] ' data-aos="fade-right">
            <div className='md:grid md:grid-cols-3 md:gap-11 grid grid-cols-1 gap mx-8 '>
              {
                PricingAll.map((val)=>(
                  <div key={val} className='md:h-[30rem] md:rounded border-2 bg-green-50 border-orange-900 mx-5 my-5 hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white duration-300 '>
                    <div className='my-5 text-3xl font-bold text-orange-500 text-center bg-slate-700'>
                    
                      <h1>{val.name}</h1>
                      

                    </div>
                   
                    <div className='text-lg font-bold text-gray-400 text-center mt-6 md:h-[10rem]  '>
                      <p className='text-xl font-extrabold text-red-700 underline my-5'>Concept we are gonna to Provide...</p>
                    <p className='md:w-full text-sm  '>{val.about}</p>

                    </div>
                    <div className='mb-5 mt-10 text-center text-xl font-bold '>
                      <p className='hover:text-white'>Duration:- {val.duration}</p>
                    </div>
                    <div className='my-5 text-center text-xl font-bold '>
                      <p className='hover:text-white'>Course-Fee:- ₹<span className='text-blue-700 underline'>{val.price}</span> </p>
                    </div>
                    <div className='text-center my-[55px]'><button className='transition delay-100 duration-200 ease-in-out rounded-md border-2 text-lg font-extrabold text-black w-[120px] border-red-700 bg-red-600 hover:bg-black hover:text-red-600 '>Buy</button></div>

                  </div>
                ))
              }
            </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing;