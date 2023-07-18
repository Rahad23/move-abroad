import { useLoaderData } from "react-router-dom";

const UniversityRegistration=()=>{
    const liveSeminarData = useLoaderData();
    console.log(liveSeminarData)
    return <>
        university registration
    </>
}

export default UniversityRegistration;