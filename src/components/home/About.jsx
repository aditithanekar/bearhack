import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const About = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div>
          <div className="text-6xl text-white font-serif font-bold text-center">BearCare</div>
          <div className="flex items-center justify-center text-white font-serif text-center pt-5 pb-5">
            Say goodbye to expensive medical bills with BearCare. <br/> Easily find nearby hospitals for your insurance plan today!
          </div>
            <div className="text-center" >Find Hospitals</div>
            <IoIosArrowDown className="flex justify-center items-center ml-48" size="25"/>
        </div>
      </div>
    </div>
  );
};

export default About;