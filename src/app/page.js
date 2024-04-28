import React from "react";
import About from "@/components/home/About";
import FindHospitals from "@/components/home/FindHospitals";
import Provider from "@/components/home/Provider";

const page = () => {
  return (
    <div>
        <About />
        <FindHospitals />
        <Provider />
    </div>
  );
};

export default page;