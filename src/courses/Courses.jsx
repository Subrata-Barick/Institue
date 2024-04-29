import React from "react";
//import Course from "../home/Course";
import Heading from "../component/Heading";
const title='Courses';
const subtitle='Software and Networking.'
import { IoIosContact } from "react-icons/io";
import { CiHeart } from "react-icons/ci";



const Courses = () => {
  return (
    <div>
       <div className='md:mt-0 mt-[90px]'>
        <div>
          <div>
            <div>
            <Heading title={title} subtitle={subtitle}/>
            </div>
          </div>
          <div>
<div className="text-center mt-10">

          <h2 className="text-6xl text-black font-extrabold underline  ">
            POPULAR COURSES
          </h2>

</div>
        
            <div className="w-full h-full ">
               <div className="mx-[7%] ">
               <div className="border-2 border-orange-900 rounded-md mt-10">
          <div className="bg-contain bg-no-repeat md:w-[50%] md:h-[50%] w-[100%] ">
            <img
              src="src/assets/course/cor1.jpg"
              className="rounded"
              alt="cor1"
            />
          </div>
          <div className="flex justify-between mx-4 m-4">
            <p className="border-2 border-orange-500 rounded-md p-2 text-l">
              Web Development
            </p>
            <p className="text-2xl">₹ 3,000</p>
          </div>
          <div>
            <h2 className="text-3xl text-red-600 font-bold hover:text-orange-600 hover:opacity-1.8 mx-4">
              Website Design
            </h2>
            <p className="text-m mx-4 mt-2 ">
              HTML and CSS: The basic building blocks of websites User
              experience (UX) and user interface (UI) design: How to create
              websites that are both beautiful and easy to use <br />
              <br />
              Responsive design: How to create websites that look great on all
              devices, from desktop computers to smartphones <br />
              <br />
              Content management systems (CMS): How to use software like
              WordPress to create and manage websites
              <br />
              <br />
              Web design tools: How to use industry-standard tools like Adobe
              Photoshop and Sketch
              <br />
              <br />
            </p>
          </div>
          <div className="flex justify-between mx-4">
            <div className="flex">
              <img
                src="src/assets/course/img1.jpg"
                className="h-[120px] w-[100px] rounded-full"
                alt="cod"
              />
              <p className="mt-[60px] text-2xl hover:text-red-600 ml-2">
                Deepak Panda
              </p>
            </div>
            <div className="flex gap-4 mt-[60px]">
              <p className="flex">
                <IoIosContact color="orange" size="2rem" />{" "}
                <span className="mt-1">50</span>
              </p>
              <p className="flex">
                <CiHeart color="orange" size="2rem" />{" "}
                <span className="mt-1">65</span>
              </p>
            </div>
          </div>
        </div>
      </div>{/*first end*/}
      <div className="mx-[7%] ">
               <div className="border-2 border-orange-900 rounded-md mt-10">
          <div className="bg-contain bg-no-repeat  md:w-[50%] md:h-[50%] w-[100%] ">
            <img
              src="src/assets/course/cor2.jpg"
              className="rounded"
              alt="cor1"
            />
          </div>
          <div className="flex justify-between mx-4 m-4">
            <p className="border-2 border-orange-500 rounded-md p-2 text-l">
            Java Full Stack - BFSI Application Development
            </p>
            <p className="text-2xl">₹ 10,000</p>
          </div>
          <div>
            <h2 className="text-3xl text-red-600 font-bold hover:text-orange-600 hover:opacity-1.8 mx-4">
            Developing banking and financial application using Java technology and Oracle data base
            </h2>
            <p className="text-m mx-4 mt-2 ">
            Java full stack development encompasses the creation of both the front-end and back-end components of BFSI applications. Front-end development focuses on the user interface, ensuring a seamless and engaging experience for customers. Back-end development, on the other hand, deals with the server-side logic, managing data storage, security, and application performance. <br />
              <br />
              <br />
              <br />
            </p>
          </div>
          <div className="flex justify-between mx-4">
            <div className="flex">
              <img
                src="src/assets/course/img2.jpg"
                className="h-[120px] w-[100px] rounded-full"
                alt="cod"
              />
              <p className="mt-[60px] text-2xl hover:text-red-600 ml-2">
              Deepak Kumar Panda
              </p>
            </div>
            <div className="flex gap-4 mt-[60px]">
              <p className="flex">
                <IoIosContact color="orange" size="2rem" />{" "}
                <span className="mt-1">50</span>
              </p>
              <p className="flex">
                <CiHeart color="orange" size="2rem" />{" "}
                <span className="mt-1">65</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-[7%] ">
               <div className="border-2 border-orange-900 rounded-md mt-10">
          <div className="bg-contain bg-no-repeat md:w-[50%] md:h-[50%] w-[100%]">
            <img
              src="src/assets/course/cor3.jpg"
              className="rounded"
              alt="cor1"
            />
          </div>
          <div className="flex justify-between mx-4 m-4">
            <p className="border-2 border-orange-500 rounded-md p-2 text-l">
              Web Development
            </p>
            <p className="text-2xl">₹ 3,000</p>
          </div>
          <div>
            <h2 className="text-3xl text-red-600 font-bold hover:text-orange-600 hover:opacity-1.8 mx-4">
              Website Design
            </h2>
            <p className="text-m mx-4 mt-2 ">
              HTML and CSS: The basic building blocks of websites User
              experience (UX) and user interface (UI) design: How to create
              websites that are both beautiful and easy to use <br />
              <br />
              Responsive design: How to create websites that look great on all
              devices, from desktop computers to smartphones <br />
              <br />
              Content management systems (CMS): How to use software like
              WordPress to create and manage websites
              <br />
              <br />
              Web design tools: How to use industry-standard tools like Adobe
              Photoshop and Sketch
              <br />
              <br />
            </p>
          </div>
          <div className="flex justify-between mx-4">
            <div className="flex">
              <img
                src="src/assets/course/img3.jpg"
                className="h-[120px] w-[100px] rounded-full"
                alt="cod"
              />
              <p className="mt-[60px] text-2xl hover:text-red-600 ml-2">
                Deepak Panda
              </p>
            </div>
            <div className="flex gap-4 mt-[60px]">
              <p className="flex">
                <IoIosContact color="orange" size="2rem" />{" "}
                <span className="mt-1">50</span>
              </p>
              <p className="flex">
                <CiHeart color="orange" size="2rem" />{" "}
                <span className="mt-1">65</span>
              </p>
            </div>
          </div>
        </div>
      </div>
     
               </div>

            </div>
          </div>
        </div>
      </div>
   
  );
};

export default Courses;
