import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import MomsTitle from './MomsTitle';
import Input from './Input';
import authService from '../appwrite/auth';
// import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error,setErros] = useState("");
    // const navigate = useNavigate();

      const userSignupHandle = async(data) => {
        // Handle form data
        // console.log(data);
        setErros("");
        const formattedNumber = data.number.startsWith('+91') ? data.number : `+91${data.number}`;

         data.number = formattedNumber;

        try{
            const userAccount = await authService.createAccount(data);
            if(userAccount){
                console.log(userAccount);
                // navigate("/login");
            }
        }catch(error){
            setErros(error.message);         
        }
    };

    return (
        <>
                        <div className='flex flex-col sm:flex-row h-screen bg-white'>
            {/* Image Section */}
            <div className='order-1 sm:order-2 sm:w-3/5 w-full h-1/2 sm:h-full'>
                <img src='/signup.jpg' alt='Signup Illustration' className='w-full h-full object-cover' />
            </div>

            {/* Form Section */}
            <div className='order-2 sm:order-1 flex flex-col items-center sm:w-2/5 w-full bg-white rounded-t-2xl sm:rounded-none sm:shadow-none shadow-lg sm:shadow-none -mt-10 sm:mt-0'>
                <div className='flex flex-col items-center xl:items-start'>
                    <MomsTitle children="Moms" classname="xl:mt-10 xl:ml-2 xl:text-8xl text-5xl mt-5 text-center xl:text-left" />
                    <MomsTitle children="Kitchen" classname="xl:ml-2 xl:text-8xl text-5xl text-center xl:text-left" />
                </div>
                <div className='xl:w-20 absolute xl:top-16 xl:left-10 sm:top-7 w-14 sm:left-10 left-10 mt-10'>
                    <img src="/logo.jpeg" alt='Logo' className='w-full h-full' />
                </div>
                <div className='flex flex-col items-center mt-10'>
                    <h1 className='text-center font-fraunces text-green-950 text-2xl'>Sign Up</h1>
                    <p className='text-sm text-center'>
                        Already have an account?
                        <button className='inline-block underline text-blue-700' onClick={() => navigate('/login')}>
                            Login here
                        </button>
                    </p>

                    {error && <p className="text-red-600 text-sm mt-4 text-center">{error}</p>}

                    <form className='mt-5 w-96' onSubmit={handleSubmit(userSignupHandle)}>
                        <div className='m-5 sm:mx-10'>
                            <Input
                                label="Name"
                                placeholder="Enter your name"
                                {...register("name", { required: true, maxLength: 50 })}
                            />
                            {errors.name?.type === 'required' && <p role='alert' className='text-sm font-semibold text-red-800'>*First name is required</p>}
                            {errors.name?.type === 'maxLength' && <p role='alert' className='text-sm font-semibold text-red-800'>*Enter Your Name Correctly</p>}
                        </div>

                        <div className='m-5 sm:mx-10'>
                            <Input
                                label="Email"
                                placeholder="Enter your email"
                                {...register("email", { required: true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ })}
                            />
                            {errors.email?.type === 'required' && <p role='alert' className='text-sm font-semibold text-red-800'>*Email is required</p>}
                            {errors.email?.type === 'pattern' && <p role='alert' className='text-sm font-semibold text-red-800'>*Enter a valid email address</p>}
                        </div>

                        <div className='m-5 sm:mx-10'>
                            <Input
                                label="Number"
                                placeholder="Enter your number"
                                {...register("number", { required: true, pattern: /^\+\d{10}$/ })}
                            />
                            {errors.number?.type === 'required' && <p role='alert' className='text-sm font-semibold text-red-800'>*Phone number is required</p>}
                            {errors.number?.type === 'pattern' && <p role='alert' className='text-sm font-semibold text-red-800'>*Enter a valid phone number with country code</p>}
                        </div>

                        <div className='m-5 sm:mx-10'>
                            <label className='text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block m-1'>Role </label>
                            <select className='border-1 border-solid border-black px-5 py-1 bg-gray-100 hover:bg-green-100 rounded-md focus:bg-green-200' {...register("role", { required: true })}>
                                <option value="">Select</option>
                                <option value="user">User</option>
                                <option value="mom">Mom</option>
                            </select>
                            {errors.role?.type === 'required' && <p role='alert' className='text-sm font-semibold text-red-800'>*Role is required</p>}
                        </div>

                        <button className='block m-10 bg-green-950 px-5 py-2 rounded-lg text-white font-bold hover:bg-green-200 hover:text-green-950' type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}

export default SignUp;
