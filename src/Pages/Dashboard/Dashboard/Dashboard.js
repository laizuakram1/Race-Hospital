import React from 'react';
import '../Dashboard/Dashboard.css'
import Navbar from '../../Shared/Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';
import {BsFillCalendar2CheckFill} from 'react-icons/bs'
import {ImProfile} from 'react-icons/im'
import {FaFilePrescription} from 'react-icons/fa'
import {TbReportAnalytics} from 'react-icons/tb'
import {AiFillSetting} from 'react-icons/ai'


const Dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* <!-- Page content here --> */}
                    
                    <Outlet></Outlet>
                    

                </div>
                <div className="drawer-side">
                    <label  htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul tabIndex={1} className="menu p-4 w-80 bg-current rounded">
                        {/* <!-- Sidebar content here --> */}
                        <li className='text-white'><Link to='/dashboard'><BsFillCalendar2CheckFill className='text-2xl text-cyan-400'/>My Appointments</Link></li>
                        <li className='text-white'><Link to='/dashboard/profile'><ImProfile className='text-2xl text-cyan-400'/>Profile</Link></li>
                        <li className='text-white'><Link to='/dashboard/prescription'><FaFilePrescription className='text-2xl text-cyan-400'/>Prescription</Link></li>
                        <li className='text-white'><Link to='/dashboard/report'><TbReportAnalytics className='text-2xl text-cyan-400'/>Report</Link></li>
                        <li className='text-white'><Link to='#'><AiFillSetting className='text-2xl text-cyan-400'/>Setting</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;