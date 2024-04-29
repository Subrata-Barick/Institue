import React from "react";
import Heading from '../component/Heading';
const title='Events';
const subtitle='Events that help widen students perspectives, connect them with professional resources, and promote academic success can make a big difference in their college experience—and improve their chances of success after graduation'

const event=[
  {id:1,
    img:'src/assets/eventpic/event1.jpg',
    intro:'Introduction to webdesign',
    date:'Wednesday, January 1st at 7:30 PM',
    subtitle:`
    Java is a powerful programming language that can be used to create a wide variety of applications, including dynamic and interactive websites. Web design using Java involves utilizing Java technologies like Servlets, JavaServer Pages (JSPs), and Java frameworks to build and manage web applications.`


  },
  {id:2,
    img:'src/assets/eventpic/event2.jpg',
    intro:'Introduction to webdesign',
    date:'Wednesday, January 1st at 7:30 PM',
    subtitle:`
    Java is a powerful programming language that can be used to create a wide variety of applications, including dynamic and interactive websites. Web design using Java involves utilizing Java technologies like Servlets, JavaServer Pages (JSPs), and Java frameworks to build and manage web applications.`


  },
  {id:3,
    img:'src/assets/eventpic/event3.jpg',
    intro:'Introduction to webdesign',
    date:'Wednesday, January 1st at 7:30 PM',
    subtitle:`
   Java is a powerful programming language that can be used to create a wide variety of applications, including dynamic and interactive websites. Web design using Java involves utilizing Java technologies like Servlets, JavaServer Pages (JSPs), and Java frameworks to build and manage web applications.`


  },
  {id:4,
    img:'src/assets/eventpic/event4.jpg',
    intro:'Introduction to webdesign',
    date:'Wednesday, January 1st at 7:30 PM',
    subtitle:`
    Java is a powerful programming language that can be used to create a wide variety of applications, including dynamic and interactive websites. Web design using Java involves utilizing Java technologies like Servlets, JavaServer Pages (JSPs), and Java frameworks to build and manage web applications.`


  },

]

const Events = () => {
  return (
    <div>
      <div className='md:mt-0 mt-[90px]'>
        <div>
          <div><Heading title={title} subtitle={subtitle}/></div>
        </div>
        <div className="w-ful h-full md:mt-[70px]  md:mb-[30%]">
        <div className="grid md:grid-cols-2 md:grid-rows-1 grid-cols-1 grid-rows-1 md:gap-y-[200px] md:my-0 my-[100px] gap-y-[200px]">
      

      
        {
          event.map((val,i)=>(
          
   

          
         
         
         
            <div key={i} className=" md:mt-[20px] mt-7  md:my-0 my-[100px] relative md:w-[80%] w-auto h-[100%] mx-[80px] md:mb-0 mb-[250px] " data-aos='fade-up'>

            <img src={val.img} className='w-[100%] rounded hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  ' alt="Event Photo" />
            <div className=" ">
              <div className="absolute md:top-[70%] top-[30%] md:left-[6%] left-6 rounded border-orange-500 border bg-black md:w-[500px] text-center">
               
                  <h1 className="md:text-3xl text-lg font-bold text-red-600 hover:-translate-y-1 hover:scale-110 hover:text-orange-700 duration-300">{val.intro}</h1>
                  <h2 className="text-sm font-semibold underline decoration-2 my-3 ">{val.date}</h2>
                  <p className="text-base text-white">{val.subtitle}</p>
                

              
              
          

         
           
        
                  
          </div>
          </div>
        </div>
            
          ))
        }
         
           </div>
          </div>
      </div>
    </div>
  );
};

export default Events;
