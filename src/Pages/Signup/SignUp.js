import React, { useContext, useState } from 'react';
import '../Signup/SignUp.css';
import { SiGnuprivacyguard } from 'react-icons/si';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import useToken from '../../hooks/useToken';

const provider = new GoogleAuthProvider();


const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [sigUpError, setSignUpError] = useState('')
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const { createUser, updateUser,verifyEmail, auth } = useContext(AuthContext);
    const [token] = useToken(createdUserEmail);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathName || '/'
    if(token){
        navigate(from, { replace: true });
    }

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

                
                saveUsers(data?.name, data?.email);

            })

            .catch(error => {
                setSignUpError(error.message)
            })


    }

    const googleSignIn = () =>{
        signInWithPopup(auth, provider)
        .then((result) =>{
            const googleUser = result.user;
            navigate(from, { replace: true });
            console.log(googleUser)
        })
        .catch((error) =>{
            console.log(error.message)
        })
    }
    const saveUsers = (name, email) =>{
        const userData = {
            name:name,
            email:email
            
        }

        fetch('http://localhost:5000/users',{
            method:'POST',
            headers:{
                'content-type':'application/json',
            },
            body: JSON.stringify(userData),
        })
        .then(res => res.json())
        .then(data => {
            setCreatedUserEmail(email)
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
                    <button onClick={googleSignIn} className='btn w-full'><FcGoogle className='text-2xl mr-5'/>Google SignIn</button>
                </div>
            </form>

        </div>
    );
};

export default SignUp;