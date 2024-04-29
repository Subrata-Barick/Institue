import React from 'react'
import Counter from '../component/Counter';
import { TbBounceRightFilled } from "react-icons/tb";
import Swipper from '../home/Swipper';
import Heading from '../component/Heading';
const title='About Us';
const subtitle='We are leading software training and development center.'


const About = () => {
  return (
    <div>
      
      <div className='md:mt-0 mt-[90px]'>
      <Heading title={title} subtitle={subtitle}/>
        </div>{/*close about*/}
      <div >
        <div className='grid md:grid-cols-2 md:grid-rows-1 md:mx-[80px] md:my-10 md:h-auto grid-cols-1 mx-7 my-5' >
          <div data-aos='fade-up' data-aos-delay='100'>
            <h1 className='text-3xl text-orange-700'>
            Our comprehensive software training programs are designed to equip you with the skills and knowledge you need to succeed in the dynamic world of software development.
            </h1>
            <h2 className='text-base mt-6 mb-3'>
            In today's technology-driven world, software skills are in high demand. Businesses across all industries are seeking skilled software developers to create and maintain their critical applications. If you're looking to launch a rewarding career in software development, look no further than our leading software training and development center.
            </h2>
            <TbBounceRightFilled color='red' size='2rem'/> <p className='my-3 text-bold text-black'>Empowering the Next Generation of Software Professionals</p>
            <TbBounceRightFilled color='red' size='2rem'/><p className='my-3 text-bold text-black'> Unleash Your Software Development Potential</p>
            <TbBounceRightFilled color='red' size='2rem'/><p className='my-3 text-bold text-black'> Industry-Aligned Curriculum</p>
            <TbBounceRightFilled color='red' size='2rem'/><p className='my-3 text-bold text-black'> Hands-on Learning Experience</p>
            <TbBounceRightFilled color='red' size='2rem'/><p className='my-3 text-bold text-black'> Career Guidance and Placement Assistance</p>
            <h3 className='text-slate-500'>
            Contact us today to learn more about our software training programs and start your journey towards a fulfilling career in software development.
            </h3>


          </div>
          <div data-aos='fade-left' data-aos-delay='100'>
           <div className='flex flex-wrap md:justify-end justify-center'>
            <img src="src/assets/aboutpic/about1.jpg" className='h-[280px] w-[280px]' alt="about jpg" />
            <img src="src/assets/aboutpic/about2.jpg" className='h-[280px] w-[280px]'  alt="" />
            <img src="src/assets/aboutpic/about3.jpg" className='h-[280px] w-[280px]' alt="" />
            <img src="src/assets/aboutpic/about4.jpg"className='h-[280px] w-[280px]' alt="" />
           </div>
            </div>
        </div>
      </div>

      <div data-aos="zoom-out-right" className='mt-[80px]'>
        <Counter/>
      </div>
      <div className='mt-[80px] ml-[70px]'data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" >
        <div>
<h1 className='text-3xl font-bold text-stone-500'>TESTIMONIALS</h1><hr class="w-64 h-px my-2 bg-orange-600 border-0 dark:bg-gray-700"/>
    
<h2 className='font-extrabold text-5xl text-red-600'>WHAT ARE THEY SAYING...</h2>

        </div>
      </div>
      <div className='mt-[80px] ml-[70px]'>
        <Swipper/>
      </div>
    </div>
  )
}

export default About