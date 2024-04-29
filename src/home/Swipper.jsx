import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
//import './swipper.css'
import { Pagination } from 'swiper/modules';
// import required modules
import { Autoplay } from "swiper/modules";


const image=[
    "src/assets/course/img1.jpg",
    "src/assets/course/img2.jpg",
    "src/assets/course/img3.jpg",
    "src/assets/course/img4.jpg"
]

    


const Swipper = () => {
  return (
    <Swiper
    slidesPerView={2}
    spaceBetween={30}
    autoplay={
      {
          delay:2000,
          disableOnInteraction:false
          
      }
    }
    pagination={{
        clickable: true,
      }}
     // modules={[Pagination]}
    
    // breakpoints={{
    //   640: {
    //     slidesPerView: 1,
    //     spaceBetween: 20,
    //   },
    //   768: {
    //     slidesPerView: 3,
    //     spaceBetween: 40,
    //   },
    //   1024: {
    //     slidesPerView: 5,
    //     spaceBetween: 50,
    //   },
    // }}
    modules={[Autoplay,Pagination]}
    className="mySwiper"
  >
     {
            image.map((val)=>(
<div>
    
<SwiperSlide key={val}>{<img src={val} className="w-[30%] h-[20%]"/>}</SwiperSlide>

</div>


              
            ))
        }
    
  </Swiper>)
    
}

export default Swipper;