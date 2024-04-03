import React from 'react';
import './Footer.css';
import { FaClock, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { ImLocation2 } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="footer" fixed='bottom'>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h4 className='footerh4'>Contact Us</h4>
            <p>Glamours</p>
            <p><ImLocation2 />Address: Jalgaon, Maharashtra</p>
            <p><FaPhoneAlt />Phone: +9096201200</p>
            <p><FaEnvelope/>Email: glamours@gmail.com</p>
          </div>
          <div className="col-md-3 followus-ft"> {/* Adjusted column width */}
            <h4>Follow us</h4>
            <ul>
              <li><a href="https://www.facebook.com/beautyparlour" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://whatsapp.com/beauty parlour" target="_blank" rel="noopener noreferrer">Whatsapp</a></li>
              <li><a href="https://www.instagram.com/beauty parlour" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
          <div className="col-md-3 aboutus-ft"> {/* Adjusted column width */}
            <h4 className='footerh4'>About Us</h4>
            <p>Welcome to Glamours, your destination for beauty and wellness. Our expert team offers personalized services to enhance your natural beauty and leave you feeling rejuvenated.</p>
          </div>
          <div className="col-md-3"> {/* Adjusted column width */}
            <h4 className='footerh4'>Operating Hours</h4>
            <p><FaClock/>Monday - Friday: 10:00 AM - 4:00 PM</p>
            <p><FaClock/>Saturday - Sunday: 11:00 AM - 3:00 PM</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 glamours. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
