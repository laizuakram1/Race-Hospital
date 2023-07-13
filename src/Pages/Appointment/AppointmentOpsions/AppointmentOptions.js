import React from 'react';
import '../AppointmentOpsions/AppointmentOptions.css';

const AppointmentOptions = ({doctor, setTreatment}) => {
    return (
        <div
                  className="card w-96 bg-base-100 shadow-lg">
                <div className="card-body">
                    <h2 className="card-title flex-col text-3xl font-bold">{doctor.specialist}</h2>
                    <p>{doctor.day}</p>
                    <p>{doctor.time}</p>
                    <p>Available slots:{doctor.seats}</p>
                    <div className="card-actions justify-center">
                        {/* <button className="btn btn-accent text-white">Make Appointment</button> */}
                        <label 
                        htmlFor="booking-modal" 
                        className="btn btn-accent text-white"
                        onClick={() =>setTreatment(doctor)}
                        >Make Appointment</label>
                    </div>
                </div>
            </div>
    );
};

export default AppointmentOptions;