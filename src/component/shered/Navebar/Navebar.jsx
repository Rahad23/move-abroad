// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import logo from "../../../assets/logo1.png";
import { FiSearch } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import NavebarSearch from './NavebarSearch';
import "../Footer/Footer.css";
const Navebar= () => {

    const [icon, setIcon]=useState(false);
    const switchIcon=(clicks)=>{
        setIcon(!clicks);
    }

return (
<div className="navbar bg-white lg:px-[20px] px-1 mx-auto justify-between sticky -top-1 z-50">
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
        <li className="dropdown dropdown-right border-animate">
         <label tabIndex={0} className='flex justify-between'>Study Abroad <FaAngleRight /></label>
         <ul tabIndex={0} className="dropdown-content z-[1] menu p-0 shadow bg-white rounded-box w-[170px]">
          <li className="border-animate">
          <Link to={"/undergraduate"} className='hover:bg-white focus:text-gray-950 text-base font-normal'>Undergraduate</Link>
          </li>
          <li className="border-animate">
            <Link to={"/masters"} className='hover:bg-white focus:text-gray-950 text-base font-normal'>Masters</Link>
            </li>
            <li className="border-animate">
              <Link to={"/phd"} className='hover:bg-white focus:text-gray-950 text-base font-normal'>Phd</Link>
            </li>
            <li className="border-animate">
              <Link to={"/evaluate-your-profile"} className='hover:bg-white focus:text-gray-950 text-base font-normal flex flex-wrap'>Evaluate your profile</Link>
              </li>
        </ul>
        </li>
        <li className="dropdown dropdown-right border-animate">
         <label tabIndex={0} className='flex justify-between'>Jobs in Abroad <FaAngleRight /></label>
         <ul tabIndex={0} className="dropdown-content z-[1] menu p-0 shadow bg-white rounded-box w-[170px]">
         <li className="border-animate"><Link to={"/skilled"} className='hover:bg-white focus:text-gray-950 text-base font-medium'>Skilled</Link></li>
         <li className="border-animate"><Link to={"/unskilled"} className='hover:bg-white focus:text-gray-950 text-base font-medium'>Unskilled</Link></li>
            <li className="border-animate">
              <Link to={"/phd"} className='hover:bg-white focus:text-gray-950 text-base font-normal'>Phd</Link>
            </li>
            <li className="border-animate">
              <Link to={"/evaluate-your-profile"} className='hover:bg-white focus:text-gray-950 text-base font-normal flex flex-wrap'>Evaluate your profile</Link>
              </li>
              <li className="border-animate"><Link to={"/sponsored"} className='hover:bg-white focus:text-gray-950 text-base font-normal'>Sponsored</Link></li>
            <li className="border-animate"><Link to={"/non_sponsored"} className='hover:bg-white focus:text-gray-950 text-base font-normal'>Non sponsored</Link></li>
            <li className="border-animate"><Link to={"/visa_processing"} className='hover:bg-white focus:text-gray-950 text-base font-normal'>Visa processing</Link></li>
        </ul>
        </li>
        <li className="dropdown dropdown-right border-animate">
         <label tabIndex={0} className='flex justify-between'>Test-Prep<FaAngleRight /></label>
         <ul tabIndex={0} className="dropdown-content z-[1] menu p-0 shadow bg-white rounded-box w-[170px]">
         <li className="border-animate"><Link to={"/GRE"} className='hover:bg-white focus:text-gray-950 text-base font-medium'>GRE</Link></li>
    <li className="border-animate"><Link to={"/PTE"} className='hover:bg-white focus:text-gray-950 text-base font-normal'>PTE</Link></li>
    <li className="border-animate"><Link to={"/TOEEL"} className='hover:bg-white focus:text-gray-950 text-base font-normal'>TOEEL</Link></li>
    <li className="border-animate"><Link to={"/SAT"} className='hover:bg-white focus:text-gray-950 text-base font-normal'>SAT</Link></li>
    <li className="border-animate"><Link to={"/OTE"} className='hover:bg-white focus:text-gray-950 text-base font-normal'>OET</Link></li>
        </ul>
        </li>
        <li className='border-animate'>
        <label className=' text-gray-900 hover:bg-white focus:bg-white'>
        <Link to={"/free_resource"}>Free Resource</Link>
    </label>
        </li>
        <li className='border-animate'>
        <label  className=' text-gray-900 hover:bg-white focus:bg-white'>
   <Link to={"/blog"}>
      Blog
   </Link>
    </label>
        </li>
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
  <ul tabIndex={0} className="p-2 dropdown-content shadow hover:bg-white text-gray-950 focus:text-gray-950 bg-white w-52">
    <li className="border-animate"><Link to={"/undergraduate"} className='hover:bg-white focus:text-gray-950 text-base font-medium'>Undergraduate</Link></li>
    <li className="border-animate"><Link to={"/masters"} className='hover:bg-white focus:text-gray-950 text-base font-medium'>Masters</Link></li>
    <li className="border-animate"><Link to={"/phd"} className='hover:bg-white focus:text-gray-950 text-base font-medium'>Phd</Link></li>
    <li className="border-animate"><Link to={"/diploma"} className='hover:bg-white focus:text-gray-950 text-base font-medium'>Diploma</Link></li>
    <li className="border-animate"><Link to={"/evaluate-your-profile"} className='hover:bg-white focus:text-gray-950 text-base font-medium'>Evaluate your profile</Link></li>
  </ul>
        </li>
      <li className="dropdown">
  <label tabIndex={0} className='text-xl font-semibold text-gray-900 hover:bg-white focus:bg-white'>Jobs in Abroad<RiArrowDropDownLine className='text-2xl text-[#94A0B9]' /></label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-white rounded-box w-52">
    <li className="border-animate"><Link to={"/skilled"} className='hover:bg-white focus:text-gray-950 text-base font-medium'>Skilled</Link></li>
    <li className="border-animate"><Link to={"/unskilled"} className='hover:bg-white focus:text-gray-950 text-base font-medium'>Unskilled</Link></li>
    <li className="border-animate"><Link to={"/sponsored"} className='hover:bg-white focus:text-gray-950 text-base font-medium'>Sponsored</Link></li>
    <li className="border-animate"><Link to={"/non_sponsored"} className='hover:bg-white focus:text-gray-950 text-base font-medium'>Non sponsored</Link></li>
    <li className="border-animate"><Link to={"/visa_processing"} className='hover:bg-white focus:text-gray-950 text-base font-medium'>Visa processing</Link></li>
  </ul>
        </li>
        <li className="dropdown">
  <label tabIndex={0} className='text-xl font-semibold text-gray-900 hover:bg-white focus:bg-white'>Test-Prep<RiArrowDropDownLine className='text-2xl text-[#94A0B9]' /></label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-white rounded-box w-52">
    <li className="border-animate"><Link to={"/GRE"} className='hover:bg-white focus:text-gray-950 text-base font-medium'>GRE</Link></li>
    <li className="border-animate"><Link to={"/PTE"} className='hover:bg-white focus:text-gray-950 text-base font-medium'>PTE</Link></li>
    <li className="border-animate"><Link to={"/TOEEL"} className='hover:bg-white focus:text-gray-950 text-base font-medium'>TOEEL</Link></li>
    <li className="border-animate"><Link to={"/SAT"} className='hover:bg-white focus:text-gray-950 text-base font-medium'>SAT</Link></li>
    <li className="border-animate"><Link to={"/OTE"} className='hover:bg-white focus:text-gray-950 text-base font-medium'>OET</Link></li>
  </ul>
        </li>
        <li className="dropdown hidden">
  <label tabIndex={0} className='text-xl font-semibold text-gray-900 hover:bg-white focus:bg-white'>Skill up<RiArrowDropDownLine className='text-2xl text-[#94A0B9]' /></label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-white rounded-box w-52">
    <li className="border-animate"><a className='hover:bg-white focus:text-gray-950 text-base font-medium'>Item 1</a></li>
    <li className="border-animate"><a className='hover:bg-white focus:text-gray-950 text-base font-medium'>Item 2</a></li>
  </ul>
        </li>
        <li>
  <label className='text-xl font-semibold text-gray-900 hover:bg-white focus:bg-white'>
    <Link to={"/free_resource"}>
     Free Resource
    </Link>
    </label>
        </li>
        <li>
  <label className='text-xl font-semibold text-gray-900 hover:bg-white focus:bg-white hidden'>Wall of tame</label>
        </li>
        <li>
  <label  className='text-xl font-semibold text-gray-900 hover:bg-white focus:bg-white'>
   <Link to={"/blog"}>
      Blog
   </Link>
    </label>
        </li>
    </ul>
  </div>
 
  <div className='wx-[40px]'>
  <div className='mr-[30px]'>
    {
        icon ?
            <RxCross2 onClick={()=>switchIcon(icon)} className='text-3xl cursor-pointer' /> 
        :  
        <FiSearch onClick={()=>switchIcon(icon)} className='text-3xl cursor-pointer lg:block hidden' />
    }
  
  </div>
    <a className="btn bg-[#D82027] border-none hover:bg-[#274396] w-[152px] h-[56px] py-5 px-[37px] text-sm text-white">subscribe</a>
  </div>
</div>
    );
};

export default Navebar;