import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';



const AppointmentBanner = ({selectedDate, setSelectedDate}) => {

    return (

        <div>
            <div className="hero max-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse w-full justify-evenly">
                    <div>
                    <img src={chair} alt='doctor chair' className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div>
                        <DayPicker 
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;