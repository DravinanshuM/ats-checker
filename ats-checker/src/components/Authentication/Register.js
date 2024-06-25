import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from '../../redux/reducers/authReducer';
import { Link,useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    const{username,email,password,cpassword} = credentials;
    e.preventDefault();
    if(username&&email&&password&&cpassword){
      if(password===cpassword){
        toast.success("Registration done")
        dispatch(register(credentials));
        navigate("/login");
      }else{
        toast.error("Password and confirm password does not match!")
      }
    }else{
      toast.error("All fields are required")
    }
  };

  return (
    <div className="flex items-center justify-center">
    <div className="lg:w-2/5 md:w-2/5 w-full mt-4 ">
      <form id="form" className="shadow-lg p-6 rounded-lg">
        <h4 className="bg-green-500 text-white text-center py-2 rounded-full">
          Registration
        </h4>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Full name:
          </label>
          <input
            name="username"
            type="text"
              autoComplete="off"
            value={credentials.username}
            onChange={handleChange}
            className="mt-1 block w-full p-2.5 bg-green-200 border border-green-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            id="name"
            placeholder="Username"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <input
            name="email"
            type="email"
              autoComplete="off"
            value={credentials.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2.5 bg-green-200 border border-green-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            id="email"
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
            name="password"
            type="password"
            value={credentials.password}
            onChange={handleChange}
            className="mt-1 block w-full p-2.5 bg-green-200 border border-green-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="c-password"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm Password:
          </label>
          <input
            name="cpassword"
            type="password"
            value={credentials.cpassword}
            onChange={handleChange}
            className="mt-1 block w-full p-2.5 bg-green-200 border border-green-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            id="c-password"
            placeholder="Confirm Password"
          />
        </div>
        <div className="text-center mt-2">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
            onClick={handleSubmit}
          >
            Register
          </button>
        </div>
        <div className="flex justify-center items-center mt-2">
          <h6>
            Already a member?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </h6>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Register;
