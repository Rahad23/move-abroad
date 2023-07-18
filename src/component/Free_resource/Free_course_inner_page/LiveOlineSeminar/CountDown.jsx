// import { useEffect, useRef, useState } from "react";

import CalculateCountdown from "./CountDownFunction/CalculateCountdown";

// eslint-disable-next-line react/prop-types
const CountDown=({date_, publishDate, registrationTiming})=>{

  const countDownDateAndTime = CalculateCountdown(publishDate,registrationTiming);
  const {months,days, hours, minutes, seconds} = countDownDateAndTime.countdown;
  console.log(date_, publishDate, registrationTiming)
    return(
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div className="flex flex-col px-2 py-0 rounded-none bg-white text-gray-950 border-t-[1px] border-[#ddd]">
    <span className="countdown font-mono text-3xl lg:text-5xl">
      <span style={{"--value": months}}></span>
    </span>
    month
  </div> 
  <div className="flex flex-col px-2 py-0 rounded-none bg-white text-gray-950 border-t-[1px] border-[#ddd]">
    <span className="countdown font-mono text-3xl lg:text-5xl">
      <span style={{"--value": days}}></span>
    </span>
    days
  </div> 
  <div className="flex flex-col px-2 py-0 rounded-none bg-white text-gray-950 border-t-[1px] border-[#ddd]">
    <span className="countdown font-mono text-3xl lg:text-5xl">
      <span style={{"--value": hours}}></span>
    </span>
    hour
  </div> 
  <div className="flex flex-col px-2 py-0 rounded-none bg-white text-gray-950 border-t-[1px] border-[#ddd] parentElement">
    <span className="countdown font-mono text-3xl lg:text-5xl">
      <span style={{"--value": minutes}}></span>
    </span>
    minutes
  </div>
  <div className="flex flex-col px-2 py-0 rounded-none bg-white text-gray-950 border-t-[1px] border-[#ddd] parentElement">
    <span className="countdown font-mono text-3xl lg:text-5xl">
      <span style={{"--value": seconds}}></span>
    </span>
    sec
  </div>
</div>
    )
}

export default CountDown;