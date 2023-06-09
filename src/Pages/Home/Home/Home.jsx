import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;