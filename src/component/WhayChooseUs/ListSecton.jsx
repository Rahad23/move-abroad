import { BsPlayCircle, BsRocketTakeoff } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";
import { FaGraduationCap } from "react-icons/fa";
import { RiUserSettingsLine } from "react-icons/ri";
import { IoIosTrendingUp } from "react-icons/io";
import "./ListSection.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
const ListSection=()=>{
    AOS.init(200);
    const listData=[
        {
            _id: 1,
            title: "Stay Motivated",
            description: "Ou mission is to make language learning accessible to everyone",
            icon: <TbTargetArrow className="text-4xl text-white" />,
        },
        {
            _id: 2,
            title: "Stay Motivated",
            description: "Ou mission is to make language learning accessible to everyone",
            icon: <BsPlayCircle className="text-4xl text-white" />,
        },
        {
            _id: 3,
            title: "Stay Motivated",
            description: "Ou mission is to make language learning accessible to everyone",
            icon: <FaGraduationCap className="text-4xl text-white" />,
        },
        {
            _id: 4,
            title: "Stay Motivated",
            description: "Ou mission is to make language learning accessible to everyone",
            icon: <RiUserSettingsLine className="text-4xl text-white" />,
        },
        {
            _id: 5,
            title: "Stay Motivated",
            description: "Ou mission is to make language learning accessible to everyone",
            icon: <BsRocketTakeoff className="text-4xl text-white" />,
        },
        {
            _id: 6,
            title: "Stay Motivated",
            description: "Ou mission is to make language learning accessible to everyone",
            icon: <IoIosTrendingUp className="text-4xl text-white" />,
        }
    ]

    return <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-5 lg:mt-10 mt-3">
        {
            listData.map(data=>
                <div className="card lg:w-96 w-80 rounded-none py-14 px-3 hoverEffect cursor-pointer" data-aos="fade-up"
                data-aos-duration="2000" key={data._id}>

                <div className="grid px-1 justify-center items-center flex-row" style={{gridTemplateColumns:"1fr 4fr"}}>
                    <div className="flex justify-center items-center bg-[#3E465D] w-14 h-14 rounded-full lg:mr-0 mr-4 setHoverEffect">
                        {
                            data.icon
                        }
                    </div>
                  <div className="text-white">
                  <h2 className="card-title">{data.title}</h2>
                  <p className="mt-2">{data.description}</p>
                  </div>
                </div>
              </div>
            )
        }
    </div>
}

export default ListSection;