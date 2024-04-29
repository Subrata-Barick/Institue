import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { GrSkype } from "react-icons/gr";

const socialList = [
    {
        iconName: <FaFacebookF/>,
        siteLink: '#',
        className: 'facebook',
        
    },
    {
        iconName:<FaTwitter/>,
        siteLink: '#',
        className: 'twitter',
    },
    {
        iconName: <FaLinkedinIn/>,
        siteLink: '#',
        className: 'linkedin',
    },
    {
        iconName: <LuInstagram/>,
        siteLink: '#',
        className: 'instagram',
    },
    {
        iconName: <GrSkype/>,
        siteLink: '#',
        className: 'skype',
    }
   
]

const Footer = () => {
  return (
    <div  data-aos="flip-right" data-aos-delay='300'>
        <div className='flex  md:flex-row flex-col mx-8 border-2 border-x-amber-700 hover:border-y-amber-900 rounded-md  mt-[80px] p-[30px]  bg-gray-400 ' >
            <div className='ml-4 md:mt-[25px]'>
                <h1 className='text-2xl text-orange-600 hover:text-red-500'><Link to={'/'}>IXQSOFTWARE.COM</Link></h1>
                <p className='text-xl mt-2'>IXQ Software Solutions, Bhubaneswar, Odisha,PIN-751010</p>
                <p className='flex gap-1 mt-2'><FaPhone color='red' size='1.2rem' className='mt-2'/><span className='text-xl'> :- +91 8093626565</span></p>
                
                <p className='flex gap-1 mt-2'><IoMdMail color='red' size='1.2rem' className='mt-2'/><span className='text-xl'> :- support@ixqsoftware.in</span></p>
              
               

            </div>{/*first*/}
            <div className='md:flex md:justify-between gap-[80px] md:ml-5 md:mt-1'>
            <div className='mt-3 ml-3 p-2'>
                <h2 className='text-xl  text-orange-600' >Useful Links</h2>
                <ul className=' w-auto h-auto'>
                    <li><Link to=''>Home</Link></li>
                    <li><Link to='/about'>
About us</Link></li>
                    <li><Link to='/trainer'>
Services</Link></li>
                    <li><Link to='/contact'>
Terms of service</Link></li>
                    <li><Link to='/contact'>
Privacy policy</Link></li>
                 
                </ul>

            </div>{/*second*/}
            <div className='mt-3 ml-3 p-2'>
                <h2 className='text-xl text-orange-600' >Our Services</h2>
                <ul className=' w-auto h-auto'>
                <li><Link to='/courses'>Web Design</Link></li>
                    <li><Link to='/courses'>
Web Development</Link></li>
                    <li><Link to='/courses'>
Product Management</Link></li>
                    <li><Link to='/courses'>
Banking & Finance</Link></li>
                    <li><Link to='/courses'>Graphic Design</Link></li>
               

                </ul>

            </div>{/*Third*/}
            <div className='mr-4 mt-3 ml-3 p-2 '>
            <h2 className='text-xl text-orange-600' >Training Courses</h2>
                <ul className=' w-auto h-auto'>
                <li><Link to='/courses'>
Core Java</Link></li>
                    <li><Link to='/courses'>Spring Boot & Hibernate</Link></li>
                    <li><Link to='/courses'>
Oracle SQL & PLSQL</Link></li>
                    <li><Link to='/courses'>
Application Security & VAPT</Link></li>
                    <li><Link to='/courses'>Network & Cyber Security</Link></li>
                
                </ul>

            </div>{/*Four*/}
        </div>
        </div>
        <div className='flex justify-between flex-wrap mx-8 mt-1 mb-4 bg-slate-900 opacity-3 rounded'>
            <div className='mx-6 my-3'>
                <p>&copy; Copyright <span className='font-bold'>IXQ Software Solutions Pvt Ltd.</span> . All Rights Reserved </p>
                <p>Designed by <span className='font-semibold text-red-700 hover:text-red-700 hover:text-lg'><Link to={'/'}>IXQ Software Team..</Link></span> </p>
            </div>
            <div className='my-3'>
               <ul className='flex gap-5 flex-row' >{
                    socialList.map((val,i)=>(
                        
                              <li key={i} className='md:m-[10px] m-[3px] transition duration-150 ease-out hover:ease-in hover:text-blue-700'><Link to='/'>{val.iconName}</Link>{val.className}</li>

                        
                        
                        
                        
                    ))
                }</ul> 
            </div>

        </div>

    </div>
  )
}

export default Footer