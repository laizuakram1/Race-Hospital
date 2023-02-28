import React, { useContext, useState } from 'react';
import '../Signup/SignUp.css';
import { SiGnuprivacyguard } from 'react-icons/si';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {sigUpError, setSignUpError} = useState('')
    const { createUser, updateUser, verifyEmail } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathName || '/'

    const handleSignUp = data => {
        
        createUser(data.email, data.password)
            .then(result => {
                updateUser('')
                const user = result.user;
              

                const userInfo = {
                    displayName: data?.name
                }
                updateUser(userInfo)
                    .then(() => { 
                        console.log(user);
                        
                    })
                    .catch((err) => console.log(err));

                    verifyEmail()
                    .then(() =>{
                        toast('SignUp successfully. Please check your email', {
                            duration: 5000,
                            position: 'bottom-right',
                            // Custom Icon
                            icon: '👏',
        
                          });
                        console.log(user);
                    })
                    .catch((err) => console.log(err))

                

                navigate(from, { replace: true });

            })

            .catch(error => {
                console.log(error)
                setSignUpError(error.message)
            })


    }


    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit(handleSignUp)}>
                <h3 className='text-2xl text-accent font-bold text-center'>Sign Up</h3>
                <SiGnuprivacyguard className='text-5xl text-center w-full my-5' />
                <input {...register("name",{required: 'please provide user name'})} type="text" placeholder="Your Name" className="input input-bordered input-md w-full no-outline" />
                {errors.name && <p className='text-red-500 text-sm'>{errors.name?.message}</p>}
                <input {...register("email", {required: 'provide valid email'})} type="email" placeholder="E-mail" className="input input-bordered input-md w-full" />
                {errors.email && <p className='text-red-500 text-sm'>{errors.email?.message}</p>}
                <input {...register("password",{required: 'use capital and number password'})} type="password" placeholder="password" className="input input-bordered input-md w-full" />
                
                {sigUpError && <p className='text-red-500'>{sigUpError}</p> }
               
                <div className='flex justify-between mr-10'>
                    <span className="label-text-alt cursor-pointer underline">Already have an account?</span>
                    <Link to='/login' className="label-text cursor-pointer underline text-accent">Login?</Link>
                </div>
                <input className='btn btn-accent w-full mt-2 mb-0' type="submit" value="Submit" />


                <div className="divider">OR</div>
                <div className='flex justify-center'>
                    <BsFacebook className='text-3xl mr-8' />
                    <FcGoogle className='text-3xl' />
                </div>
            </form>

        </div>
    );
};

export default SignUp;