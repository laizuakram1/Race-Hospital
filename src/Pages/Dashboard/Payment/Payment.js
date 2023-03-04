import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const { id } = useParams();
    const [booked, setBooked] = useState(null)
    console.log(booked)

    useEffect(() =>{
        fetch(`http://localhost:5000/bookings/${id}`)
        .then(res => res.json())
        .then(data => setBooked(data))
    },[id])
        

    return (
        <div>
            <h3 className='text-xl m-5'>Please pay <strong className='text-orange-400'>${booked?.price}</strong> for {booked?.specialist} Appointment fee on {booked?.date} {booked?.day} at {booked?.time}.</h3>
        </div>
    );
};

export default Payment;