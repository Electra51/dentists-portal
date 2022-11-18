import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import contact from '../../assets/images/appointment.png'

const Contact = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    return (
        <div className="hero mt-20 rounded-md" style={{background:`url(${contact})`}}>
  <div className="hero-content text-center">
    <div className="max-w-md">
    <div className='h-[600px] flex justify-center items-center'>
                        <div className='w-96 p-5'>
                            <p className='text-primary'>Contact Us</p>
                <h1 className='text-3xl text-white'>Stay connected with us</h1>
                <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))} >
                    <div className="form-control mt-6">
                                    <input type="email" {...register("email", { required: "Email Address is required" })} className="input input-bordered " placeholder="Your Mail"/>
                                </div >
                                <div className="form-control mt-6">
                        <input type="text" {...register("text", { required: "Please write your subject" })} className="input input-bordered" placeholder="Subject"/>
                                </div >
                                <textarea className="textarea w-full mt-6" {...register("aboutYou")} placeholder="Your Message" />
                           
                    <input className='btn btn-primary w-full mt-5' type="submit" value='Submit' />
                    <p>{data}</p>
                </form>
            </div>
        </div>
      
    </div>
  </div>
</div>
    );
};

export default Contact;