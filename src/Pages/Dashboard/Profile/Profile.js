import React from 'react';

const Profile = () => {
    return (
        <div>
            <h3 className='text-3xl bold text-cyan-400 m-3 text-center'>Your Profile</h3>
            <div className='w-full flex justify-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://freepngimg.com/thumb/man/22654-6-man-thumb.png" alt="user" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Laizu Akram</h2>
                        <p>laizuakram98@gmail.com</p>
                        <p>Blood Group: "O"+ve</p>
                        <p>Total Blood Donate: 4</p>
                        <button className='border border-cyan-500 text-xl p-2 rounded-lg'>Last Donate</button>
                        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                            <div className="flex flex-col">
                                <span className="countdown font-mono text-5xl">
                                    <span style={{ "--value": 15 }}></span>
                                </span>
                                days
                            </div>
                            <div className="flex flex-col">
                                <span className="countdown font-mono text-5xl">
                                    <span style={{ "--value": 10 }}></span>
                                </span>
                                hours
                            </div>
                            <div className="flex flex-col">
                                <span className="countdown font-mono text-5xl">
                                    <span style={{ "--value": 24 }}></span>
                                </span>
                                min
                            </div>
                            <div className="flex flex-col">
                                <span className="countdown font-mono text-5xl">
                                    <span style={{ "--value": 48 }}></span>
                                </span>
                                sec
                            </div>
                        </div>

                        <div className="card-actions">
                            <button className="btn btn-accent">UPDATE PROFILE</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="avatar online mt-5">
                <div className="w-48 rounded-full">
                    <img src="https://freepngimg.com/thumb/man/22654-6-man-thumb.png" />
                </div>
            </div>
            <p className='text-2xl bold'>Laizu Akram</p>
            <small>laizuakram98@gmail.com</small><br />
            <small>Blood Group: 'O'+ve</small>
            <p>Total Blood Donate: 4</p>
            <p>Last Donate: 20/10/22</p>
            <button className="btn btn-accent mt-2">UPDATE PROFILE</button> */}
        </div>
    );
};

export default Profile;