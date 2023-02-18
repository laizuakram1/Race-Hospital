import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import AppointmentIntro from './AppointmentIntro/AppointmentIntro';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import Tag from './Tag/Tag';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Tag></Tag>
            <Services></Services>
            <AppointmentIntro></AppointmentIntro>
            
        </div>
    );
};

export default Home;