import flag from "../../assets/web-img/home5_5.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
const Advertisement=()=>{
    AOS.init(400);
    return <div className="lg:px-12 px-5">
        <div className="lg:h-[274px] bg-white lg:-mt-24 mt-10 rounded-2xl mx-auto lg:grid p-6 lg:border-r-4 border-r-0 flex flex-col lg:flex-row h-full border-[#274396] lg:shadow-lg shadow-xl" style={{gridTemplateColumns:"4fr 2fr"}} >
        <div className="lg:py-10 py-3 lg:px-7 px-2">
            <h1 className="text-3xl text-gray-950 font-medium">The Best New Way to Learn a Language</h1>
            <p className="mt-3 leading-7 text-xl">Learning with us is fun and addictive. Earn points for correct answers, race against the clock, and level up. Our bite-sized lessons are effective, and we have proof that it works.</p>
        </div>
        <div className="flex items-center lg:flex-row flex-col">
            <img data-aos="zoom-in" data-aos-duration="1000" src={flag} alt="" />
            <div className="lg:-rotate-90 rotate-0 mt-3 lg:mt-0 text-center">
                <h1 className="text-gray-950 font-medium text-2xl">Arnold Black</h1>
                <h4 className="text-[#667E9F] font-medium text-lg">Unicoach's Founder</h4>
            </div>
        </div>
</div>
    </div>
}

export default Advertisement;