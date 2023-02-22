import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {SiGnuprivacyguard} from 'react-icons/si';
import {BsFacebook} from 'react-icons/bs';
import {FcGoogle} from 'react-icons/fc';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const {userLogin} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathName || '/';



    const handleLogIn = data =>{
        userLogin(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate(from, {replace:true});
        })
        .catch(error => console.log(error));
    }


    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit(handleLogIn)}>
            <h3 className='text-2xl text-accent font-bold text-center'>Login</h3>
            <SiGnuprivacyguard className='text-5xl text-center w-full my-5'/>
            {/* <input type="text" placeholder="Your Name" className="input input-bordered input-md w-full no-outline" /> */}
            <input {...register('email')} type="email" placeholder="E-mail" className="input input-bordered input-md w-full" />
            <input {...register('password')} type="password" placeholder="password" className="input input-bordered input-md w-full" />
            
            
            <div className='flex justify-between mr-10'>
            <span className="label-text-alt cursor-pointer underline">Forget password?</span>
            <Link to='/signup' className="label-text cursor-pointer underline text-accent">SignUp?</Link>
            </div>
            <input className='btn btn-accent w-full mt-2 mb-0' type="submit" value="Submit" />
            

            <div className="divider">OR</div>
            <div className='flex justify-center cursor-pointer'>
                <BsFacebook className='text-3xl hover:text-white mr-6'/>
                <FcGoogle className='text-3xl hover:text-white'/>
            </div>
            </form>
            
        </div>
    );
};

export default Login;