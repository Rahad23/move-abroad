import ListSection from "./ListSecton";

const WhayChooseUs=()=>{
    return <div className="lg:h-[725px]  bg-[#28314B]">
        <div className="mt-11 inline-block px-9">
       <div className="flex justify-center">
       <div className="bg-[#384461] shadow-md py-1 w-[240px] rounded-xl flex justify-between items-center px-5">
            <span className="p-[4px] bg-[#D82027] rounded-full lg:ml-0 mr-2"></span>
    <p className="text-[#BECFED] font-medium lg:font-semibold">MADE TO YOUR NEEDS</p>
</div>
       </div>
<h1 className="text-4xl mt-4 text-center lg:text-left text-[#FFFFFF] font-medium">Why Choose Us ?</h1>
<div>
    <ListSection />
</div>
        </div>
    </div>
}

export default WhayChooseUs;