import React from "react";
import About from "@/components/home/About";
import FindHospitals from "@/components/home/FindHospitals";
import Provider from "@/components/home/Provider";
import texts from "@/data/Providers";

const page = () => {
  return (
    <div>
        <About />
        <FindHospitals />
        <div className="flex flex-col justify-center items-center">
          <div className="grid grid-rows-4 grid-cols-3 gap-x-10 w-6/12">
          {texts.map((paragraph, index) => (
            <Provider
              key={index}
              title={paragraph.title}
            />
          ))}
          </div>
        </div>
    </div>
  );
};

export default page;