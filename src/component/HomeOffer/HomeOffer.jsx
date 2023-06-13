import Advertisement from "../Advertisement/Advertisement";
import WhayChooseUs from "../WhayChooseUs/WhayChooseUs";
import HomeOfferCard from "./HomeOfferCard";

// import { fadeIn } from 'react-animations'
const HomeOffer=()=>{
    return <div className="my-5 flex justify-center items-center flex-col">
<div className="bg-[#ffffff] shadow-md py-1 w-[250px] rounded-xl flex justify-between items-center px-5">
            <span className="p-[4px] bg-[#D82027] rounded-full"></span>
            <p className="text-[#52637C] font-semibold">MADE TO YOUR NEEDS</p>
</div>
<h1 className='lg:text-6xl text-3xl font-medium text-[#1B2336] mt-5'>What We Offer You</h1>
<div className="mt-12">
<HomeOfferCard />
</div>
<div className="w-full mt-20">
    <WhayChooseUs />
    <Advertisement />
</div>

    </div>
}

export default HomeOffer;