import React from 'react';
import logo from '../../../asset/logo.jpg'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer p-32  text-white">
            <div className='footer-img'>
                <img src={logo} alt="" />
                <p>Snacks Line Restaurant<br/>Providing reliable food since 1992</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a href="/"className="link link-hover">Food</a>
                <a href="/"className="link link-hover">Reservation</a>
                <a href="/"className="link link-hover">Booking</a>
                <a href="/"className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Restaurant</span>
                <a href="/"className="link link-hover">About us</a>
                <a href="/"className="link link-hover">Contact</a>
                <a href="/"className="link link-hover">Jobs</a>
                <a href="/"className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a href="/"className="link link-hover">Terms of use</a>
                <a href="/"className="link link-hover">Privacy policy</a>
                <a href="/"className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;