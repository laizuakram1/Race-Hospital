import React, { useContext } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Navbar = () => {

    const { user, LogOut } = useContext(AuthContext);

    const hadleLogOut = () => {
        LogOut()
            .then(() => { })
            .catch((err) => console.log(err))
    }

    return (
        <div id='menubar'>
            <div className="navbar bg-base-100">
                <label tabIndex={0} htmlFor="menu-items" className="btn btn-ghost btn-circle lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-lg font-normal">Race Hospital</a>
                </div>
                <div className="flex-none gap-2">

                    <div tabIndex={0} className="menu-items">
                        <Link className='active-item' to='/'>Home</Link>
                        <Link to='/appointment'>Appointment</Link>
                        <Link to='/bloodBank'>Blood Bank</Link>
                        <Link to='/contactUs'>Contact Us</Link>
                        {/* {user?.uid ? <Link to='/signup'>SignOut</Link> : <Link to='/login'>Login</Link>} */}
                        {user?.uid ? <>
                            <Link to='/dashboard'>Dashboard</Link>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-circle avatar online">
                                    <div className="w-10 rounded-full">
                                        <p className='mt-3 text-sm'>{user?.displayName}</p>
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <span className="label-text p-3">Dark Mode</span>
                                            <input type="checkbox" className="toggle" />
                                        </label>
                                    </div>
                                    {user?.uid ? <li><button onClick={hadleLogOut}>Logout</button></li> : <li><a>Login</a></li>}
                                </ul>
                            </div></> : <Link className="link link-success" to='/login'>Login</Link>
                        }
                    </div>

                </div>
                <label tabIndex={1} htmlFor="dashboard-drawer" className="btn btn-ghost btn-circle lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
            </div>
        </div>

        
    );
};

export default Navbar;