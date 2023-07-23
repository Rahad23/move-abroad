import { useLottie } from "lottie-react";
import loginAnimation from "../../lottie/login.json";
import Navebar from "../shered/Navebar/Navebar";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import bcrypt from 'bcryptjs';
import axios from "axios";
import { setSession } from "./SessionManagement/SessionManagement";

const Login =()=>{

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const {signIn} = useContext(AuthContext);
  const [users, setUsers]=useState();
  const navigate = useNavigate();
  const [emailNotMatch, setEmailNotMatch]=useState(false);
  const [passwordNotMatch, setPasswordNotMatch]=useState(false);

  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_REACT_APP_URL}/users`)
    .then(response => {
      setUsers(response.data);
  })
  .catch(error => {
    console.error(error);
  });
  },[])


  const onSubmit = data => {
    if(data?.email && data?.password){
      if(emailNotMatch){
        return toast.error("Email is incorrect!")
      }
      if(passwordNotMatch){
        return toast.error("Password is incorrect!");
      }
      users.map(user=>
        bcrypt.compare(data?.password, user?.password, function(err, isMatch) {
          if(user?.email !== data?.email){
            setPasswordNotMatch(false);
             return setEmailNotMatch(true);
          }
          if (err) {
            console.error(err);
          } else {
            if (isMatch) {
              setEmailNotMatch(false);
              setPasswordNotMatch(false);
                  toast.success("login successfully")
                    // axios.post(`${import.meta.env.VITE_REACT_APP_SERVER_URL}/jwt`, {
                    //   headers: {
                    //     'Content-Type': 'application/json',
                    //   },
                    //   email: email,
                    // })
                    // .then((response) => {
                    //   console.log(response.data.accessToken);
                    //   setSession(response.data.accessToken, true);
                    // }, (error) => {
                    //   console.log(error);
                    // });
                    console.log("ok")
                    setSession(null, true);
                  navigate("/")
                  reset();
            } else {
              setEmailNotMatch(false);
              setPasswordNotMatch(true);
            }
          }
        })
        )

      // signIn(data?.email, data?.password)
      // .then((userCredential) => {
      //   // Signed in 
      //   const user = userCredential.user;
      //   if(user?.uid && user?.email){
      //       toast.success("Login success",{
      //         duration: 4000,
      //       })
      //       navigate("/");
      //   }
      //   // ...
      // })
      // .catch((error) => {
      //   // eslint-disable-next-line no-unused-vars
      //   const errorCode = error.code;
      //   // eslint-disable-next-line no-unused-vars
      //   const errorMessage = error.message;
      // });
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