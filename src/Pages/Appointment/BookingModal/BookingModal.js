import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment,setTreatment, selectedDate }) => {
    const { name, specialist, time, day } = treatment;
    const date = format(selectedDate, 'PP');

    const handleBooing = event =>{
        event.preventDefault();




        setTreatment(null)
        
        
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className='text-xl text-accent font-bold mb-5'>{specialist}</h3>
                    <form onSubmit={handleBooing}>
                        <div className='grid grid-cols-2 gap-5'>
                        <input name='date' type="text" disabled value={date} className="input input-bordered input-accent mr-3" />
                        <input name='time' type="text" disabled value={time} className="input input-bordered input-accent" />
                        <input name='name' type="text" disabled value={name} className="input input-bordered input-accent mr-3" />
                        <input name='day' type="text" disabled value={day} className="input input-bordered input-accent" />
                        <input name='email' type="email" disabled value='Your email' className="input input-bordered input-accent mr-3" />
                        <input name='phone' type="text" value='123456789' className="input input-bordered input-accent" required />
                        </div>
                        
                        <input className='btn btn-accent text-white w-full mt-5' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;