import { Link, useLocation } from "react-router-dom";
import { BsLaptop } from "react-icons/bs";
import { FaBook } from "react-icons/fa";
import { AiFillFolderOpen, AiFillYoutube } from "react-icons/ai";


const Free_resource_navebar=()=>{
    // const [url, setUrl]=useState("")
    // console.log(url)
    const currentUrl = useLocation();
    const url = currentUrl.pathname.split("/")[2];
    const usePath = url ? url : currentUrl.pathname.split("/")[1]="live_online_seminar";
   
    const naveData=[
        {
            id: 1,
            text: "Live online SEMINAR",
            icon: <BsLaptop className="text-lg mr-2" />,
            link: "live_online_seminar"
        },
        {
            id: 2,
            text: "eBOOKS",
            icon:  <FaBook className="text-lg mr-2" />,
            link: "e_books"
        },
        {
            id: 3,
            text: "GRE QUIZ",
            icon: <AiFillFolderOpen className="text-lg mr-2" />,
            link: "gre_quiz"
        },
        {
            id: 4,
            text: "VIDEOS",
            icon: <AiFillYoutube className="text-lg mr-2" />,
            link: "videos"
        },
    ]

    return (
        <div className="px-5 bg-[#535655] py-1">
            <ul className="flex justify-center items-center gap-x-1">
              {
                naveData.map(data=>
                    <Link to={`${data.link}`} key={data.id}><li className={usePath === data.link ? "flex items-center justify-center w-[294px] h-[50px] bg-[#ED1C20] rounded-sm text-white":"flex items-center justify-center w-[294px] h-[50px] bg-[#ffffff] rounded-sm"}>
                    {data.icon}
                    <span className={usePath === data.link ? "text-lg text-white":"text-lg text-gray-950"}>{data.text}</span>
                </li>
                </Link>
                )
              }
            </ul>
        </div>
    )
}

export default Free_resource_navebar;