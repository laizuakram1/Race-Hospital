import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Banner from './Banner/Banner';
import Tag from './Tag/Tag';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Tag></Tag>
            
        </div>
    );
};

export default Home;