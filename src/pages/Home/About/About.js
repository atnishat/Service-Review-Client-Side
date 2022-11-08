import React from 'react';
import chef from '../../../asset/banner/chef3.jpg'
import food from '../../../asset/banner/food.jpg'

const About = () => {
    return (
        <div className="hero my-20">
        <div className="hero-content flex-col lg:flex-row">
            <div className='relative w-1/2'>
                <img src={chef} alt="" className="w-4/5 h-full rounded-lg shadow-2xl" />
                <img src={food}  alt="" className="absolute right-5 top-1/2 w-3/5 border-8 rounded-lg shadow-2xl" />
            </div>
            <div className='w-1/2'>
                <p className="text-2xl font-bold text-orange-600">About Us</p>
                <h1 className="my-5 text-5xl font-bold">
                We try to serve the best<br />
                delicious food quality  <br />
                 with no compromise.</h1>

                <p className="py-6">A perfect hangout place with your family & friend . We try to serve the best quality delicious food with no compromise.. </p>
                <p className="py-6">600 Blue Amphitheatre Parkway, Mountain View, CA 94043, USA. (212) 620 5682; (375) 620 5682,  support@stylemixthemes.net </p>
                <button className="btn btn-primary">Get More Info</button>
            </div>
        </div>
    </div>
    );
};

export default About;