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
                {/* navbar toggle button */}
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost btn-circle lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link className='active-item' to='/'>Home</Link></li>
                        <li><Link to='/appointment'>Appointment</Link></li>
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                        <li><Link to='/bloodBank'>Blood Bank</Link></li>
                        <li><Link to='/contactUs'>Contact Us</Link></li>
                        <li>
                        {user?.uid ? <button className='btn-sm btn-accent' onClick={hadleLogOut}>Logout</button> : <li><Link className='btn-sm btn-accent' to='/login'>Login</Link></li>}
                        </li>
                        
                    </ul>
                </div>


                <div className="flex-1">
                    <Link className="btn btn-ghost normal-case text-lg font-normal">Race Hospital</Link>
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
                                <label tabIndex={2} className="btn btn-circle avatar online">
                                    <div className="w-10 rounded-full">
                                        <p className='mt-3 text-sm'>{user?.displayName}</p>
                                    </div>
                                </label>
                                <ul tabIndex={2} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <Link className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </Link>
                                    </li>
                                    <div className="form-control">
                                        {/* <label className="label cursor-pointer">
                                            <span className="label-text p-3">Dark Mode</span>
                                            <input type="checkbox" className="toggle" />
                                        </label> */}
                                    </div>
                                    {user?.uid ? <li><button onClick={hadleLogOut}>Logout</button></li> : <li><Link>Login</Link></li>}
                                </ul>
                            </div></> : <Link className="link link-success" to='/login'>Login</Link>
                        }
                    </div>

                </div>
                <label htmlFor='dashboard-drawer' tabIndex={4} className="btn btn-ghost btn-circle lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                
            </div>
        </div>

        
    );
};

export default Navbar;