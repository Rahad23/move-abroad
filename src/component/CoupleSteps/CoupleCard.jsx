import "./CoupleCard.css";
import { AiOutlineSearch } from "react-icons/ai";
import { TbBrain } from "react-icons/tb";
import { GoRocket } from "react-icons/go";
import graphImg from "../../assets/web-img/graph.png";
const CoupleCard=()=>{

  const cupoleData=[
    {
      id: 11,
      icon:  <AiOutlineSearch className="text-4xl" />,
      title: "Book Free Appointment",
      description: "If a dog chews shoes whose shoes does he choose?"
    },
    {
      id: 22,
      icon: <TbBrain className="text-4xl" />,
      title: "Evaluate Your Profile",
      description: "If a dog chews shoes whose shoes does he choose?"
    },
    {
      id: 33,
      icon: <GoRocket className="text-4xl" />,
      title: "Schedule First Lesson",
      description: "If a dog chews shoes whose shoes does he choose?"
    }
  ]

    return <div className="mt-8 grid lg:grid-cols-3 grid-cols-1 lg:gap-x-8 gap-x-0 bg-white justify-center items-center">

      <img className="absolute lg:block hidden top-[72px] right-[54%]" src={graphImg} alt="" />
      <img className="absolute lg:block hidden top-[84%] right-[24%] imgRotate" src={graphImg} alt="" />
  {
    cupoleData.map(data=>

        <div className="card w-80 bg-white shadow-xl cursor-pointer mt-8" key={data.id} >
     <figure className="px-10 pt-10">
     <div className="w-20 flex justify-center">
      {data.icon}
     </div>
 
     </figure>
     <div className="card-body items-center text-center pt-4 px-14">
       <h2 className="card-title text-2xl text-center">{data.title}</h2>
       <p className="text-[#4D6B81] mt-1 text-md font-semibold">{data.description}</p>
       <div>
         <span className="uppercase text-sm font-medium border-animate text-[#274396] cursor-pointer">learn more</span>
       </div>
     </div>
   </div>
     
   
  )}  
    </div>
}

export default CoupleCard;