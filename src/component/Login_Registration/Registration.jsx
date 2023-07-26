import { useLottie } from "lottie-react";
import signUpAnimation from "../../lottie/sign_up.json";
import Navebar from "../shered/Navebar/Navebar";
import { useForm } from "react-hook-form";
import axios from "axios";
// import { AuthContext } from "../../contexts/AuthContext";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { setSession } from "./SessionManagement/SessionManagement";
const Registration=()=>{

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  // const process = import.meta.env;

  // const {isLoggedIn} = useContext(AuthContext);
  
 const navigate = useNavigate(); 
  const onSubmit = data => {

    if(data?.email && data?.fullName && data?.password){
        axios.post(`${import.meta.env.VITE_REACT_APP_URL}/users`,{
          fullName: data?.fullName,
          email: data?.email,
          password: data?.password
        })
        .then(function (response) {
          
          if(response.status === 200){
              toast.success("Registration successful");
              setSession(null, true)
              navigate('/');
              location.reload();
              reset();
          }
        })
        .catch(function (error) {
            return toast.error(error?.response?.data);
        });
    }

  };
    const options = {
        animationData: signUpAnimation,
        loop: true,
      };
      const { View } = useLottie(options);
    return ( 
        <>
        <Navebar />
           <div className="hero min-h-screen w-screen bg-white">
  <div className="hero-content flex justify-evenly w-screen">
    <div>
        {View}
    </div>
    <div className="card w-[450px] shadow-md bg-white border-[1px] border-[#ddd]">
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="card-body">
     <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input {...register("fullName",{ required: true })} type="text" placeholder="Name" className="input input-bordered w-full  bg-white" />
          {errors.fullName && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input {...register("email",{ required: true })} type="email" placeholder="email" className="input input-bordered bg-white" />
          {errors.email && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input {...register("password", {
             required: true,
            //  value: /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/,
             message: "Password should be 8 characters long and include uppercase letters, lowercase letters, numbers, and special characters."
             })} type="password" placeholder="password" className="input input-bordered bg-white" />
          {
          errors.password && <span className="text-red-600">{errors.password.message ? console.log(errors.password.message) : "This field is required"}</span>
          }
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary bg-[#274396] border-none">submit</button>
        </div>
      </div>
      </form>
    </div>
  </div>
</div>
        </>
     
     )
}

export default Registration;