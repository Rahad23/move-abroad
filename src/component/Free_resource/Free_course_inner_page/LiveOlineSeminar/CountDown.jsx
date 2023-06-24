const CountDown=()=>{
    return(
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div className="flex flex-col px-2 py-0 rounded-none bg-white text-gray-950 border-t-[1px] border-[#ddd]">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":15}}></span>
    </span>
    days
  </div> 
  <div className="flex flex-col px-2 py-0 rounded-none bg-white text-gray-950 border-t-[1px] border-[#ddd]">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":10}}></span>
    </span>
    hours
  </div> 
  <div className="flex flex-col px-2 py-0 rounded-none bg-white text-gray-950 border-t-[1px] border-[#ddd]">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":24}}></span>
    </span>
    min
  </div> 
  <div className="flex flex-col px-2 py-0 rounded-none bg-white text-gray-950 border-t-[1px] border-[#ddd]">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":20}}></span>
    </span>
    sec
  </div>
</div>
    )
}

export default CountDown;