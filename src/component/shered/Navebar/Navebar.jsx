// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import logo from "../../../assets/logo1.png";
import { FiSearch } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

import { Link } from 'react-router-dom';
import NavebarSearch from './NavebarSearch';

const Navebar= () => {

    const [icon, setIcon]=useState(false);
    const switchIcon=(clicks)=>{
        setIcon(!clicks);
    }

return (
<div className="navbar bg-white px-[20px] mx-auto justify-between sticky -top-1 z-50">
   {
    icon 
    &&
    <NavebarSearch />

   }
  <div>
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>d</a>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <Link to={'/'} className="normal-case text-xl">
        <img className='h-[100px]' src={logo} alt="" />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li className="dropdown">
  <label tabIndex={0} className='text-xl font-semibold text-gray-900 hover:bg-white focus:bg-white'>Study Abroad<RiArrowDropDownLine className='text-2xl text-[#94A0B9]' /></label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-white rounded-box w-52">
    <li><a>Undergraduate</a></li>
    <li><a>Masters</a></li>
    <li><a>Phd</a></li>
    <li><a>Diploma</a></li>
    <li><a>Evaluate your profile</a></li>
  </ul>
        {/* <a>Pages</a> */}
        </li>
      {/* <li><a className='text-xl font-semibold text-gray-900'>Study Abroad<RiArrowDropDownLine className='text-2xl text-[#94A0B9]' /></a></li> */}
      <li className="dropdown">
  <label tabIndex={0} className='text-xl font-semibold text-gray-900 hover:bg-white focus:bg-white'>Jobs in Abroad<RiArrowDropDownLine className='text-2xl text-[#94A0B9]' /></label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-white rounded-box w-52">
    <li><a>Skilled</a></li>
    <li><a>Unskilled</a></li>
    <li><a>Sponsored</a></li>
    <li><a>Non sponsored</a></li>
    <li><a>Visa processing</a></li>
  </ul>
        {/* <a>Pages</a> */}
        </li>
        <li className="dropdown">
  <label tabIndex={0} className='text-xl font-semibold text-gray-900 hover:bg-white focus:bg-white'>Test-Prep<RiArrowDropDownLine className='text-2xl text-[#94A0B9]' /></label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-white rounded-box w-52">
    <li><a>GRE</a></li>
    <li><a>PTE</a></li>
    <li><a>TOEEL</a></li>
    <li><a>SAT</a></li>
    <li><a>OET</a></li>
  </ul>
        {/* <a>Pages</a> */}
        </li>
        <li className="dropdown hidden">
  <label tabIndex={0} className='text-xl font-semibold text-gray-900 hover:bg-white focus:bg-white'>Skill up<RiArrowDropDownLine className='text-2xl text-[#94A0B9]' /></label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-white rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
        {/* <a>Pages</a> */}
        </li>
        <li>
  <label className='text-xl font-semibold text-gray-900 hover:bg-white focus:bg-white'>Free Resource</label>
        {/* <a>Pages</a> */}
        </li>
        <li>
  <label className='text-xl font-semibold text-gray-900 hover:bg-white focus:bg-white hidden'>Wall of tame</label>
        </li>
        <li>
  <label  className='text-xl font-semibold text-gray-900 hover:bg-white focus:bg-white'>Blog</label>
        </li>
    </ul>
  </div>
 
  <div className='wx-[40px]'>
  <div className='mr-[30px]'>
  {/* <div className="dropdown">
  <label tabIndex={0} className="btn m-1">Click</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-white rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div> */}
    {
        icon ?
            <RxCross2 onClick={()=>switchIcon(icon)} className='text-3xl cursor-pointer' /> 
        :  
        <FiSearch onClick={()=>switchIcon(icon)} className='text-3xl cursor-pointer' />
    }
  
  </div>
    <a className="btn bg-[#D82027] border-none hover:bg-[#274396] w-[152px] h-[56px] py-5 px-[37px] text-sm">subscribe</a>
  </div>
</div>
    );
};

export default Navebar;