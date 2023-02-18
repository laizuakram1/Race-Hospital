import React from 'react';
import '../Tag/Tag.css';
import {BsClockHistory, BsFillGeoAltFill,BsTelephoneFill} from 'react-icons/bs';

const Tag = () => {
    return (
        <div className='card-container grid md:grid-cols-3 relative mt-80'>
            <div className="card card-main lg:card-side bg-base-100 shadow-xl">
                <figure><BsClockHistory className='tag-icons'/></figure>
                <div className="card-body">
                    <h2 className="card-title">Opening Hour</h2>
                    <p>08.00 am to 09.00 pm</p>
                    
                </div>
            </div>
            <div className="card location-bg lg:card-side shadow-xl">
                <figure><BsFillGeoAltFill className='tag-icons'/></figure>
                <div className="card-body">
                    <h2 className="card-title">Our Locations</h2>
                    <p>Gov.Mohila college Road</p>
                    <p>Dimla, Nilphamari</p>
                    
                </div>
            </div>
            <div className="card card-main lg:card-side bg-base-100 shadow-xl">
                <figure><BsTelephoneFill className='tag-icons'/></figure>
                <div className="card-body">
                    <h2 className="card-title">Contact Now</h2>
                    <p>+880 1717-015216</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Tag;