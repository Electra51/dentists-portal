// import React, { useContext, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../Contexts/AuthProvider';

// const Login = () => {
//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const { login } = useContext(AuthContext);
//     const [loginError, setLoginError] = useState('');
//     const location = useLocation();
//     const navigate = useNavigate();
//     const from = location.state?.from?.pathName || '/';
//     const handleLogin = (data) => {
//         console.log(data);
//         setLoginError('');
//         login(data.email, data.password)
//             .then(result => {
//                 const user = result.user;
//                 console.log(user);
//                 navigate(from,{replace:true})
//             })
//             .catch(err => {
//                 console.log(err.message);
//                 setLoginError(err.message);
//             });
//     }
//     return (
//         <div className='h-[600px] flex justify-center items-center'>
//             <div className='w-96 p-5 border rounded-md'>
//                 <h1 className='text-3xl font-bold'>Login</h1>
//                 <form onSubmit={handleSubmit((handleLogin))}>
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Email</span>
//                         </label>
//                         <input type="email" {...register("email", { required: "Email Address is required" })} className="input input-bordered " />
//                         {errors.email && <p className='text-red-600 text-left' role="alert">{errors.email?.message}</p>}
//                     </div >
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Password</span>
//                         </label>
//                         <input type="password" {...register(
//                             "password",
//                             {
//                                 required: "Password is required",
//                                 minLength: { value: 6, message: 'password must be 6 characters' }
//                             },
//                         )}
//                             className="input input-bordered " />
//                         {errors.password && <p className='text-red-600 text-left' role="alert">{errors.password?.message}</p>}
//                         {loginError && <p className='text-red-600 text-left'>{loginError}</p>}
//                     </div>

//                     <label className="label">
//                         <span className="label-text">Forget Password?</span>
//                     </label>
//                     <input className='btn btn-primary w-full mt-5' type="submit" value='Log In' />
//                     <p>New to Dentists portal? <Link to='/signup' className='text-primary font-semibold'>Sign Up</Link> </p>
//                     <div className="divider">OR</div>
//                     <button className='btn btn-outline btn-primary w-full'>Continue with Google</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Login;

import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import teeth from "../../teeth.json";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    setLoginError("");

    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Simulate login
    console.log("Login attempt:", formData);
    alert("Login functionality would work here!");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleGoogleLogin = () => {
    alert("Google login would work here!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-teal-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8 flex flex-col justify-center items-center">
          <Link to="/" className="flex items-center font-semibold text-lg">
            <Lottie animationData={teeth} loop={true} className="w-10 h-10" />
            <span className="font-bold text-gray-800 tracking-wide text-xl lg:text-2xl">
              Dentist - <span className="text-info">Portal</span>
            </span>
          </Link>
          <p className="text-gray-600 text-center">
            Your New Smile Starts Here
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Welcome Back
          </h2>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-11 pr-4 py-3 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition`}
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full pl-11 pr-12 py-3 border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {loginError && <p className="text-red-500 text-sm">{loginError}</p>}

            <div className="text-right">
              <Link
                to="#"
                className="text-sm text-teal-600 hover:text-teal-700 font-medium">
                Forgot Password?
              </Link>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-md hover:shadow-lg">
              Log In
            </button>

            <p className="text-center text-sm text-gray-600">
              New to Dentist Portal?{" "}
              <Link
                to="/signup"
                className="text-teal-600 hover:text-teal-700 font-semibold">
                Sign Up
              </Link>
            </p>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">OR</span>
              </div>
            </div>

            <button
              onClick={handleGoogleLogin}
              className="w-full border-2 border-teal-500 text-teal-600 hover:bg-teal-50 font-semibold py-3 rounded-lg transition duration-200 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-gray-600 mt-6">
          © 2024 Dentist Portal. All rights reserved.
        </p>
      </div>
    </div>
  );
}
