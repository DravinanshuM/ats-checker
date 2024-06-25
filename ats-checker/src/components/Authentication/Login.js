import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { login } from "../../redux/reducers/authReducer";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signIn = useSelector((state)=>state.auth)
  console.log(signIn)

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    const { email, password } = credentials;
    e.preventDefault();
    if (email && password) {
      if(signIn.user){
        if(email===signIn.user.email && password===signIn.user.password){
          toast.success("Login done")
          localStorage.setItem("token",true)
          dispatch(login(credentials));
          navigate("/dashboard");
        }else{
          toast.error("Please enter correct password or email")
        }
      }else{
        toast.error("You are not registered user");
      }
      
    } else {
      toast.error("All fields are required");
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="lg:w-2/5 md:w-2/5 w-full mt-4">
        <form id="form" className="shadow-lg p-6 rounded-lg">
          <h4 className="bg-green-500 text-white text-center py-2 rounded-full">
            Login
          </h4>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              className="mt-1 block w-full p-2.5 bg-green-200 border border-green-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              onChange={handleChange}
              name="email"
              id="email"
              autoComplete="off"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password:
            </label>
            <input
              type="password"
              onChange={handleChange}
              name="password"
              className="mt-1 block w-full p-2.5 bg-green-200 border border-green-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="text-center mt-2">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
          <div className="flex justify-center items-center mt-2">
            <h6>
              Not a member?{" "}
              <Link to="/" className="text-blue-500 hover:underline">
                Sign Up
              </Link>
            </h6>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
