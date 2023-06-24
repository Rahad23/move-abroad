import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
const CreateYourSuccessStory=()=>{
    return(
        <div className="bg-[#2B2B2B] lg:h-[175px] h-auto mt-16 lg:grid flex flex-col lg:flex-row py-6 px-4 items-center" style={{gridTemplateColumns:"4fr 2fr"}}>
             <div className="mx-auto">
             <p className="text-white lg:text-left text-center w-[90%] leading-8 mx-auto lg:text-xl text-lg"><ImQuotesLeft className="inline-block text-3xl mr-1" />The structure of the programmes offered impressed me the most. They are flexible and fit my requirements.<ImQuotesRight className="inline-block text-3xl ml-1" /></p>
             <h2 className="text-base text-[#C0C0C0] text-center lg:mt-5 mt-3">- Ashar | GRE Score - 329</h2>
             </div>
                <div className="px-4 flex justify-end">
                        <button className="btn mt-2 lg:mt-0 bg-[#FE0000] rounded-none text-white border-none w-full lg:text-lg text-sm h-[50px] lg:h-[57px] hover:bg-[#f80e0e]">Create your OWN success Story</button>
                </div>
        </div>
    )
}


export default CreateYourSuccessStory;