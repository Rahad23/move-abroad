import { BsTelephone } from "react-icons/bs";
import logo from "../../../assets/logo1.png";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { FaPinterestP } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer=()=>{
    return <footer className="bg-[#1E2845]">
  <div className="footer grid lg:grid-cols-4 grid-cols-1 lg:h-[513px] h-[1050px] gap-x-3 p-10 text-white">
  <div className="h-[128px] px-2">
    <span className="text-lg font-semibold">
        <img className="w-32" src={logo} alt="" />
        </span> 
   <p className="leading-7 text-base text-[#B0BDE1]">By connecting students all over the world to the best instructors, we helping individuals reach their goals and pursue their dreams.</p>
   <div className="flex gap-x-5 mt-4">
                <Link className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#D82027] bg-[#3E4C76] "><AiOutlineTwitter className="text-xl" /></Link>
                <Link className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#D82027] bg-[#3E4C76]"><FaPinterestP className="text-xl" /></Link>
                <Link className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#D82027] bg-[#3E4C76]"><FiLinkedin className="text-xl" /></Link>
   </div>
  </div> 
  <div className="h-[128px] flex flex-col pt-5 px-5 lg:mt-0 mt-5">
    <span className="text-lg font-semibold text-[#FFFFFF]">CONTACTS</span> 
    <div className="flex flex-col gap-y-5 mt-4">
        <div className="flex items-center hoverEffect">
        <CiLocationOn className="text-4xl mr-2 setHover" />
        <a className="link link-hover text-md leading-6 font-medium" style={{textDecoration:"none"}}>92 Bowery St., New York, NY 10013, USA</a> 
        </div>
        <div className="flex items-center hoverEffect">
            <HiOutlinePaperAirplane className="text-4xl mr-2 setHover" />
            <a className="link link-hover text-md leading-6 font-medium" style={{textDecoration:"none"}}>moveabroad@gmail.com</a> 
        </div>
        <div className="flex items-center hoverEffect">
            <BsTelephone className="text-4xl mr-2 setHover" />
            <a href="tel:+88 01733676666" className="link link-hover text-md leading-6 font-medium" style={{textDecoration:"none"}}>+88 0173367XXXX</a>
        </div>
    </div>
  </div>
  <div className="h-[128px] flex items-center flex-col pt-5">
    <span className="text-lg font-semibold text-[#FFFFFF]">POPULAR COURSES</span> 
    <div className="flex flex-col gap-y-5 mt-4">
    <a className="link link-hover hover:border-b-[1px] hover:border-[#ffffff]" style={{textDecoration:"none"}}>UI/UX Design</a> 
    <a className="link link-hover hover:border-b-[1px] hover:border-[#ffffff]" style={{textDecoration:"none"}}>WordPress Development</a> 
    <a className="link link-hover hover:border-b-[1px] hover:border-[#ffffff]" style={{textDecoration:"none"}}>Business Strategy</a>
    <a className="link link-hover hover:border-b-[1px] hover:border-[#ffffff]" style={{textDecoration:"none"}}>Software Development</a>
    <a className="link link-hover hover:border-b-[1px] hover:border-[#ffffff]" style={{textDecoration:"none"}}>Business English</a>
    </div>
  </div>
  <div className="h-[128px] flex items-center flex-col pt-5 mt-7 lg:mt-0">
    <span className="text-lg font-semibold text-[#FFFFFF]">LATEST NEWS</span> 
    <div className="flex flex-col gap-y-5 mt-4">
    <a className="link link-hover hover:border-b-[1px] hover:border-[#ffffff]" style={{textDecoration:"none"}}>Terms of use</a> 
    <a className="link link-hover hover:border-b-[1px] hover:border-[#ffffff]" style={{textDecoration:"none"}}>Privacy policy</a> 
    <a className="link link-hover hover:border-b-[1px] hover:border-[#ffffff]" style={{textDecoration:"none"}}>Cookie policy</a>
    </div>
  </div>
  </div>
  <div className="lg:px-10 px-2">
    <hr />
   <div className="flex justify-between lg:items-start items-center mt-3 lg:p-7 p-2">
   <div className="flex lg:gap-x-3 gap-x-2 items-center">
        <h5 className="text-white text-base">Terms of use</h5>
        <span className="h-[20px] w-[2px] bg-white"></span>
        <h5 className="text-white text-base">Privacy Environment Policy</h5>
   </div>
   <div>
        <p className="text-[#A9B7DB] text-base">Copyright © 2023 Unicoach by It Bangla LTD. All Rights Reserved.
</p>
   </div>
   </div>
  </div>
</footer>
}

export default Footer;