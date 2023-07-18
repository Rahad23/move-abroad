
// import axios from "axios";
import ChecklistSectionText from "./ChecklistSectionText/ChecklistSectionText";
import CreateYourSuccessStory from "./CreateYourSuccessStory";
import LiveOnlineSeminarCard from "./LiveOnlineSeminarCard";
// import { useState } from "react";

const LiveOnlineSeminar=()=>{

    // const [liveSeminar, setLiveSeminar]=useState([]);

  
//   axios.get(`${import.meta.env.VITE_REACT_APP_URL}/liveOnlineSeminar`)
//   .then(response => {
//     setLiveSeminar(response.data);
// })
// .catch(error => {
//   console.error(error);
// });

// const data = {
//     _id: data?._id,
//     universityName: data?.universityName,
//     date: data?.date,
//     universityImg: data?.universityImg,
//     aboutUniversity: data?.aboutUniversity,
//     registrationTiming: data?.registrationTiming,
//     publishDate: data?.publishDate,
//     classStartTime: data?.classStartTime,
//     imagePath: data?.imagePath
// }
    return (
       <div>
            {/* {
               liveSeminar.map(data=>
                <LiveOnlineSeminarCard
                 id={data?._id} 
                 universityName={data?.universityName}  
                 date={data?.date}
                 universityImg={data?.universityImg}
                 registrationTiming={data?.registrationTiming}
                 publishDate={data?.publishDate}
                 classStartTime={data?.classStartTime}
                 imagePath={data?.imagePath}
                 key={data?._id} />
                ) 
                } */}
            <LiveOnlineSeminarCard />
            <CreateYourSuccessStory />
            <ChecklistSectionText />
       </div>
    )
}

export default LiveOnlineSeminar;