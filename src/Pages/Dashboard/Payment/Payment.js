import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const { id } = useParams();
    const [booked, setBooked] = useState(null)
   


    useEffect(() => {
        fetch(`http://localhost:5000/bookings/${id}`)
            .then(res => res.json())
            .then(data => setBooked(data))
    }, [id])



    return (
        <div className='m-5'>
            <h3 className='text-xl'>Please pay <strong className='text-orange-400'>${booked?.price}</strong> for <strong className='text-orange-400'>{booked?.specialist}</strong> Appointment fee on <strong className='text-orange-400'>{booked?.date} {booked?.day} </strong>at <strong className='text-orange-400'>{booked?.time}.</strong></h3>

            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm booking={booked}></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;