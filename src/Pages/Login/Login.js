import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { login } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathName || '/';




    const handleLogin = (data) => {
        console.log(data);
        setLoginError('');
        login(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from,{replace:true})
            })
            .catch(err => {
                console.log(err.message);
                setLoginError(err.message);
            });
    }
    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 p-5 border rounded-md'>
                <h1 className='text-3xl font-bold'>Login</h1>
                <form onSubmit={handleSubmit((handleLogin))}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: "Email Address is required" })} className="input input-bordered " />
                        {errors.email && <p className='text-red-600 text-left' role="alert">{errors.email?.message}</p>}
                    </div >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register(
                            "password",
                            {
                                required: "Password is required",
                                minLength: { value: 6, message: 'password must be 6 characters' }
                            },
                        )}
                            className="input input-bordered " />
                        {errors.password && <p className='text-red-600 text-left' role="alert">{errors.password?.message}</p>}
                        {loginError && <p className='text-red-600 text-left'>{loginError}</p>}
                    </div>

                    <label className="label">
                        <span className="label-text">Forget Password?</span>
                    </label>
                    <input className='btn btn-primary w-full mt-5' type="submit" value='Log In' />
                    <p>New to Dentists portal? <Link to='/signup' className='text-primary font-semibold'>Sign Up</Link> </p>
                    <div className="divider">OR</div>
                    <button className='btn btn-outline btn-primary w-full'>Continue with Google</button>
                </form>
            </div>
        </div>
    );
};

export default Login;