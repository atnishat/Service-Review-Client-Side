import React from 'react';
import Chef from '../../Chef/Chef';
import Reservation from '../../Reservation/Reservation';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Reservation></Reservation>
            <Chef></Chef>
            <About></About>
        </div>
    );
};

export default Home;