import { format } from 'date-fns';
import React from 'react';


const AvailableAppointment = ({selectedDate}) => {
const doctors = [
    {name: 'Dr. Illen', specialist:"Gynaecology", seats:10, day:'sunday', time:'10am - 04pm'},
    {name: 'Dr. Iqbal Ahmed', specialist:"Medicine", seats:10, day:'sunday', time:'10am - 04pm'},
    {name: 'Dr. Mostafijur', specialist:"Diabetologist", seats:10, day:'sunday',time:'10am - 04pm'},
    {name: 'Dr. Jabir', specialist:"Dermatology", seats:10, day:'sunday',time:'10am - 04pm'},
    {name: 'Dr. Arafat', specialist:"Cardiology", seats:10, day:'sunday',time:'10am - 04pm'},
    {name: 'Dr. Limu', specialist:"Orthopedics", seats:10, day:'sunday',time:'10am - 04pm'}
]

    return (
        <div>
            <h3 className='text-2xl text-teal-400 font-bold text-center mt-10'>Available Appointment on:{format(selectedDate, 'PP')}</h3>
            <div className='grid md:grid-cols-3 gap-y-5 text-center my-10'>
            {
                doctors.map((doctor, index) => <div
                 doctor={doctor} key= {index}
                  className="card w-96 bg-base-100 shadow-lg">
                <div className="card-body">
                    <h2 className="card-title flex-col text-3xl font-bold">{doctor.specialist}</h2>
                    <p>{doctor.day}</p>
                    <p>{doctor.time}</p>
                    <p>Available slots:{doctor.seats}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-accent text-white">Make Appointment</button>
                    </div>
                </div>
            </div>)
            }
            
        </div>
        </div>
    );
};

export default AvailableAppointment;