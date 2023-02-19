import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentIntro from '../AppointmentIntro/AppointmentIntro';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';
import Tag from '../Tag/Tag';
import Testmonial from '../Testmonial/Testmonial';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Tag></Tag>
            <Services></Services>
            <AppointmentIntro></AppointmentIntro>
            <Testmonial></Testmonial>
            <Doctors></Doctors>
            <ContactUs></ContactUs>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;