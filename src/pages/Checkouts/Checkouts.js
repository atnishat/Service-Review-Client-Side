import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Authprovider/AuthProvider';
import './Checkout.css';

const Checkouts = () => {
    const { _id, img,title, price,facility ,description} = useLoaderData();
    const {user} = useContext(AuthContext);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const rating = form.rating.value;
        const message = form.message.value;
    
    
        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
           rating,
            message
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert('Thanks For your review')
                form.reset();
            }
        })
        .catch(er => console.error(er));
    
    }

    return (
        <div>
           <form onSubmit={handlePlaceOrder} >
                <div  className="form-info">
                <h2 className="text-4xl">Service Section: {title}</h2>
                <figure className='figure-images'><img src={img} alt="Shoes" /></figure>
                <h4 className="text-3xl text-orange-400">Price: {price}</h4>
                <h6 className='text-xl text-orange-400 font-semibold ml-5'>Rating:{facility.rating}</h6>
                <p className='text-sm text-white-600 font-semibold'>Description : {description}</p>
                </div>
                
               
               <p className="text-4xl font-bold text-orange-600" id='heading-text'>Add a review here</p>
               <div id='review-section'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4' id='info'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-3/4 mt-10  input-bordered" />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-3/4  mt-10 input-bordered"/>
                    <input name="rating" type="text" placeholder="Rating" className="input input-ghost w-3/4  mt-10 input-bordered" required />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-3/4  mt-10  input-bordered" readOnly />
                </div>
                <textarea id='reviews' name="message" className="textarea textarea-bordered h-24 w-3/4" placeholder="please write your review" required></textarea>

                <input className='btn' id='order' type="submit" value="Submit" />
                </div>
             
            </form>
        </div>
    );
};

export default Checkouts;