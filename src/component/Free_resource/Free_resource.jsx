import { Outlet } from "react-router-dom";
import Free_resource_banner from "./Free_resource_banner";
import Free_resource_navebar from "./Free_resource_navebar";

const Free_resource=()=>{
    return <>
    <div className="bg-white">
        <div>
        <Free_resource_banner />
        </div>
        <div className="bg-white">
            <Free_resource_navebar />
            <div className="px-5 mx-auto">
                <Outlet />
            </div>
        </div>
    </div>
    </>
}

export default Free_resource;