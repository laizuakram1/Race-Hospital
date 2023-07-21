import React, { useContext } from 'react';
import { format } from 'date-fns';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const BookingModal = ({ treatment,setTreatment, selectedDate }) => {
    const { name, specialist, time, day, price } = treatment;
    const date = format(selectedDate, 'PP');
    const {user} = useContext(AuthContext);
    const { register, handleSubmit } = useForm();


    const handleBooking = data =>{
        const booking = {
            specialist,
            name,
            date,
            time,
            day,
            email:data.email,
            price,
            phone:data.phone
            
        }
        
        fetch('https://race-hospital-server.onrender.com/bookings',{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(booking)
        
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                toast('booking confirmed.', {
                    duration: 5000,
                    position: 'bottom-right',

                    // Custom Icon
                    icon: '👏',

                });
            }else{
                toast.error(data.message, {
                    duration: 5000,
                    position: 'bottom-right',

                    // Custom Icon
                    icon: 'X',

                });
            }
           
        })


        
        setTreatment(null)
        
        
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className='text-xl text-accent font-bold mb-5'>{specialist}: ${price}</h3>
                    <form onSubmit={handleSubmit(handleBooking)}>
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <div className='grid grid-cols-2 gap-5'>
                        <input {...register('date')}  defaultValue={date} type="text"className="input input-bordered input-accent mr-3" />
                        <input {...register('time')}  defaultValue={time}  type="text"  className="input input-bordered input-accent" />
                        <input {...register('name')}  defaultValue={name}  type="text"  className="input input-bordered input-accent mr-3" />
                        <input {...register('day')}   defaultValue={day} type="text"  className="input input-bordered input-accent" />
                        <input {...register('email')}  defaultValue={user?.email} type="email"  className="input input-bordered input-accent mr-3" />
                        <input {...register('phone')} Value={user?.phoneNumber} type="text" placeholder='phone number' className="input input-bordered input-accent" required />
                        </div>
                        
                        <input className='btn btn-accent text-white w-full mt-5' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;