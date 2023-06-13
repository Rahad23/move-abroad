import {  BsVectorPen } from "react-icons/bs";
import { GiRoundShield } from "react-icons/gi";
import { BsGrid1X2 } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
const HomeOfferCard=()=>{
    AOS.init(400);
    const offerCard=[
    {
        id: 1,
        icon: <BsVectorPen className="text-2xl text-white" />,
        title: "Branding",
        bgColor:"bg-[#4a69bd]",
        discription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
        id:2,
        icon: <GiRoundShield className="text-2xl text-white" />,
        title: "Strategy",
        bgColor:"bg-[#e58e26]",
        discription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
        id:3,
        icon: <BsGrid1X2 className="text-2xl text-white" />,
        title: "User experience",
        bgColor:"bg-[#38ada9]",
        discription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    }
    ]

    return <div className="grid lg:grid-cols-3 grid-cols-1 lg:px-0 px-5 lg:gap-x-6 gap-y-8">
        {
        offerCard.map(data=>
                <div className="card lg:w-96 w-80 bg-white p-5" style={{boxShadow:"5px 13px 67px 34px rgba(200, 214, 229,.7)"}} key={data.id} data-aos="fade-up">
       {/* <div className="pt-11 grid" style={{gridTemplateColumns:"60px 4fr"}}> */}
        
               <div className="card-body" >  
              <div className="flex items-center">
              <div className={`w-[60px] flex justify-center shadow-md h-[60px] items-center rounded-full ${data.bgColor}`}>
                {
                  data?.icon
                }
           </div>
    <h2 className="card-title ml-2">{data.title}</h2>
              </div>
    <p>{data.discription.length >=70 ? data.discription.slice(0, 70)+"..." : data.discription}</p>
    <div className="card-actions justify-start mt-2">
    {
                data.discription.length>=70 && <h4 className="text-lg text-gray-950   font-medium cursor-pointer items-center gap-x-3">Read more</h4>
  }
    </div>
  </div>
   {/* </div> */}
</div>
            
            )
        }
        
    </div>
}

export default HomeOfferCard;