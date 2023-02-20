import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, selectedDate }) => {
    const { name, specialist, time, day } = treatment;
    const date = format(selectedDate, 'PP');
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className='text-xl text-accent font-bold mb-5'>{specialist}</h3>
                    <form >
                        <div className='grid grid-cols-2 gap-5'>
                        <input type="text" disabled value={date} className="input input-bordered input-accent mr-3" />
                        <input type="text" disabled value={time} className="input input-bordered input-accent" />
                        <input type="text" disabled value={name} className="input input-bordered input-accent mr-3" />
                        <input type="text" disabled value={day} className="input input-bordered input-accent" />
                        <input type="text" disabled value='Your email' className="input input-bordered input-accent mr-3" />
                        <input type="text" value='phone' className="input input-bordered input-accent" required />
                        </div>
                        <input className='btn btn-accent text-white w-full mt-5' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;