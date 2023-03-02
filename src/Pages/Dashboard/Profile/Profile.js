import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';


const Profile = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const imageHostKey = process.env.REACT_APP_imagebb_host_key;
    const [refetch, setRefetch] = useState({})
    const [profiles, setProfiles] = useState([])




    const onSubmit = data => {
        const image = data.image[0]
        const name = data.name
        const email = data.email
        const birthdate = data.birthdate
        const bloodgroup = data.bloodgroup
        const totaldonate = data.totaldonate
        const lastdonate = data.lastdonate
        const userId = '6400b55a02f13dc8136b3bf8'



        const formData = new FormData();
        formData.append("image", image);

        fetch(`https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {
                const userInfo = {
                    image: data.data.image.url,
                    name: name,
                    email: email,
                    birthdate: birthdate,
                    bloodgroup: bloodgroup,
                    totaldonate: totaldonate,
                    lastdonate: lastdonate,
                    id: userId

                }

                fetch(`http://localhost:5000/profile`, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        setRefetch(data)
                        toast.success('Profile update successfull.')

                    })
            })
            .catch((error) => {
                console.error("Error:", error);
            });

    }

    useEffect(() => {
        fetch(`http://localhost:5000/profile`)
            .then(res => res.json())
            .then(data => {
                const updateProfile = data.slice(-1);
                setProfiles(updateProfile[0]);

            })
    }, [refetch])

    return (
        <div>
            <h3 className='text-3xl bold text-success m-3 text-center'>Your Profile</h3>
            <div className='w-full flex justify-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-5 pt-5">
                        <img src={profiles?.image} alt="user" className="rounded-xl h-48 w-48" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{profiles.name}</h2>
                        <p>{profiles.email}</p>
                        <button className="btn gap-2">
                            Blood Group:
                            <div className="badge badge-secondary">{profiles.bloodgroup}</div>
                        </button>
                        <button className="btn gap-2">
                            Total Blood Donate
                            <div className="badge badge-secondary">{profiles.totaldonate}</div>
                        </button>
                        <button className="btn gap-2">
                            Last Blood Donate
                            <div className="badge badge-secondary">{profiles.lastdonate}</div>
                        </button>


                        <div className="card-actions">
                            {/* <button className="btn btn-accent">UPDATE PROFILE</button> */}
                            {/* The button to open modal */}
                            <label htmlFor="profileModals" className="btn btn-success">UPDATE PROFILE</label>

                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id="profileModals" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box relative">
                                    <label htmlFor="profileModals" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <input {...register("name", { required: 'type your name' })} type="text" placeholder="Your name" className="mb-3 input w-full max-w-xs border-cyan-400" />
                                        <input {...register("email", { required: 'type your valid email' })} type="email" placeholder="E-mail" className="mb-3 input w-full max-w-xs border-cyan-400" />
                                        <select {...register("bloodgroup")} placeholder='select blood group' className="input w-full max-w-xs py-2 mb-3 border-cyan-400">
                                            <option defaultValue="none">Select Blood Group</option>
                                            <option value="A +ve">A +ve</option>
                                            <option value="B +ve">B +ve</option>
                                            <option value="AB +ve">AB +ve</option>
                                            <option value="O +ve">O +ve</option>
                                            <option value="A -ve">A -ve</option>
                                            <option value="B -ve">B -ve</option>
                                            <option value="AB -ve">AB -ve</option>
                                            <option value="O -ve">O -ve</option>
                                            <option value="Boombay">Boombay</option>

                                        </select>

                                        <input {...register("totaldonate", { required: 'Total Donate' })} placeholder="Total donate number" type='number' className="mb-3 input w-full max-w-xs border-cyan-400" />
                                        <p className='text-start ml-20'>Select Birthday</p>
                                        <input {...register("birthdate", { required: 'type date of birth' })} type='date' placeholder="DD-MM-YY" className="mb-3 input w-full max-w-xs border-cyan-400" />
                                        <p className='text-start ml-20'>Last Donate Date</p>
                                        <input {...register("lastdonate", { required: 'Select Last donate date' })} type='date' placeholder="DD-MM-YY" className="mb-5 input w-full max-w-xs border-cyan-400" />
                                        <input {...register("image", { required: true })} type='file' className="mb-5 input w-full max-w-xs border-cyan-400" />


                                        <input className='btn btn-success w-full py-5 text-white bold' type="submit" value='UPDATE' />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;