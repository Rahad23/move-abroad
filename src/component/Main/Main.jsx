import { Outlet } from "react-router-dom"
import Navebar from "../shered/Navebar/Navebar";

const Main=()=>{
    return <div>
        <Navebar />
        <Outlet></Outlet>
    </div>
}

export default Main;