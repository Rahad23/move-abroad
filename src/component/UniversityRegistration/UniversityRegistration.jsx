import { useLoaderData } from "react-router-dom";

const UniversityRegistration=()=>{
    const liveSeminarData = useLoaderData();
    return <>
        <h1>
            university registration
        </h1>
    </>
}

export default UniversityRegistration;