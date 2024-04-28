import React from 'react';
import { IoIosArrowDown } from "react-icons/io";

const FindHospitals = () => {
  return (
    <div>
        <div className="fixed inset-x-0 bottom-0 flex justify-center pb-10">
            <div>
                <div>Find Hospitals</div>
                <IoIosArrowDown className="ml-10" size="25"/>
            </div>
        </div>
    </div>
  )
}

export default FindHospitals;