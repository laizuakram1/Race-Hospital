import { format } from 'date-fns';
import React, { useState } from 'react';
import AppointmentOptions from '../AppointmentOpsions/AppointmentOptions';
import BookingModal from '../BookingModal/BookingModal';


const AvailableAppointment = ({selectedDate}) => {
const doctors = [
    {name: 'Dr. Illen', specialist:"Gynaecology", seats:10, day:'sunday', time:'10am - 04pm'},
    {name: 'Dr. Iqbal Ahmed', specialist:"Medicine", seats:10, day:'sunday', time:'10am - 04pm'},
    {name: 'Dr. Mostafijur', specialist:"Diabetologist", seats:10, day:'sunday',time:'10am - 04pm'},
    {name: 'Dr. Jabir', specialist:"Dermatology", seats:10, day:'sunday',time:'10am - 04pm'},
    {name: 'Dr. Arafat', specialist:"Cardiology", seats:10, day:'sunday',time:'10am - 04pm'},
    {name: 'Dr. Limu', specialist:"Orthopedics", seats:10, day:'sunday',time:'10am - 04pm'}
]
const [treatment, setTreatment] = useState(null)

    return (
        <div>
            <h3 className='text-2xl text-teal-400 font-bold text-center mt-10'>Available Appointment on:{format(selectedDate, 'PP')}</h3>
            <div className='grid md:grid-cols-3 gap-y-5 text-center my-10'>
            {
                doctors.map((doctor,index) => <AppointmentOptions
                doctor = {doctor}
                key={index}
                setTreatment = {setTreatment}
                ></AppointmentOptions> )
            }
            
        </div>
        <BookingModal treatment = {treatment}></BookingModal>
        </div>
    );
};

export default AvailableAppointment;