import { AiOutlineArrowRight } from "react-icons/ai";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ChecklistSectionCard=()=>{
    AOS.init();
    const checkListJson=[
        {
            id:1,
            title:"Vast and well-edited content:",
            description: "Get support from someone to follow, track, and help you improve—all online; someone who loves to see you do better and is concerned about your GRE® score. You should be able to speak to and exchange messages with this facilitator.", 
            icon: <AiOutlineArrowRight className="text-4xl text-[#FE0000]" />
        },
        {
            id:2,
            title:"Vast and well-edited content:",
            description: "Get support from someone to follow, track, and help you improve—all online; someone who loves to see you do better and is concerned about your GRE® score. You should be able to speak to and exchange messages with this facilitator.", 
            icon: <AiOutlineArrowRight className="text-4xl text-[#FE0000]" />
        },
        {
            id:3,
            title:"Vast and well-edited content:",
            description: "Get support from someone to follow, track, and help you improve—all online; someone who loves to see you do better and is concerned about your GRE® score. You should be able to speak to and exchange messages with this facilitator.", 
            icon: <AiOutlineArrowRight className="text-4xl text-[#FE0000]" />
        },
        {
            id:4,
            title:"Vast and well-edited content:",
            description: "Get support from someone to follow, track, and help you improve—all online; someone who loves to see you do better and is concerned about your GRE® score. You should be able to speak to and exchange messages with this facilitator.", 
            icon: <AiOutlineArrowRight className="text-4xl text-[#FE0000]" />
        },
        {
            id:5,
            title:"Vast and well-edited content:",
            description: "Get support from someone to follow, track, and help you improve—all online; someone who loves to see you do better and is concerned about your GRE® score. You should be able to speak to and exchange messages with this facilitator.", 
            icon: <AiOutlineArrowRight className="text-4xl text-[#FE0000]" />
        },
        {
            id:6,
            title:"Vast and well-edited content:",
            description: "Get support from someone to follow, track, and help you improve—all online; someone who loves to see you do better and is concerned about your GRE® score. You should be able to speak to and exchange messages with this facilitator.", 
            icon: <AiOutlineArrowRight className="text-4xl text-[#FE0000]" />
        },
        {
            id:7,
            title:"Vast and well-edited content:",
            description: "Get support from someone to follow, track, and help you improve—all online; someone who loves to see you do better and is concerned about your GRE® score. You should be able to speak to and exchange messages with this facilitator.", 
            icon: <AiOutlineArrowRight className="text-4xl text-[#FE0000]" />
        },
        {
            id:8,
            title:"Vast and well-edited content:",
            description: "Get support from someone to follow, track, and help you improve—all online; someone who loves to see you do better and is concerned about your GRE® score. You should be able to speak to and exchange messages with this facilitator.", 
            icon: <AiOutlineArrowRight className="text-4xl text-[#FE0000]" />
        },
    ]

    return(
       <div className="grid gap-y-9 mt-14">
        {
            checkListJson.map(data=>
                <div className="card w-full rounded-none bg-white grid" data-aos="fade-up-left" data-aos-duration="500" style={{gridTemplateColumns:"55px 4fr"}} key={data.id}>
        {data.icon}
         <div className="px-6">
     <h2 className="card-title text-3xl font-medium text-[#7B7B7B]">{data.title}</h2>
    <p className="text-lg text-[#7B7B7B] mt-3">{data.description}</p>
         </div>
</div>
                )
        }
       </div>
    )
}

export default ChecklistSectionCard;