import React from 'react';
import './BannerItem.css'

const BannerItem = ({slide}) => {

    const {image, id, prev, next} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className='carousel-img'>
            <img src={image} alt="" id='img-carasol' className="" />
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
            <h1 className='text-6xl font-bold text-white'>
                Snack'es <br />
                Lane <br />
                Restaurant
            </h1>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
            <p className='text-xl text-white'>Get some fresh ans delicious food from our restaurant. We are waiting to serve you.</p>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
            <button className="btn btn-warning mr-5">Reservation</button>
            <button className="btn btn-outline btn-warning">Reservation</button>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
            <a href={`#slide${next}`} className="btn btn-circle">❯</a>
        </div>
    </div>
    );
};

export default BannerItem;