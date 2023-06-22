import { FaUniversity } from 'react-icons/fa';
import './Gallery.css';
import { GrLocation } from "react-icons/gr";
import { BsSearch } from 'react-icons/bs';
import FeaturedCourseCard from './FeaturedCourseCard';

const Gallery=()=>{
    return <>
     <div>
        <div className="bg-img-set lg:h-[460px] h-[500px]">
            <div className='bg-[rgba(54,49,49,.5)] lg:h-full h-[500px]  flex items-center justify-center'>
               <div className='w-[650px]'>
                <h1 className='text-white text-3xl lg:text-5xl text-center font-semibold leading-relaxed'>Search your favorite university</h1>
                <div className='flex justify-between mt-5 px-4 lg:px-0'>
                <div className="rounded-none w-full h-16 card bg-white  place-items-center border-r-[1px] border-[#ddd] grid px-2 rounded-l-lg py-2" style={{gridTemplateColumns:"30px 4fr"}}>
                    <GrLocation className='lg:text-2xl text-xl mr-1 lg:mr-2 text-slate-500'  />
                    <input type="text" placeholder="Country" className="input w-full max-w-xs focus:outline-none border-[1px] border-[rgba(221,221,221,.3)] rounded-[2px] bg-white" />
                    </div>
                    <div className="rounded-none w-full h-16 card bg-white  place-items-center border-r-[1px] border-[#ddd] grid px-2  py-2" style={{gridTemplateColumns:"30px 4fr"}}>
                    <FaUniversity className='lg:text-2xl text-xl mr-1 lg:mr-2 text-slate-500'  />
                    <input type="text" placeholder="University" className="input w-full max-w-xs focus:outline-none border-[1px] border-[rgba(221,221,221,.3)] rounded-[2px] bg-white" />
                    </div>
                    <button className="btn btn-secondary h-16 rounded-r-lg rounded-l-none">
                        <BsSearch className='lg:text-3xl text-xl font-medium' />
                    </button>
                </div>
               </div>
            </div>
        </div>
    </div>
    <div>
            <FeaturedCourseCard />
        </div>
   </>
}

export default Gallery;