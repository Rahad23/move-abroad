// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import sliderImg1 from "../../assets/web-img/home5_slider_3.png";
import sliderImg2 from "../../assets/web-img/home5_slider_4.png";
import sliderImg3 from "../../assets/web-img/home5_slider_5.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import './ScrollSlider.css';
import { useRef, useState } from 'react';
//set swiperSlide change speed
const swiperOptions = {
    speed: 2000, // Adjust the speed value as needed
    // Other Swiper options...
  };
// import required modules
import { EffectCoverflow, Mousewheel, Pagination } from "swiper";
const ScrollSlider=()=>{
    const swiperRef = useRef(null);
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const carouselData=[
        {
            _id: 1,
            title: "believe in lifelong learning and Unicoach is a great place to learn from experts.",
            description:"I work in project management and joined Unicoach because I get great courses for less. The instructors are fantastic, interesting, and helpful. I plan to use for a long time!",
            img: sliderImg1,
            name: "Anna Ingrosso",
            occupation: "UI/UX Designer"

        },
        {
            _id: 2,
            title: "believe in lifelong learning and Unicoach is a great place to learn from experts.",
            description:"I work in project management and joined Unicoach because I get great courses for less. The instructors are fantastic, interesting, and helpful. I plan to use for a long time!",
            img: sliderImg2,
            name: "Nick Davis",
            occupation: "Software Engineer"

        },
        {
            _id: 3,
            title: "believe in lifelong learning and Unicoach is a great place to learn from experts.",
            description:"I work in project management and joined Unicoach because I get great courses for less. The instructors are fantastic, interesting, and helpful. I plan to use for a long time!",
            img: sliderImg3,
            name: "Tina Johanson",
            occupation: "UI Designer"

        },
        {
            _id: 3,
            title: "believe in lifelong learning and Unicoach is a great place to learn from experts.",
            description:"I work in project management and joined Unicoach because I get great courses for less. The instructors are fantastic, interesting, and helpful. I plan to use for a long time!",
            img: sliderImg3,
            name: "Tina Johanson",
            occupation: "UI Designer"

        },
        {
            _id: 3,
            title: "believe in lifelong learning and Unicoach is a great place to learn from experts.",
            description:"I work in project management and joined Unicoach because I get great courses for less. The instructors are fantastic, interesting, and helpful. I plan to use for a long time!",
            img: sliderImg3,
            name: "Tina Johanson",
            occupation: "UI Designer"

        },
        {
            _id: 3,
            title: "believe in lifelong learning and Unicoach is a great place to learn from experts.",
            description:"I work in project management and joined Unicoach because I get great courses for less. The instructors are fantastic, interesting, and helpful. I plan to use for a long time!",
            img: sliderImg3,
            name: "Tina Johanson",
            occupation: "UI Designer"

        }
    ]

    return <div className="mt-10">
         <Swiper
         {...swiperOptions}
        ref={swiperRef}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 20,
          stretch: -90,
          depth: 500,
          modifier: 1,
          slideShadows: false,
        }}
        onSlideChange={(swiper) => {
            setActiveSlideIndex(swiper.realIndex);
          }}
        loop={true}
        pagination={false}
        modules={[EffectCoverflow, Pagination, Mousewheel]}
        className="mySwiper"
        mousewheel={true}
      >
        {
            carouselData.map((data, index)=>
            <SwiperSlide key={data._id} className={index === activeSlideIndex ? "fade-in active":"fade-in"} style={index === activeSlideIndex ? {boxShadow: "1px 2px 10px rgba(12, 70, 117, .5)"} : {boxShadow:"none", opacity:".5"}}>
            <div className="lg:h-full  px-10 py-9 mt-14 relative">
                <span className="w-20 rounded-full bg-[#D82027] lg:mt-[295px] mt-[452px] ml-[31%] lg:ml-[37%] h-[8px] absolute"></span>
                  <h4 className="text-2xl left-9 text-gray-900 font-medium mb-5">{data.title}</h4>
                    <p className="text-xl font-normal leading-9 text-[#5F718A]">{data.description}</p>
                    <div className="mt-5 flex items-center">
                        <img className="w-16" src={data.img} alt="" />
                        <div className="ml-3">
                            <h1 className="text-xl font-semibold">{data.name}</h1>
                            <h2 className="text-md font-medium">{data.occupation}</h2>
                        </div>
                    </div>
                  </div>
        </SwiperSlide>
                )
        }
      
      </Swiper>
    </div>
}

export default ScrollSlider;