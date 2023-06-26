import thum1 from "../../../../assets/video-thumbnail/thum1.jpg";
import thum2 from "../../../../assets/video-thumbnail/thum2.jpg";
import thum3 from "../../../../assets/video-thumbnail/thum3.jpg";
import thum4 from "../../../../assets/video-thumbnail/thum4.jpg";
import thum5 from "../../../../assets/video-thumbnail/thum5.jpg";
import thum6 from "../../../../assets/video-thumbnail/thum6.jpg";
import thum7 from "../../../../assets/video-thumbnail/thum7.jpg";
import thum8 from "../../../../assets/video-thumbnail/thum8.jpg";
import thum9 from "../../../../assets/video-thumbnail/thum9.jpg";
import thum10 from "../../../../assets/video-thumbnail/thum10.jpg";
import thum12 from "../../../../assets/video-thumbnail/thum12.jpg";
import thum13 from "../../../../assets/video-thumbnail/thum13.jpg";
import thum14 from "../../../../assets/video-thumbnail/thum14.jpg";
const Videos=()=>{
    const videoThum=[
        {
            id: 1,
            title: "F1 Visa, Trump's New Rules – What Happens to GRE, MS Fall 2021 Students?",
            img: thum1
        },
        {
            id: 2,
            title: "F1 Visa, Trump's New Rules – What Happens to GRE, MS Fall 2021 Students?",
            img: thum2
        },
        {
            id: 3,
            title: "F1 Visa, Trump's New Rules – What Happens to GRE, MS Fall 2021 Students?",
            img: thum3
        },
        {
            id: 4,
            title: "F1 Visa, Trump's New Rules – What Happens to GRE, MS Fall 2021 Students?",
            img: thum4
        },
        {
            id: 5,
            title: "F1 Visa, Trump's New Rules – What Happens to GRE, MS Fall 2021 Students?",
            img: thum5
        },
        {
            id: 6,
            title: "F1 Visa, Trump's New Rules – What Happens to GRE, MS Fall 2021 Students?",
            img: thum6
        },
        {
            id: 7,
            title: "F1 Visa, Trump's New Rules – What Happens to GRE, MS Fall 2021 Students?",
            img: thum7
        },
        {
            id: 8,
            title: "F1 Visa, Trump's New Rules – What Happens to GRE, MS Fall 2021 Students?",
            img: thum8
        },
        {
            id: 9,
            title: "F1 Visa, Trump's New Rules – What Happens to GRE, MS Fall 2021 Students?",
            img: thum9
        },
        {
            id: 10,
            title: "F1 Visa, Trump's New Rules – What Happens to GRE, MS Fall 2021 Students?",
            img: thum10
        },
        {
            id: 11,
            title: "F1 Visa, Trump's New Rules – What Happens to GRE, MS Fall 2021 Students?",
            img: thum12
        },
        {
            id: 12,
            title: "F1 Visa, Trump's New Rules – What Happens to GRE, MS Fall 2021 Students?",
            img: thum13
        },
        {
            id: 13,
            title: "F1 Visa, Trump's New Rules – What Happens to GRE, MS Fall 2021 Students?",
            img: thum14
        },
        {
            id: 13,
            title: "F1 Visa, Trump's New Rules – What Happens to GRE, MS Fall 2021 Students?",
            img: thum14
        },
        {
            id: 13,
            title: "F1 Visa, Trump's New Rules – What Happens to GRE, MS Fall 2021 Students?",
            img: thum14
        },
    ]
    return (
        <div className="mt-16 grid grid-cols-3 gap-y-9 px-10 mb-16">
            {
        videoThum.map(data=>
            <div className="card w-[350px] cursor-pointer bg-white shadow-md mx-auto" key={data.id}>
                    <figure><img src={data.img} alt="Shoes" /></figure>
                    <div className="card-body px-4">
                        <h2 className="text-lg font-medium text-gray-950">{data.title}</h2>
                    </div>
            </div>
      )
            }
        </div>
    )
}

export default Videos;