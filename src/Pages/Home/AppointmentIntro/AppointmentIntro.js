import React from 'react';
import '../AppointmentIntro/AppointmentIntro.css';
import doctor from '../../../assets/images/doctor-small.png';
import { Link } from 'react-router-dom';

const AppointmentIntro = () => {
    return (
        <div className='appointmentIntro-container mt-20'>
            <div className='grid md:grid-cols-2'>
                <div className='doctor-img'>
                    <img src={doctor} alt="" />
                </div>
                <div className='appointmentIntro-title my-28'>
                <p className='text-lg font-bold text-teal-300 mb-5'>APPOINTMENT</p>
                <h3 className='text-3xl text-inherit text-white font-bold mb-5'>Make An Appointment Today</h3>
                <p className='text-sm text-white mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti maxime sequi nobis perspiciatis beatae minus molestias eos iusto. Odio autem sint, eligendi libero temporibus facilis perferendis molestias eveniet placeat dolores.</p>
                <Link to='/appointment'><button className='button'>Get Started</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AppointmentIntro;