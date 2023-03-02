
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MyAppointments = () => {
    const {auth} = useContext(AuthContext);
    const [appointments, setAppointments] = useState([])
    console.log(appointments)
    const email = auth?.currentUser?.email

    useEffect( ()=> {
        fetch(`http://localhost:5000/bookings?email=${email}`)
        .then(res => res.json())
        .then(data => setAppointments(data))
    },[])
    
    return (
        <div>
            <h3 className='text-3xl text-cyan-400 m-2'>My Appointments</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Doctor Name</th>
                            <th>Specialist</th>
                            <th>Date</th>
                            <th>Day</th>
                            <th>Time</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((appointment, i) => <tr className='hover'
                            key={i}
                            >
                            <th>{i}</th>
                            <td>{appointment.name}</td>
                            <td>{appointment.specialist}</td>
                            <td>{appointment.date}</td>
                            <td>{appointment.day}</td>
                            <td>{appointment.time}</td>
                            <td>pending</td>
                            
                        </tr> )
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;