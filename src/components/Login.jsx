import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import MomsTitle from './MomsTitle';
import Input from './Input';
import authService from '../appwrite/auth';
import { useDispatch  } from 'react-redux';
import { login as storeLogin } from '../store/authSlice';
// import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isOtpStep, setIsOtpStep] = useState(false);
    const [userId, setUserId] = useState('');
    const [error, setErrors] = useState("");
    const dispatched = useDispatch();
    // const navigate = useNavigate();

    const handlePhoneSubmit = async (data) => {
        setErrors("");
        const formattedNumber = data.number.startsWith('+91') ? data.number : `+91${data.number}`;

        try {
            const token = await authService.login({ number: formattedNumber });
            console.log(token);
            setUserId(token.userId);
            setIsOtpStep(true);
        } catch (error) {
            setErrors(error.message);
        }
    };

    const handleOtpSubmit = async (data) => {
        try {
           const createSession =   await authService.takeOtp({ userId, secret: data.otp });
           console.log(createSession);
           const userData = await authService.getCurrentUser();
           console.log(user);
           
           if(userData)
             dispatched(storeLogin(userData))

            // navigate("/home");
        } catch (error) {
            setErrors(error.message);
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
                <div className='order-2 sm:order-1 flex flex-col items-center sm:w-2/5 w-full bg-white rounded-t-2xl sm:rounded-none sm:shadow-none shadow-lg  -mt-10 sm:mt-0'>
                    <div className='flex flex-col items-center xl:items-start'>
                        <MomsTitle children="Moms" classname="xl:mt-10 xl:ml-2 xl:text-8xl text-5xl mt-5 text-center xl:text-left" />
                        <MomsTitle children="Kitchen" classname="xl:ml-2 xl:text-8xl text-5xl text-center xl:text-left" />
                    </div>
                    <div className='xl:w-20 absolute xl:top-16 xl:left-10 sm:top-7 w-14 sm:left-10 left-10 mt-10'>
                        <img src="/logo.jpeg" alt='Logo' className='w-full h-full' />
                    </div>
                    <div className='flex flex-col items-center mt-10'>
                        <h1 className='text-center font-fraunces text-green-950 text-2xl'>Login</h1>
                        <p className='text-sm text-center'>
                            Don't have an account?
                            <button className='inline-block underline text-blue-700' onClick={() => navigate('/login')}>
                                SignUp here
                            </button>
                        </p>

                        {error && <p className="text-red-600 text-sm mt-4 text-center">{error}</p>}

                      
                            <form className='mt-5 w-96' onSubmit={handleSubmit(isOtpStep ? handleOtpSubmit  : handlePhoneSubmit)}>
                                <div className='m-5 sm:mx-10'>
                                    <Input
                                        label="Number"
                                        placeholder="Enter your number"
                                        {...register("number", { required: true, pattern: /^\d{10}$/ })}
                                    />
                                    {errors.number?.type === 'required' && <p role='alert' className='text-sm font-semibold text-red-800'>*Phone number is required</p>}
                                    {errors.number?.type === 'pattern' && <p role='alert' className='text-sm font-semibold text-red-800'>*Enter a valid phone number </p>}
                                </div>
                                

                               { isOtpStep && <div className='m-5 sm:mx-10'>
                                    <Input
                                        label="OTP"
                                        placeholder="Enter the OTP"
                                        {...register("otp", { required: true, minLength: 6, maxLength: 6 })}
                                    />
                                    {errors.otp?.type === 'required' && <p role='alert' className='text-sm font-semibold text-red-800'>*OTP is required</p>}
                                    {(errors.otp?.type === 'minLength' || errors.otp?.type === 'maxLength') && <p role='alert' className='text-sm font-semibold text-red-800'>*OTP must be 6 digits</p>}
                                </div>}
                                <button className='block m-10 bg-green-950 px-5 py-2 rounded-lg text-white font-bold hover:bg-green-200 hover:text-green-950' type="submit">
                                  {isOtpStep ? "Submit" : "Next"}
                                  </button>
                            </form>
                     
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
