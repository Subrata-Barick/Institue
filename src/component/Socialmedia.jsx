import React, { useState } from "react";

import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { GrSkype } from "react-icons/gr";
const social = [
  <FaPhone />,
  <IoMdMail />,
  <FaFacebookF />,
  <FaTwitter />,
  <FaLinkedinIn />,
  <LuInstagram />,
  <GrSkype />,
];

const Socialmedia = () => {
  return (
    <div>
      <div>
        <div>
          <ul className="socialclass flex justify-around my-5 text-2xl ">
            {social.map((val, i) => (
              <li key={i}>{val}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Socialmedia;
