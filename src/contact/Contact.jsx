import React, { useState } from "react";
import Heading from "../component/Heading";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import ContactSend from "./ContactSend";

const title = "Contact";
const subtitle =
  "We re here to help you get started with your software development career. We are committed to helping you to grow and develop software careers.";

const Contact = () => {
  return (
    <div>
      <div className='md:mt-0 mt-[90px]'>
        <div>
          <Heading title={title} subtitle={subtitle} />
        </div>
      </div>
      <div className=" " >
        <div className="md:w-[80%] w-[68%] h-full  my-[80px] md:mx-[120px] mx-[10%] ">
          <div className="md:w-[100%] grid md:grid-cols-2 md:gap-36">
            <div>
              <h1 className="text-red-600 font-bold  text-4xl md:text-left text-center ">
                Corporate Headquarter
              </h1>
              <div className="mt-6">
                <div className="flex gap-3 ">
                  <div className="hover:rounded-full hover:bg-gray-950 hover:border-red-500 hover:border-2 ">
                    <FaLocationDot className="mt-5 w-10 h-10 text-emerald-800 hover:text-orange-600" />
                  </div>
                  <div className="mt-3 ">
                    <h3 className=" text-orange-700 font-bold text-3xl underline">
                      Location:-
                    </h3>
                    <p className="text-base font-medium">
                      PlotNo-403, NH 5, Cuttack Road, 3rd Floor, Central Bank
                      Building, Rasulgarh, Bhubaneswar, Odisha, India, 751010
                    </p>
                  </div>
                </div>
                {/* Location*/}
                <div className="flex gap-3 ">
                  <div className="hover:rounded-full hover:bg-gray-950 hover:border-red-500 hover:border-2  ">
                    <h1>
                      <MdEmail className="mt-5 w-10 h-10 text-emerald-800 hover:text-orange-600" />
                    </h1>
                  </div>
                  <div className="mt-5">
                    <h2 className=" text-orange-700 font-bold text-3xl underline">
                      Email:
                    </h2>
                    <p className="text-base font-medium">
                      support@codingcab.com
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex gap-3 ">
                    <div className="hover:rounded-full hover:bg-gray-950 hover:border-red-500 hover:border-2 ">
                      <h1>
                        <IoCallSharp className="mt-5 w-10 h-10 text-emerald-800 hover:text-orange-600" />
                      </h1>
                    </div>
                    <div className="mt-5">
                      <h2 className=" text-orange-700 font-bold text-3xl underline">
                        Call:
                      </h2>
                      <p className="text-base font-medium">8093626565</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*left side*/}
            <div className="md:mt-0 mt-10">
              <div
                className=" text-green-700
              "
              >
                <div>
                  <h1 className="text-4xl font-bold  text-center text-red-600">
                    Contact Us
                  </h1>
                </div>
                <p className="text-lg font-bold text-center text-orange-700 mt-5">
                  Please use this form to submit general inquiries.
                </p>
                <div className="md:ml-0 left-2">
                      <ContactSend/>

                    </div>
                
              </div>
            </div>
            {/*Right Side*/}
          </div>
        </div>
      </div>
      <div className="md:max-w-6xl ml-[10%]"> <h1 className="text-4xl text-red-600 font-bold text-center underline">To Locate Us... </h1>
                  <div className="my-5">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.0653497773196!2d85.85820657518124!3d20.297562012490687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190b2d2ad4add9%3A0x278b277225607c6b!2sIXQ%20Software%20Solutions!5e0!3m2!1sen!2sin!4v1703673710876!5m2!1sen!2sin"
                      width="100%"
                      height="450"
                      style={{border:0}}
                      allowFullScreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>

          
                  </div>
                </div>
     
    </div>
  );
};

export default Contact;
