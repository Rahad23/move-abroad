import BannerText from "./BannerText";
import './Banner.css';
const Banner=()=>{
    return <div className="bgImg h-[800px] grid lg:grid-cols-2 grid-cols-1 items-center">
       <div className="lg:ml-[80px] ml-0">
            <BannerText />
       </div>
    </div>
}

export default Banner;