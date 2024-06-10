import React from 'react';
import { FaAd, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaVoicemail } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const Dashboard = () => {
  const [cart] = useCart();
  // TODO : get isAdmin value from the database
  const isAdmin = true;
    return (
        <div className='flex'>
    

            <div className='w-64 min-h-full bg-orange-400'>
            <ul className="menu">
             <li>
              <NavLink to="/dashboard/userHome" >
               <FaHome></FaHome>
                User Home
              </NavLink>
            </li>
             <li>
              <NavLink to="/dashboard/reservation" >
               <FaCalendar></FaCalendar>
                Reservation
              </NavLink>
            </li>
             <li>
              <NavLink to="/dashboard/cart" >
               <FaShoppingCart></FaShoppingCart>
                My Cart ({cart.length})
              </NavLink>
            </li>
             <li>
              <NavLink to="/dashboard/review" >
               <FaAd></FaAd>
                Review
              </NavLink>
            </li>
             <li>
              <NavLink to="/dashboard/bookings" >
               <FaList></FaList>
                Booking
              </NavLink>
            </li>
            {/* shard nav links */}
            <div className='divider'></div>
            <li>
              <NavLink to="/" >
               <FaHome></FaHome>
                User Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/order/salad" >
               <FaSearch></FaSearch>
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/order/contact" >
               <FaEnvelope></FaEnvelope>
                Contact
              </NavLink>
            </li>
            </ul>
            </div>
    
            
            <div className='flex-1 p-8'>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;