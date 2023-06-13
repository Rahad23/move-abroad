
import Banner from "../Bannar/Banner"
import CoupleSteps from "../CoupleSteps/CoupleSteps";
import HomeOffer from "../HomeOffer/HomeOffer";
import ScrollSlider from "../ScrollSlider/ScrollSlider";

const Home=()=>{
    return <div>
        <Banner />
        <div className="mt-28" data-aos="fade-up" data-aos-delay="300">
            <HomeOffer />
        </div>
        <div>
            <CoupleSteps />
        </div>
        <div>
            <ScrollSlider />
        </div>
    </div>
}

export default Home;