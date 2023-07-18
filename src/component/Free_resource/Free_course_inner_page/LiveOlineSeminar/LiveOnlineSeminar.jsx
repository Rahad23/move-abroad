
import axios from "axios";
import ChecklistSectionText from "./ChecklistSectionText/ChecklistSectionText";
import CreateYourSuccessStory from "./CreateYourSuccessStory";
import LiveOnlineSeminarCard from "./LiveOnlineSeminarCard";
import { useState } from "react";
import CalculateCountdown from "./CountDownFunction/CalculateCountdown";

const LiveOnlineSeminar=()=>{

    const [liveSeminar, setLiveSeminar]=useState([]);

  
  axios.get(`${import.meta.env.VITE_REACT_APP_URL}/liveOnlineSeminar`)
  .then(response => {
    setLiveSeminar(response.data);
})
.catch(error => {
  console.error(error);
});
    return (
       <div>
                <div className="px-8">
 {
               liveSeminar.map(data=>
                <LiveOnlineSeminarCard 
                 data={data}
                 countDown={CalculateCountdown(data?.publishDate, data?.registrationTiming)}
                 key={data?._id} />
                ) 
                }
                </div>
           
            {/* <LiveOnlineSeminarCard /> */}
            <CreateYourSuccessStory />
            <ChecklistSectionText />
       </div>
    )
}

export default LiveOnlineSeminar;