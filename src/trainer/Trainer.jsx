import React from 'react';
import Heading from '../component/Heading';
import Socialmedia from '../component/Socialmedia';
const title='Trainers';
const subtitle='Assessments concerning a clients/Students needs and expected outcomes. Preparation of learning aids. Setting up of a learning environment and resources.'


const Trainer = () => {
  return (
    <div>
       <div className='md:mt-0 mt-[90px]'>
        <div>
          <div>
          <Heading title={title} subtitle={subtitle}/>
          </div>
        </div>
        <div>
          <div className='w-ful h-full '>
            <div className='md:w-[85%] md:mx-[150px] md:mt-[80px] w-[full] mx-auto mt-10'>
              <div >
               <div className='flex md:justify-between md:gap-5 flex-wrap items-center'>
               <img data-aos="fade-right" src='src/assets/trainer/Trainer1.jpg' className='md:w-[42%]' alt="Trainer1" />
               <div className='text-center ' data-aos="fade-left" >
                <div className='my-5'><h1 className='text-6xl font-bold text-deep-orange-900'>Deepak Kumar Panda</h1></div>
                <h2 className='text-3xl font-bold text-stone-300 my-5'>Web Devlopment</h2>
                <h3 className='text-base font-bold text-slate-600' >More than 10 Years of Experience in <span className='text-orange-600'>BFSI</span> application Devlopment.</h3>
                <hr className='w-full h-px my-2 bg-orange-600 border-0 dark:bg-gray-700' />
                <div><Socialmedia/></div>
               </div>
              
               </div>
               <div>
               <div className='flex md:justify-between md:gap-5 items-center md:flex-row-reverse flex-wrap md:my-10'>
                <img data-aos="fade-right" src='src/assets/trainer/Trainer2.jpg' className='md:w-[42%] ' alt="Trainer2" />
               <div className='text-center ' data-aos="fade-left" >
                <div className='my-5'><h1 className='text-6xl font-bold text-deep-orange-900'>Soumya Ranjan</h1></div>
                <h2 className='text-3xl font-bold text-stone-300 my-5'>Website design</h2>
                <h3 className='text-base font-bold text-slate-600' >Expert in graphics and website design.</h3>
                <hr className='w-full h-px my-2 bg-orange-600 border-0 dark:bg-gray-700' />
                <div><Socialmedia/></div>
               </div>
               </div>
               </div>
               <div>
               <div className='flex md:justify-between md:gap-5 flex-wrap items-center'>
                <img data-aos="fade-right" src='src/assets/trainer/Trainer4.jpg' className='md:w-[42%]' alt="Trainer1" />
               <div className='text-center' data-aos="fade-left" >
                <div className='my-5'><h1 className='text-6xl font-bold text-deep-orange-900'>Deepak Kumar Panda</h1></div>
                <h2 className='text-3xl font-bold text-stone-300 my-5'>Web Devlopment</h2>
                <h3 className='text-base font-bold text-slate-600' >More than 10 Years of Experience in <span className='text-orange-600'>BFSI</span> application Devlopment.</h3>
                <hr className='w-full h-px my-2 bg-orange-600 border-0 dark:bg-gray-700' />
                <div><Socialmedia/></div>
               </div>
               </div>
               </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Trainer