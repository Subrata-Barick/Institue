import React from "react";

import { Typewriter } from "react-simple-typewriter";

const Code = () => {
  return (
    <div className="md:my-[100px] ">
      <div className="md:mt-[30px] md:mb-[40px] mb-5  md:h-full mt-10 mx-3 h-[70px] bg-gray-400 ">
        <div className="md:h-[350px] md:w-full w-auto h-fit  flex justify-center items-center  ">
          <h1
            className="md:text-7xl text-3xl mt-5"
            // style={{
            //   paddingTop: "3rem",
            //   margin: "auto 0",
            //   fontWeight: "normal",
            // }}
          >
            We Are Offering{" "}
            <span style={{ color: "orangered", fontWeight: "bold" }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={["Html", "Css", "Java Script", "Oracle DB",'Web Design','C,C++','Php','Dot Net','Python','Adv Java','Core Java','Live project','Testing']}
                loop={true}
                cursor
                cursorStyle="..."
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Code;
