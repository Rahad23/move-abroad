import Quiz from "./Quiz";

const Gre_Quiz=()=>{
    return (
        <div className="mt-6 lg:px-36 px-6 mb-10">
            <p className="lg:text-lg text-base font-light text-[#74777B]">Pick a section and the type of question you would like to try to get started. (It’s as simple as that.) You can even get your doubts cleared or view expert explanations for all answers. Good luck, soldier!</p>
    <div className="flex items-center flex-col lg:flex-row justify-center mt-10 gap-x-10">
        <div className="form-control w-full lg:w-[17%]">
        <label className="label">
            <span className="label-text text-lg text-[#74777B] text-left">Difficulty Level</span>
        </label>
        <select className="select select-bordered bg-white">
            <option disabled selected>Pick one</option>
            <option>Star Wars</option>
            <option>Harry Potter</option>
            <option>Lord of the Rings</option>
            <option>Planet of the Apes</option>
            <option>Star Trek</option>
        </select>
</div>
<div className="form-control w-full lg:w-[35%]">
  <label className="label">
    <span className="label-text text-lg text-[#74777B]">Section and Topic</span>
  </label>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5 lg:gap-y-0 items-center justify-center gap-x-10">
  <select className="select select-bordered bg-white">
    <option disabled selected>Pick one</option>
    <option>Star Wars</option>
    <option>Harry Potter</option>
    <option>Lord of the Rings</option>
    <option>Planet of the Apes</option>
    <option>Star Trek</option>
  </select>
        <button className="btn bg-[#ffffff] border-[1px] lg:border-[2px] border-[#ED1C20] hover:bg-[#ED1C20] rounded-none lg:text-lg text-base hover:text-white text-[#ED1C20] hover:border-none">Go</button>
  </div>
</div>
            </div>
            <Quiz />
        </div>
    )
}

export default Gre_Quiz;