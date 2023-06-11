import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SiGnuprivacyguard } from 'react-icons/si';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import useToken from '../../hooks/useToken';

const provider = new GoogleAuthProvider();

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { userLogin, auth } = useContext(AuthContext);
    const [userEmail, setUserEmail] = useState('');
    const [token] = useToken(userEmail);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathName || '/';

    const handleLogIn = data => {
        userLogin(data.email, data.password)
            .then(result => {
                const userEmail = result.user.email;
                toast('Login successfully', {
                    duration: 5000,
                    position: 'bottom-right',
                    // Custom Icon
                    icon: '👏',

                });
                setUserEmail(userEmail)
                navigate(from, { replace: true });
                
            })
            .catch(error => console.log(error));
    }

    const googleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error.message)
            })
    }


    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit(handleLogIn)}>
                <h3 className='text-2xl text-accent font-bold text-center'>Login</h3>
                <SiGnuprivacyguard className='text-5xl text-center w-full my-5' />
                {/* <input type="text" placeholder="Your Name" className="input input-bordered input-md w-full no-outline" /> */}
                <input {...register('email', { requred: 'provide valid email' })} type="email" placeholder="E-mail" className="input input-bordered input-md w-full" />
                <input {...register('password', { requred: 'provide valid password' })} type="password" placeholder="password" className="input input-bordered input-md w-full" />



                <div className='flex justify-between mr-10'>
                    <span className="label-text-alt cursor-pointer underline">Forget password?</span>
                    <Link to='/signup' className="label-text cursor-pointer underline text-accent">SignUp?</Link>
                </div>
                <input className='btn btn-accent w-full mt-2 mb-0' type="submit" value="Submit" />


                <div className="divider">OR</div>
                <div className='flex justify-center cursor-pointer'>
                    <button onClick={googleSignIn} className='btn w-full'><FcGoogle className='text-2xl mr-5' />Google SingIn</button>
                </div>
            </form>

        </div>
    );
};


export default Login;