// import { useEffect, useRef, useState } from "react";

// eslint-disable-next-line react/prop-types
const CountDown=({date})=>{
  // eslint-disable-next-line react/prop-types
  const {months, days, hours, minutes, seconds} = date;
  // eslint-disable-next-line react/prop-types
  // const getMonth = parseInt(date.split('-')[0])*30;

  // const duration = getMonth;
  // const refInstance = useRef(null);
  // const [counter, setCountdown] = useState("00:00:00");
  // console.log(counter)
  // const splitDate = counter.split(":");
  // const days = splitDate[0];
  // const hours = splitDate[1];
  // const minute = splitDate[2];
  // const seconds = splitDate[3];
  // // const month
  // const getCounter = (end) => {
  //   const all = Date.parse(end) - Date.parse(new Date());

    
  //   const months = Math.floor(all / (1000 * 60 * 60 * 24 * 30));
  //   const days = Math.floor(all / (1000 * 60 * 60 * 24)) % 30;
  //   const hours = Math.floor(all / (1000 * 60 * 60)) % 24;
  //   const minutes = Math.floor(all / (1000 * 60)) % 60;
  //   const seconds = Math.floor(all / 1000) % 60;

  //   return {
  //     all,
  //     months,
  //     days,
  //     hours,
  //     minutes,
  //     seconds,
  //   };
  // };
  

  // const initCounter = (end) => {
  //   const { all, days, hours, minutes, seconds } = getCounter(end);
  //   if (all >= 0) {
  //     let formattedCounter = "";
  //     if (days > 0) {
  //       formattedCounter += `${days}:${days > 1 ? "" : ""}`;
  //     }
  //     formattedCounter +=
  //       (hours > 9 ? hours : "0" + hours) +
  //       ":" +
  //       (minutes > 9 ? minutes : "0" + minutes) +
  //       ":" +
  //       (seconds > 9 ? seconds : "0" + seconds);
  //     setCountdown(formattedCounter);
  //   }
  // };

  // const reset = (end) => {
  //   setCountdown("00:00:00");
  //   if (refInstance.current) clearInterval(refInstance.current);
  //   const id = setInterval(() => {
  //     initCounter(end);
  //   }, 1000);
  //   refInstance.current = id;
  // };

  // const calculateEndTime = () => {
  //   const endTime = new Date();
  //   endTime.setDate(endTime.getDate() + duration);
  //   return endTime;
  // };

  // useEffect(() => {
  //   const endTime = calculateEndTime();
  //   reset(endTime);
  // }, [duration]);

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
      <span style={{"--value":days}}></span>
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