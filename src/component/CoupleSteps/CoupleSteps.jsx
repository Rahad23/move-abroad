import CoupleCard from "./CoupleCard";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
const CoupleSteps=()=>{
    AOS.init(400);
    return <div className="lg:mt-20 mt-28 lg:px-12 px-3" data-aos="zoom-in" data-aos-duration="1000">
        <div className="flex justify-center">
        <div className="bg-[#ffffff] shadow-md py-1 w-[250px] rounded-xl flex justify-between items-center px-5">
            <span className="p-[4px] bg-[#D82027] rounded-full"></span>
    <p className="text-[#52637C] font-semibold uppercase">MAKE YOUR FIRST STEPS</p>
</div>
        </div>
        <div>
            <h1 className="text-4xl font-medium text-center lg:mt-3 mt-7 text-[#1B2336]">Start your journey with couple of steps</h1>
        </div>
        <div className="flex justify-center lg:h-[500px] h-full w-full relative px-4 lg:px-0 mx-auto">
           <CoupleCard />
        </div>
        <div>
        </div>
    </div>
}

export default CoupleSteps;