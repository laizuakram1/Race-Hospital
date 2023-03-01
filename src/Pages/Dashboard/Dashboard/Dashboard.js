import React from 'react';
import '../Dashboard/Dashboard.css'
import Navbar from '../../Shared/Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';


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
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>My Appointments</Link></li>
                        <li><Link to='/dashboard/profile'>Profile</Link></li>
                        <li><Link to='/dashboard/prescription'>Prescription</Link></li>
                        <li><Link to='/dashboard/report'>Report</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;