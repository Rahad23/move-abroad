import axios from "axios";
import CountDown from "./CountDown";
import { useState } from "react";
const LiveOnlineSeminarCard=()=>{
const [liveSeminar, setLiveSeminar]=useState([]);

  axios.get(`${import.meta.env.VITE_REACT_APP_URL}/liveOnlineSeminar`)
  .then(response => {
    console.log(response.data);
    setLiveSeminar(response.data);
})
.catch(error => {
  console.error(error);
});
    return (
        <div className="px-8">
          {
            liveSeminar.map(data=>
              <div className="card w-full bg-white shadow-lg text-gray-950 mt-12 pb-16 mx-auto" key={data?._id}>
        <div className="px-8 lg:py-3 mt-5">
        <h1 className="text-lg lg:text-2xl font-medium">MOVE<span className="text-[#FE0000]">ABROAD</span> Dream University Series: {data?.universityName}</h1>
        </div>
    <div className="card-body lg:grid flex flex-col lg:flex-row grid-cols-2 pb-5">
        <figure><img src={`http://${data?.imagePath}`} alt="" /></figure>
      <div className="text-gray-950 flex justify-center">
        <div className="text-center">
            <h2 className="lg:text-2xl text-lg font-semibold text-[#FE0000]">{data?.date}</h2>
            <h2 className="lg:text-3xl text-lg font-semibold text-[#FE0000]">{data?.classStartTime}</h2>
            <h3 className="mt-1 text-lg lg:text-xl font-semibold text-[#808280]">Webinar will start in:</h3>
            <div className="mt-2 flex justify-center items-center">
                <CountDown  date={data?.countdown} />
            </div>
            <div className="mt-2">
                <button className="btn bg-[#FE0000] text-lg lg:text-xl text-white border-none rounded-none w-[226px] h-[50px] lg:h-[58px] hover:bg-[#fc0c0c] capitalize">Register now</button>
                <div className="bg-[#EDEBED] w-[90%] mx-auto px-2 py-4 mt-2">
                  <p className="text-black text-left lg:text-base text-sm font-serif">You will be connected to audio using your computer's microphone and speakers (VoIP). A headset is recommended.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
      <div className="px-5">
      <p className="text-base font-serif leading-7">Embark on a journey to your dream university, Columbia University, in our exclusive seminar. Gain insights, tips, and success stories to enhance your chances of gaining admission to this prestigious institution.</p>
      </div>
  </div>
              )
          }
        
        </div>
        
    )
}

export default LiveOnlineSeminarCard;