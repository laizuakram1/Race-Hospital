import React from 'react';
import '../ContactUs/ContactUs.css';

const ContactUs = () => {
    return (
        <div className='contact-us p-10 mt-24'>
            <h3 className='text-lg font-bold text-teal-300 text-center'>Contact Us</h3>
            <h2 className='text-3xl font-lg text-center mb-10 text-white'>Stay Connected with Us</h2>
            <div className='Contact-container'>
                <p>
                <input type="email" placeholder="Email" className="input input-bordered input-accent w-full " />
                </p>
                <p>
                <input type="text" placeholder="Subject" className="input input-bordered input-accent w-full" />
                </p>
                
                <textarea className="textarea textarea-accent w-full h-32" placeholder="Message..."></textarea>
                <div className='w-full flex justify-end mt-3'>
                <button className='button' type='submit'>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;