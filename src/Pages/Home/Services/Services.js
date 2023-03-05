import React from 'react';
import './Services.css';
import ultrasonogram from '../../../assets/images/ultra3.jpg'
import pathology from '../../../assets/images/pathology.webp'
import xray from '../../../assets/images/xray.jpg'
import treatment from '../../../assets/images/treatment.png';
import {BiDonateBlood} from 'react-icons/bi';

const Services = () => {
    return (
        <div id='services' className='mt-32'>
            <p className='text-lg text-center font-bold text-teal-300'>OUR SERVICES</p>
            <h3 className='text-3xl text-center font-normal'>Special Services</h3>
            <div className='services-container'>
                <div className='grid md:grid-cols-3 ml-8'>
                    <div className="doctor-service">
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={pathology} alt="doctor" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Pathology</h2>
                                <p>We Delivered your all kind of Pathological Report timely.Collect sample safely and delivery your Report after 1 hour.We know your time value.
                                </p>
                                <div className="card-actions">
                                <button className="button uppercase">Details</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="doctor-service">
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={ultrasonogram} alt="doctor" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">3D Ultrasonogram</h2>
                                <p>We Delivered your all kind of Pathological Report timely.Collect sample safely and delivery your Report after 1 hour.We know your time value.
                                </p>
                                <div className="card-actions">
                                <button className="button uppercase">Details</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="doctor-service">
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={xray} alt="doctor" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Digital X-ray</h2>
                                <p>We Delivered your all kind of Pathological Report timely.Collect sample safely and delivery your Report after 1 hour.We know your time value.
                                </p>
                                <div className="card-actions">
                                <button className="button uppercase">Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='transfusions mt-10'>
                    <div className="card lg:card-side bg-base-100 p-10 grid md:grid-cols-2">
                        <figure><img className='transfusion-img' src={treatment} alt="treatment" /></figure>
                        <div className="card-body">
                            <h2 className="text-3xl font-bold"><span className='text-red-400'><BiDonateBlood className='inline mr-3'/>Blood</span><span className='text-green-400'>Bank</span></h2>
                            <p>We helps people to give human pure blood for safe life. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ducimus fugiat doloribus eos quaerat quas impedit vel quidem temporibus dign issimos?</p>
                            <div className="card-actions justify-start">
                                <button className="button">Donate Blood</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Services;