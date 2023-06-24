import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
const CreateYourSuccessStory=()=>{
    return(
        <div className="bg-[#2B2B2B] h-[175px] mt-16 grid py-6 px-4 items-center" style={{gridTemplateColumns:"4fr 2fr"}}>
             <div className="mx-auto">
             <p className="text-white text-left w-[90%] leading-8 mx-auto text-xl"><ImQuotesLeft className="inline-block" />The structure of the programmes offered impressed me the most. They are flexible and fit my requirements.<ImQuotesRight className="inline-block" /></p>
             <h2 className="text-base text-[#C0C0C0] text-center mt-5">- Ashar | GRE Score - 329</h2>
             </div>
                <div className="px-4 flex justify-end">
                        <button className="btn bg-[#FE0000] rounded-none text-white border-none w-full text-lg h-[57px] hover:bg-[#f80e0e]">Create your OWN success Story</button>
                </div>
        </div>
    )
}


export default CreateYourSuccessStory;