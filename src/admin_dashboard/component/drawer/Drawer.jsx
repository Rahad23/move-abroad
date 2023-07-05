import { Link } from "react-router-dom";
import "./drawerCss/Drawer.css";
import { FaBook } from "react-icons/fa";
import student from "../../../assets/dashboardImg/graduate.png";
const Drawer =()=>{
    return(
        <div className="drawer shadow-none border-gradient px-2">
  <div className="drawer-side">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>
    <ul className="menu p-4 w-72 h-full bg-[#ffffff] text-base-content">
      {/* Sidebar content here */}
      <li><Link to={"/admin/adminEbooks"} className="hover:bg-gray-50 focus:text-gray-950 font-medium text-base text-gray-950 justify-stretch gap-x-10">E_Books<FaBook /></Link></li>
      <li><Link className="hover:bg-gray-50 focus:text-gray-950 font-medium text-base text-gray-950 justify-stretch gap-x-10">Students <img className="w-5" src={student} alt="" /></Link></li>
      
    </ul>
  </div>
</div>
    )
}

export default Drawer;