import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const ServiceCard = ({service}) => {

    const {img ,title,price,_id,facility,description }= service;

    return (
        <div className="card card-compact w-96 bg-base-800 shadow-xl mt-10">
        <figure className='figure-img'><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <div className='flex'>
            <p className='text-2xl text-orange-600 font-semibold'>Price:  {price}</p>
            <h6 className='text-xl text-orange-400 font-semibold ml-5'>Rating:{facility.rating}</h6>
            </div>
            <p className='text-sm text-white-600 font-semibold'>{description}</p>
            <div className="card-actions justify-end">
            <Link to='/services'>
                        <button className="btn btn-primary">See All</button>
                    </Link>
            </div>
        </div>
    </div>
    );
};

export default ServiceCard;