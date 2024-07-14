// import React from 'react';
import { FaClock, FaPhone } from 'react-icons/fa';
import contactCover from '../../assets/img/contact/banner.jpg';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import Cover from '../shared/cover/Cover';
import { FaLocationDot } from 'react-icons/fa6';
import From from './From';
import { Helmet } from 'react-helmet-async';

const ContactUs = () => {
    return (
        <div>
        <div>
          <Helmet>
          <title>
          Bangla-restaurant || Contact Us
          </title>
          </Helmet>
          </div>
        <Cover ideas={"Would you like to try a dish?"} img={contactCover} title={"Contact Us"} ></Cover>
        <SectionTitle
           subHeading={"---Visit Us---"} heading={"OUR LOCATION"}
           >
           </SectionTitle>
           <div className='w-4/5  mx-auto grid gap-4 lg:grid-cols-3 mt-10 mb-32'>
           <div className='border h-[240px] w-full'>
           <div className=' h-11 bg-[#D1A054] py-2 flex justify-center items-center text-white '>
           <FaPhone></FaPhone>
           </div>
           <div className='flex justify-center items-center gap-3 rounded-b-lg flex-col bg-gray-300 w-72 mx-auto text-center border h-[150px]'>
           <h4 className='font-semibold'>PHONE</h4>
           <p>+38 (012) 34 56 789</p>
           </div>
           </div>
           <div className='border h-[240px] w-full'>
           <div className=' h-11 bg-[#D1A054] py-2 flex justify-center items-center text-white '>
           <FaLocationDot></FaLocationDot>
           </div>
           <div className='flex justify-center items-center gap-3 rounded-b-lg flex-col bg-gray-300 w-72 mx-auto text-center border h-[150px]'>
           <h4 className='font-semibold'>ADDRESS</h4>
           <p>+38 (012) 34 56 789</p>
           </div>
           </div>
           <div className='border h-[240px] w-full'>
           <div className=' h-11 bg-[#D1A054] py-2 flex justify-center items-center text-white '>
           <FaClock></FaClock>
           </div>
           <div className='flex justify-center items-center  rounded-b-lg flex-col bg-gray-300 w-72 mx-auto text-center border h-[150px]'>
           <h4 className='font-semibold mb-3'>WORKING HOURS</h4>
           <p>Mon - Fri: 08:00 - 22:00</p>
           <p>Sat - Sun: 10:00 - 23:00</p>
           </div>
           </div>
           </div>
           <SectionTitle  subHeading={"---Send Us a Message---"} heading={"CONTACT FORM"}></SectionTitle>
           <div className='lg:w-4/5 mx-auto border mb-20 bg-[#F3F3F3] '>
           <From></From>
           </div>
        </div>
    );
};

export default ContactUs;<h1>contact us</h1>