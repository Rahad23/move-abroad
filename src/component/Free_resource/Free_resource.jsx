import { Outlet, useLocation } from "react-router-dom";
import Free_resource_banner from "./Free_resource_banner";
import Free_resource_navebar from "./Free_resource_navebar";
import LiveOnlineSeminar from "./Free_course_inner_page/LiveOlineSeminar/LiveOnlineSeminar";


const Free_resource=()=>{
    const url = useLocation();
    const thirdUrl= url.pathname.split("/")[2];
    return <>
    <div className="bg-white">
        <div>
        <Free_resource_banner />
        </div>
        <div className="bg-white">
                {
                    thirdUrl ? <div className="mx-auto"><Outlet /></div> : 
                    <div className="mx-auto"><LiveOnlineSeminar /></div>
                }
        </div>
    </div>
    </>
}

export default Free_resource;