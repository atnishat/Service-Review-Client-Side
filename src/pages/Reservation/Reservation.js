import React from 'react';
import img from '../../asset/banner/reserved.jpg'
import './Reservation.css'

const Reservation = () => {
    return (
        <div className='reservation'>
            <div className='res-img'>
                <img src={img} alt="" />
            </div>
            <div className='res-info'>
            <form  className="card-body">
                    <div className='name'>
                    <div className="form-control" id='firstname'>
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                    </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date and Time</span>
                        </label>
                        <input type="text" name='password' placeholder="date and time" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Person</span>
                        </label>
                        <input type="text" name='password' placeholder="person" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Special Request</span>
                        </label>
                        <input type="text" name='password' placeholder="Special request" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Reserved" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Reservation;