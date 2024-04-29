import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./navbar.css";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,

  FaYoutube,
  FaSkype
} from "react-icons/fa";
import { Button } from "@material-tailwind/react";

const Navitems = () => {
  const [backGround, setBackground] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      setBackground(true);
    } else setBackground(false);
  });

  // const[open,setOpen]=useState(true);

  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    // <div className={`${backGround?'bg-black':''}  md:mt-0 md:fixed md:w-full md:top-0 md:p-1 md:z-10`} >
    //   <div> <div className=' my-6 mr-[150px]  text-center md:flex md:flex-row md:justify-between md:mx-[70px] md:my-5 '>
    /* <div>
               <Link><img src="/IXQ.png" className='md:w-46 md:h-20 rounded-2xl' alt="target" /></Link>
            </div> */
    // <div><Link><h1 className='font-bold text-3xl md:mt-3 text-red-600'>IXQSOFTWARE.COM</h1></Link></div>
    // <div>

    //     <ul className='hidden md:my-4 md:ml-[350px] md:w-auto md:pl-0  md:flex md:gap-5 '>
    //         <li><NavLink to={'/'}>Home</NavLink></li>
    //         <li><NavLink to={'/about'} onClick={()=>set}>About</NavLink></li>
    //         <li><NavLink to={'/courses'}>Courses</NavLink></li>
    //         <li><NavLink to={'/trainer'}>Trainers</NavLink></li>
    //         <li><NavLink to={'/events'}>Events</NavLink></li>
    //         <li><NavLink to={'/pricing'}>Pricing</NavLink></li>
    //         <li><NavLink to={'/contact'}>Contact</NavLink></li>
    //        <button className='md:ml-3 border-2 rounded-2xl md:px-3 bg-red-500 text-black font-bold  hover:bg-black hover:text-red-600'  ><Link to={'/'}>Get started</Link></button>
    //     </ul>

    // </div>
    // <div className='text-4xl absolute top-6 right-8 md:hidden cursor-pointer'>
    // <ion-icon onClick={()=>setOpen(!open)} name={`${open?"close-outline":"menu-outline"}`}></ion-icon>
    //   </div>

    // <div>
    // <ul className={`${open?'md:hidden absolute w-full h-full navul pb-12  z-[-1] left-0 bottom-0 py-24  pl-9':'hidden'}`}>
    //         <li className='text-red-600 font-bold'><Link to={'/'}>Home</Link></li>
    //         <li><NavLink to={'/about'}>About</NavLink></li>
    //         <li><NavLink to={'/courses'}>Courses</NavLink></li>
    //         <li><NavLink to={'/trainer'}>Trainers</NavLink></li>
    //         <li><NavLink to={'/events'}>Events</NavLink></li>
    //         <li><NavLink to={'/pricing'}>Pricing</NavLink></li>
    //         <li><NavLink to={'/contact'}>Contact</NavLink></li>
    //         <button className='md:ml-4 border-2 rounded-2xl px-5 bg-red-500 text-black font-bold  hover:bg-black hover:text-red-600'  ><Link to={'/'}>Get started</Link></button>
    //     </ul>

    // </div>

    // </div>
    //</div>
    // </div>

    // <div
    //   className={`${
    //     backGround ? "bg-black" : ""
    //   }  md:mt-0 md:fixed md:w-full md:top-0 md:p-1 md:z-10 md:h-[10%] `}
    // >
 

    <div>
     

     <div className={`${backGround?'bg-blue-gray-100':''}   md:mt-0 fixed md:w-full md:top-0 md:p-1 md:z-10 md:h-[10%] md:ml-0 w-full  h-[12%] mt-0 top-0 z-10`} >  
  
    <div className='md:flex md:w-full md:justify-between md:items-center md:h-20 md:px-4 md:absolute md:z-10 md:text-black'>

    <div>
      <h1 className={`text-deep-orange-800 md:text-3xl text-2xl font-bold md:mt-0 mt-8 md:ml-11 ml-4  `}><Link to={'/'}>IXQSOFTWARE.COM</Link></h1>
    </div>
    <ul className='hidden md:flex justify-between gap-5 ml-[20%]'>
    <li><NavLink to={'/'}>Home</NavLink></li>
    <li><NavLink to={'/about'}>About</NavLink></li>
    <li><NavLink to={'/courses'}>Courses</NavLink></li>
    <li><NavLink to={'/trainer'}>Trainers</NavLink></li>
    <li><NavLink to={'/events'}>Events</NavLink></li>
    <li><NavLink to={'/pricing'}>Pricing</NavLink></li>
    <li><NavLink to={'/contact'}>Contact</NavLink></li>
    
    </ul>
    <div className="hidden md:block">
    <Button className=" md:mr-8 border text-white border-black hover:border-red-600 hover:bg-deep-orange-900 hover:text-black font-bold">Get Started</Button>
    </div>
    
   
  
 

   <div onClick={handleNav} className='md:hidden z-10 ml-[23rem] mt-[-28px] '>
      {nav ? <AiOutlineClose className="text-white absolute"  size={30} /> : <HiOutlineMenuAlt4 size={30} />}
    </div>

 
      <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-[70%] bg-gray-100/90 px-5 py-7 flex flex-col' : 'absolute left-[-100%]'}>
      <ul>
      <li><NavLink to={'/'}>Home</NavLink></li>
    <li><NavLink to={'/about'}>About</NavLink></li>
    <li><NavLink to={'/courses'}>Courses</NavLink></li>
    <li><NavLink to={'/trainer'}>Trainers</NavLink></li>
    <li><NavLink to={'/events'}>Events</NavLink></li>
    <li><NavLink to={'/pricing'}>Pricing</NavLink></li>
    <li><NavLink to={'/contact'}>Contact</NavLink></li>
        <div className='flex justify-between my-6'>
          <FaFacebook className='icon' />
          <FaTwitter className='icon' />
          <FaYoutube className='icon' />
          < FaSkype className='icon' />
          <FaInstagram className='icon' />
        </div>
      </ul>
    </div> 
    </div>
  </div>
  </div>
   
  );
};

export default Navitems;
