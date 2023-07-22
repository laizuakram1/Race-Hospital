import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import ContactUs from '../../Home/ContactUs/ContactUs';


const ContactPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default ContactPage;