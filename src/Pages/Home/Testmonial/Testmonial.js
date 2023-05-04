import React from 'react';
import '../Testmonial/Testmonial.css';
import people from '../../../assets/images/people1.png';

const Testmonial = () => {
    return (
        <div className='p-8 mt-10 testmonial-bg'>
            <p className='text-lg font-bold text-teal-300 mb-3 ml-3'>TESTMONIAL</p>
            <h3 className='text-3xl font-bold mb-5 ml-2'>Patient Says</h3>
            <div className='review-container grid md:grid-cols-3 gap-3 ml-10'>
                <div className='review'>
                    <p className='my-7 text-sm'>Really, they provide good service and friendly attitude with patient and others person.If I tell about their Hospital environment that's awesome.</p>
                    <div className='flex items-center'>
                        <div className='mr-5 border-4 border-cyan-400 rounded-full p-0.5'>
                            <img className='w-16 h-16 ' src={people} alt="patient" />
                        </div>
                        <div>
                            <h3 className='font-bold text-teal-300'>Alex</h3>
                            <p>USA</p>
                        </div>
                    </div>
                </div>
                <div className='review'>
                    <p className='my-7 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione iste ea incidunt dolores neque dolorum, nisi eius a qui iusto minus velit placeat asperiores cum?</p>
                    <div className='flex items-center'>
                        <div className='mr-5 border-4 border-cyan-400 rounded-full p-0.5'>
                            <img className='w-16 h-16 ' src={people} alt="patient" />
                        </div>
                        <div>
                            <h3 className='font-bold text-teal-300'>Brandon</h3>
                            <p>California</p>
                        </div>
                    </div>
                </div>
                <div className='review'>
                    <p className='my-7 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione iste ea incidunt dolores neque dolorum, nisi eius a qui iusto minus velit placeat asperiores cum?</p>
                    <div className='flex items-center'>
                        <div className='mr-5 border-4 border-cyan-400 rounded-full p-0.5'>
                            <img className='w-16 h-16 ' src={people} alt="patient" />
                        </div>
                        <div>
                            <h3 className='font-bold text-teal-300'>Johnny</h3>
                            <p>Canada</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Testmonial;