import { Outlet } from "react-router-dom"
import Navebar from "../shered/Navebar/Navebar";
import Footer from "../shered/Footer/Footer";



const Main=()=>{
    return <div>
        <Navebar />
        <Outlet></Outlet>
        <Footer />
    </div>
}

export default Main;