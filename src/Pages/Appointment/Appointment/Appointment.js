import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState( new Date())
    return (
        <div>
            <Navbar></Navbar>
            <AppointmentBanner
            selectedDate = {selectedDate}
            setSelectedDate = {setSelectedDate}
            ></AppointmentBanner>
            <AvailableAppointment
            selectedDate = {selectedDate}
            ></AvailableAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;