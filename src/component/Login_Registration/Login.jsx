import { useLottie } from "lottie-react";
import loginAnimation from "../../lottie/login.json";
import Navebar from "../shered/Navebar/Navebar";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const Login =()=>{

  const { register, handleSubmit, formState: { errors } } = useForm();
  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  
  const onSubmit = data => {
    if(data?.email && data?.password){
      signIn(data?.email, data?.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        if(user?.uid && user?.email){
            toast.success("Login success",{
              duration: 4000,
            })
            navigate("/");
        }
        console.log(user);
        // ...
      })
      .catch((error) => {
        // eslint-disable-next-line no-unused-vars
        const errorCode = error.code;
        // eslint-disable-next-line no-unused-vars
        const errorMessage = error.message;
      });
    }
  };

    const options = {
        animationData: loginAnimation,
        loop: true,
      };
      const { View } = useLottie(options);
    return ( 
        <>
          <Navebar />
        <div className="hero min-h-screen bg-white">
  <div className="hero-content flex justify-between">
    <div>
        {View}
    </div>
    <div className="card w-[450px] shadow-md bg-white border-[1px] border-[#ddd]">
      <div className="card-body">
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered bg-white" />
          {errors.email && <span className="text-red-700">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input {...register("password", { required: true })} type="password" placeholder="password" className="input input-bordered bg-white" />
          {errors.password && <span className="text-red-700">This field is required</span>}
          <div className="flex justify-between">
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          <label className="label">
            <Link to="/sign_up" className="label-text-alt link link-hover text-red-600">sign up</Link>
          </label>
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-[#274396] border-none">Login</button>
        </div>
    </form>
      </div>
    </div>
  </div>
</div>
        </>
      
     )
}

export default Login;