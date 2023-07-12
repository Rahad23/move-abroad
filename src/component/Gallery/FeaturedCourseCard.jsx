import { AiOutlineUser } from "react-icons/ai";
import img from "../../assets/gallery/uni1.jpg";
import img2 from "../../assets/gallery/uni2.jpg";
import img3 from "../../assets/gallery/uni3.jpg";
import img4 from "../../assets/gallery/uni4.jpg";
import img5 from "../../assets/gallery/uni5.jpg";
import img6 from "../../assets/gallery/uni6.jpg";
import img7 from "../../assets/gallery/uni7.jpg";
import img8 from "../../assets/gallery/uni8.jpg";
import { CiClock2 } from "react-icons/ci";
import { FaUniversity } from "react-icons/fa";
import { parse } from "postcss";
const FeaturedCourseCard=()=>{
    const feauturedCourse=[
        {
            id:1,
            title: "Data Competitive Strategy law & organization",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            name: "oxford",
            img: img,
            price: 75,
            date: "27/12/23",
            students: 1
        },
        {
            id:2,
            title: "Data Competitive Strategy law & organization",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            name: "oxford",
            img: img2,
            price: 75,
            date: "27/12/23",
            students: 1
        },
        {
            id:3,
            title: "Data Competitive Strategy law & organization",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            name: "oxford",
            img: img3,
            price: 75,
            date: "27/12/23",
            students: 1
        },
        {
            id:4,
            title: "Data Competitive Strategy law & organization",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            name: "oxford",
            img: img4,
            price: 75,
            date: "27/12/23",
            students: 1
        },
        {
            id:5,
            title: "Data Competitive Strategy law & organization",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            name: "oxford",
            img: img5,
            price: 75,
            date: "27/12/23",
            students: 1
        },
        {
            id:6,
            title: "Data Competitive Strategy law & organization",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            name: "oxford",
            img: img6,
            price: 75,
            date: "27/12/23",
            students: 1
        },
        {
            id:7,
            title: "Data Competitive Strategy law & organization",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            name: "oxford",
            img: img7,
            price: 75,
            date: "27/12/23",
            students: 1
        },
        {
            id:8,
            title: "Data Competitive Strategy law & organization",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            name: "oxford",
            img: img8,
            price: 75,
            date: "27/12/23",
            students: 1
        },
    ]
    return <div className="lg:px-7 px-4 mb-9 bg-white">
        <div className="mt-20">
            <div className="flex justify-between lg:flex-row flex-col items-center">
                <h1 className="text-3xl font-medium text-gray-950 uppercase">University list</h1>
                <ul className='text-gray-950 flex lg:gap-x-8 gap-x-4 text-base mt-4 lg:mt-0'>
                        <li className="cursor-pointer hover:text-black">All Courses</li>
                        <li className="cursor-pointer hover:text-black">Design</li>
                        <li className="cursor-pointer hover:text-black">Marketing</li>
                        <li className="cursor-pointer hover:text-black">Development</li>
                    </ul>
            </div>
        <div className="grid lg:grid-cols-4 grid-cols-1 mt-10 gap-y-7">
            {
            feauturedCourse.map(data=>
            <div className="card w-64 bg-base-100 shadow-xl rounded-lg cursor-pointer mx-auto bg-white" key={data.id}>
            <figure className="">
              <img src={data.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body px-3 items-center text-center -mt-20 py-4">
                <div className="bg-white shadow-sm w-full py-2 px-2 rounded-md">
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <span className="bg-green-600 p-2 rounded-full mr-1">
                                <FaUniversity className="text-xl text-white" />
                            </span>
                            <span className="text-base font-medium text-gray-950">{data.name}</span>
                        </div>
                        <div>
                            <div className="bg-green-700 p-2 h-12 w-12 rounded-full flex items-center justify-center -mt-7">
                              <span className="text-xl font-medium text-white">${data.price}</span>
                            </div>
                        </div>
                    </div>
                 <h2 className="card-title text-base text-left mt-2">{data.title}</h2>
                </div>
                <div className="text-left">
                    {data.description?.replace(/<[^>]+>/g, "").length > 40 ?  data.description?.replace(/<[^>]+>/g, "").slice(0, 50)+"..." : data.description?.replace(/<[^>]+>/g, "")}
                    <div className="mt-3 flex justify-between items-center">
                        <div className="flex items-center justify-center">
                            <CiClock2 className="text-xl text-green-500 mr-1" />
                            <span className="text-sm">{data.date}</span>
                        </div>
                        <div className="flex items-center justify-center">
                            <AiOutlineUser className="text-xl text-green-500 mr-1" />
                            <span className="text-sm">{data.students} Students</span>
                        </div>
                    </div>
                </div>
</div>
          </div>
            )
            }
        </div>
        </div>
    </div>
}

export default FeaturedCourseCard;