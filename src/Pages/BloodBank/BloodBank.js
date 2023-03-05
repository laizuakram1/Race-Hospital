import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import donor from '../../assets/images/blood-bank/donor.webp'
import donor2 from '../../assets/images/blood-bank/donor2.jpg'
import donor3 from '../../assets/images/blood-bank/donor3.jpg'
import donor4 from '../../assets/images/blood-bank/donor4.jpg'

import '../BloodBank/BloodBank.css'

const BloodBank = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* blood bank slider */}
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src={donor} className="w-full " />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={donor2} className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={donor3} className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={donor4} className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>

            {/* description */}
            <div className="hero bg-base-200">
                <div className="hero-content">
                    <div className="max-w-md">
                        <h1 className="text-2xl font-bold">What is Blood Banking?</h1>
                        <p className="py-6">Blood banking is the process that takes place in the lab to make sure that donated blood, or blood products, are safe before they are used in blood transfusions and other medical procedures. Blood banking includes typing the blood for transfusion and testing for infectious diseases.</p>
                        <button className="button">Know more</button>
                    </div>
                </div>
            </div>

            <div className='blood-bank-description w-full p-7'>
                <h1 className='text-2xl bold'>Facts about blood banking</h1>
                According to the American Association of Blood Banks as of 2013:
                <br />
                <br />

                <p>&#187; About 36,000 units of blood are needed every day.</p>

                <p>&#187; The number of blood units donated is about 13.6 million a year.</p>

                <p>&#187; About 6.8 million volunteers are blood donors each year.
                </p>
                <p>&#187; Each unit of blood is broken down into components, such as red blood cells, plasma, cryoprecipitated AHF, and platelets. One unit of whole blood, once it's separated, may be transfused to several patients, each with different needs.
                </p>
                <p>&#187; Annually, more than 21 million blood components are transfused.</p>
                <br />
                <br />

                <h1 className='text-2xl bold'>Who are the blood donors?</h1>
                <p>
                Most blood donors are volunteers. However, sometimes, a patient may want to donate blood a couple of weeks before undergoing surgery, so that his or her blood is available in case of a blood transfusion. Donating blood for yourself is called an autologous donation. Volunteer blood donors must pass certain criteria, including the following:
                </p>
                <br />
                
                <p>&#187; Must be at least 16 years of age, or in accordance with state law </p>
                <p>&#187; Must be in good health </p>
                <p>&#187; Must weigh at least 110 pounds </p>
                <p>&#187; Must pass the physical and health history exam given before donation </p>

            </div>
        </div>
    );
};

export default BloodBank;