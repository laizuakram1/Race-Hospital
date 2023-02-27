import React, { useContext } from 'react';
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
    const { createUser, updateUser, verifyEmail } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathName || '/'

    const handleSignUp = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                updateUser('')
                const user = result.user;
                console.log(user);


                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        verifyEmail()
                            .then(() => { })
                            .catch((err) => console.log(err));
                    })
                    .catch((err) => console.log(err));


                toast('signup successfully', {
                    duration: 5000,
                    position: 'bottom-right',

                    // Custom Icon
                    icon: '👏',

                });

                navigate(from, { replace: true });

            })

            .catch(error => console.log(error))


    }


    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit(handleSignUp)}>
                <h3 className='text-2xl text-accent font-bold text-center'>Sign Up</h3>
                <SiGnuprivacyguard className='text-5xl text-center w-full my-5' />
                <input {...register("name")} type="text" placeholder="Your Name" className="input input-bordered input-md w-full no-outline" />
                <input {...register("email")} type="email" placeholder="E-mail" className="input input-bordered input-md w-full" />
                <input {...register("password")} type="password" placeholder="password" className="input input-bordered input-md w-full" />

                <div className='flex justify-between mr-10'>
                    <span className="label-text-alt cursor-pointer underline">Forget password?</span>
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