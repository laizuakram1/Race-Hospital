import React, { useContext } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Navbar = () => {

    const { user, LogOut } = useContext(AuthContext);
    console.log(user)

    const hadleLogOut = () => {
        LogOut()
            .then(() => { })
            .catch((err) => console.log(err))
    }

    return (
        <div id='menubar'>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-lg font-normal">Race Hospital</a>
                </div>
                <div className="flex-none gap-2">

                    <div className="menu-items">
                        <Link className='active-item' to='/'>Home</Link>
                        <Link to='/appointment'>Appointment</Link>
                        <Link to='#'>Blood Bank</Link>
                        <Link to='#'>Contact Us</Link>
                        {/* {user?.uid ? <Link to='/signup'>SignOut</Link> : <Link to='/login'>Login</Link>} */}
                        {user?.uid ? <>
                            <Link to='#'>Dashboard</Link>
                            <div className="dropdown dropdown-end">
                            <div className="avatar online placeholder">
                                        <div className="bg-neutral-focus text-neutral-content rounded-full w-12 cursor-pointer">
                                            <span className="text-sm">{user?.displayName}</span>
                                        </div>
                                    </div>
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
            </div>
        </div>
    );
};

export default Navbar;