import React from 'react';
import Gynae from '../../../assets/images/doctors/gynae.png';
import medicine from '../../../assets/images/doctors/medicine.png';
import orthopedics from '../../../assets/images/doctors/Orthopedics.png';

const Doctors = () => {
    return (
        <div className='mt-10'>
            <h3 className='text-2xl text-center text-teal-300 font-bold py-10'>Our Doctors</h3>
            <div className='doctors-container cursor-pointer'>
                <div className="doctors grid md:grid-cols-3 gap-3">
                    <div className="card w-96 bg-base-100 shadow">
                        <figure><img src={medicine} alt="doctor" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                            Dr. Dean Depauw
                                <div className="badge badge-secondary">25+yrs Experience</div>
                            </h2>
                            <p>Medicine Specialist</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Appointment</div>
                                <div className="badge badge-outline">Contact</div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow">
                        <figure><img src={Gynae} alt="doctor" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Dr.Illen
                                <div className="badge badge-secondary">Surgeon</div>
                            </h2>
                            <p>Gynae Specialist</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Appointment</div>
                                <div className="badge badge-outline">Contact</div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow">
                        <figure><img src={orthopedics} alt="doctor" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                            Dr. Walker Wasser
                                <div className="badge badge-secondary">Surgeon</div>
                            </h2>
                            <p>Orthopedics</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Appointment</div>
                                <div className="badge badge-outline">Contact</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors;