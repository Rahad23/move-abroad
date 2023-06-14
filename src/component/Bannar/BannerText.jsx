import { AiOutlineMail } from "react-icons/ai";
import AOS from 'aos';
import 'aos/dist/aos.css';
const BannerText=()=>{
    AOS.init(400);
    return  <div className="text-center lg:text-left lg:px-0 px-6" data-aos="zoom-in">
    <h1 className="capitalize font-medium lg:text-6xl text-3xl">Learn quality english <span className="text-[#274396]">online</span></h1>
    <p  className="mt-5">Unicoach is an effective service for learning languages. Try before you buy! Book a free 30-minute trail lesson</p>
    <div>
    <div className="flex items-center mt-7 justify-center lg:justify-start mx-auto">
    <div className="flex items-center">
    <input type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs relative pl-9 h-12 bg-white" required />
    <button className="btn btn-active bg-[#274396] ml-1 lg:ml-3 hover:bg-[#D82027] border-none ">Book now</button>
    </div>
    <button className="absolute p-2 lg:mr-[312px] mr-[290px]">
    <AiOutlineMail className="text-2xl" />
    </button>
    </div>
    
    </div>
</div>
}

export default BannerText;