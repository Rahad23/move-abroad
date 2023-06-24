import cardImg from "../../../assets/web-img/card2l_4.jpg";
import "./Free_course_inner_page.css";
const E_Books=()=>{
    const booksData=[
        {
            id:1,
            img: cardImg,
            title: "GRE Preparation for Beginners: Urmika's Study Plan to Score 330",
            imgHover:"Get the study plan of a 330 scorer"
        },
        {
            id:2,
            img: cardImg,
            title: "GRE Preparation for Beginners: Urmika's Study Plan to Score 330",
            imgHover:"Get the study plan of a 330 scorer"
        },
        {
            id:3,
            img: cardImg,
            title: "GRE Preparation for Beginners: Urmika's Study Plan to Score 330",
            imgHover:"Get the study plan of a 330 scorer"
        },
        {
            id:4,
            img: cardImg,
            title: "GRE Preparation for Beginners: Urmika's Study Plan to Score 330",
            imgHover:"Get the study plan of a 330 scorer"
        },
        {
            id:5,
            img: cardImg,
            title: "GRE Preparation for Beginners: Urmika's Study Plan to Score 330",
            imgHover:"Get the study plan of a 330 scorer"
        },
        {
            id:6,
            img: cardImg,
            title: "GRE Preparation for Beginners: Urmika's Study Plan to Score 330",
            imgHover:"Get the study plan of a 330 scorer"
        },
        {
            id:7,
            img: cardImg,
            title: "GRE Preparation for Beginners: Urmika's Study Plan to Score 330",
            imgHover:"Get the study plan of a 330 scorer"
        },
        {
            id:8,
            img: cardImg,
            title: "GRE Preparation for Beginners: Urmika's Study Plan to Score 330",
            imgHover:"Get the study plan of a 330 scorer"
        },
        {
            id:9,
            img: cardImg,
            title: "GRE Preparation for Beginners: Urmika's Study Plan to Score 330",
            imgHover:"Get the study plan of a 330 scorer"
        },
        {
            id:10,
            img: cardImg,
            title: "GRE Preparation for Beginners: Urmika's Study Plan to Score 330",
            imgHover:"Get the study plan of a 330 scorer"
        },
        {
            id:11,
            img: cardImg,
            title: "GRE Preparation for Beginners: Urmika's Study Plan to Score 330",
            imgHover:"Get the study plan of a 330 scorer"
        },
        {
            id:12,
            img: cardImg,
            title: "GRE Preparation for Beginners: Urmika's Study Plan to Score 330",
            imgHover:"Get the study plan of a 330 scorer"
        },
        {
            id:13,
            img: cardImg,
            title: "GRE Preparation for Beginners: Urmika's Study Plan to Score 330",
            imgHover:"Get the study plan of a 330 scorer"
        },
        {
            id:14,
            img: cardImg,
            title: "GRE Preparation for Beginners: Urmika's Study Plan to Score 330",
            imgHover:"Get the study plan of a 330 scorer"
        },
        {
            id:15,
            img: cardImg,
            title: "GRE Preparation for Beginners: Urmika's Study Plan to Score 330",
            imgHover:"Get the study plan of a 330 scorer"
        },
        {
            id:16,
            img: cardImg,
            title: "GRE Preparation for Beginners: Urmika's Study Plan to Score 330",
            imgHover:"Get the study plan of a 330 scorer"
        },
        {
            id:17,
            img: cardImg,
            title: "GRE Preparation for Beginners: Urmika's Study Plan to Score 330",
            imgHover:"Get the study plan of a 330 scorer"
        },
        {
            id:18,
            img: cardImg,
            title: "GRE Preparation for Beginners: Urmika's Study Plan to Score 330",
            imgHover:"Get the study plan of a 330 scorer"
        },
        {
            id:19,
            img: cardImg,
            title: "GRE Preparation for Beginners: Urmika's Study Plan to Score 330",
            imgHover:"Get the study plan of a 330 scorer"
        },
        {
            id:20,
            img: cardImg,
            title: "GRE Preparation for Beginners: Urmika's Study Plan to Score 330",
            imgHover:"Get the study plan of a 330 scorer"
        },
        {
            id:21,
            img: cardImg,
            title: "GRE Preparation for Beginners: Urmika's Study Plan to Score 330",
            imgHover:"Get the study plan of a 330 scorer"
        },
        {
            id:22,
            img: cardImg,
            title: "GRE Preparation for Beginners: Urmika's Study Plan to Score 330",
            imgHover:"Get the study plan of a 330 scorer"
        },
        {
            id:23,
            img: cardImg,
            title: "GRE Preparation for Beginners: Urmika's Study Plan to Score 330",
            imgHover:"Get the study plan of a 330 scorer"
        },
        {
            id:24,
            img: cardImg,
            title: "GRE Preparation for Beginners: Urmika's Study Plan to Score 330",
            imgHover:"Get the study plan of a 330 scorer"
        },
        {
            id:25,
            img: cardImg,
            title: "GRE Preparation for Beginners: Urmika's Study Plan to Score 330",
            imgHover:"Get the study plan of a 330 scorer"
        },
        {
            id:26,
            img: cardImg,
            title: "GRE Preparation for Beginners: Urmika's Study Plan to Score 330",
            imgHover:"Get the study plan of a 330 scorer"
        },
        {
            id:27,
            img: cardImg,
            title: "GRE Preparation for Beginners: Urmika's Study Plan to Score 330",
            imgHover:"Get the study plan of a 330 scorer"
        },
        {
            id:28,
            img: cardImg,
            title: "GRE Preparation for Beginners: Urmika's Study Plan to Score 330",
            imgHover:"Get the study plan of a 330 scorer"
        },
        {
            id:29,
            img: cardImg,
            title: "GRE Preparation for Beginners: Urmika's Study Plan to Score 330",
            imgHover:"Get the study plan of a 330 scorer"
        },
        {
            id:30,
            img: cardImg,
            title: "GRE Preparation for Beginners: Urmika's Study Plan to Score 330",
            imgHover:"Get the study plan of a 330 scorer"
        },
    ]
    return (
        <div className="grid grid-cols-3 gap-y-7 my-14">
            {
                booksData.map(data=>
                    <div className="card w-[350px] rounded-none bg-white shadow-xl mx-auto cursor-pointer" key={data.id}>
                   <div className="container">
                   <figure><img className="image" src={data.img} alt="Shoes" /></figure>
                    <div className="middle w-full">
                        <h1 className="text text-xl font-semibold">Get the study plan of a 330 scorer</h1>
                    </div>
                   </div>
                    <div className="card-body px-3 py-6">
                      <h2 className="card-title text-gray-950 text-lg leading-7 font-serif">
                       {data.title}
                      </h2>
                      <div className="card-actions justify-end mt-2">
                        <button className="bg-[#ffffff] text-[13px] border-[2px] border-[#D82027] hover:bg-[#D82027] hover:text-white text-sm rounded-none w- h-[36px] w-[103px] uppercase">Know more</button>
                      </div>
                    </div>
                  </div> 
                    )
            }
        </div>
    )
}

export default E_Books;