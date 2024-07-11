import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
        <footer className='footer p-10 bg-neutral  text-white  lg:h-80'>
        <div  className='flex w-full flex-col lg:flex-row'>
          <div className=' w-2/4  flex justify-center   pt-6  '>
          <div className='text-center space-y-4'>
          <h3 className='text-3xl mb-3'>CONTACT US</h3>
          <p>123 ABS Street, Uni 21, Bangladesh</p>
          <p>+88 123456789</p>
          <p>Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
          </div>
          <div className=' w-2/4  flex justify-center   pt-6  '>
          <div className='text-center space-y-4'>
          <h3 className='text-3xl mb-3'>Follow US</h3>
          <p>Join us our social media</p>
          <div className='text-4xl flex gap-5'>
          <FaFacebook></FaFacebook>
          <FaInstagram></FaInstagram>
          <FaTwitter></FaTwitter>
          </div>
          </div>
          </div>
        </div>
        </footer>
        <aside className='bg-base-200 text-gray-400 h-10 text-center font-light'>
      <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
    </aside>
        </div>
    );
};

export default Footer;