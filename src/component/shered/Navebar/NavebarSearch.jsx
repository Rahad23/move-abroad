// import React, {} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsSearch } from "react-icons/bs";
const NavebarSearch= () => {
  AOS.init(400);
    return <div className="card bg-white shadow-xl absolute mt-[200px] ml-[65%]" data-aos="zoom-in">
    <div className="card-body">
    <div>
    <input type="text" placeholder="Type here" className="input bg-white input-bordered w-[279px] relative pr-16" />
    <button className="btn bg-[#274396] hover:bg-[#D82027] border-none absolute ml-[-15%] rounded-[5px]">
        <BsSearch className="text-xl text-white" />
    </button>
    </div>
    </div>
  </div>
}

export default NavebarSearch;