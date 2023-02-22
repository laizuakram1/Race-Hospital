import React, { useContext } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Navbar = () => {

        const {user,LogOut} = useContext(AuthContext);
        console.log(user)

        const hadleLogOut = ()=>{
            LogOut()
            .then(() =>{})
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
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            {user?.uid ? <li><button onClick={hadleLogOut}>Logout</button></li> : <li><a>Login</a></li>}
                        </ul>
                    </div></> : <Link className='btn btn-dark' to='/login'>Login</Link>
                    }
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;