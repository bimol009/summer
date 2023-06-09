import React from 'react';
import { Outlet } from 'react-router-dom';
import DanceSection from '../../DanceSection/DanceSection';
import Banner from '../Banner/Banner';
import Instructor from './../Instructor/Instructor';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Instructor></Instructor>
            <DanceSection></DanceSection>
        </div>
    );
};

export default Home;