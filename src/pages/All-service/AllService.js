import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import AllserviceCard from './AllserviceCard';

const AllService = () => {

    const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data) );
    },[])
    
    return (
        <div>
            <Header></Header>






            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="text-5xl font-semibold">Our special Service </h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>



            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
             
                {
                    services.map(service => <AllserviceCard
                    key={service._id}
                    service={service}
                    ></AllserviceCard>)

                }
            </div>











            <Footer></Footer>
        </div>
    );
};

export default AllService;