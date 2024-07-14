// import React, { useState } from 'react';
import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUser, FaUtensils } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useAdmin from '../../hooks/useAdmin';
import './SideNavBar.css'
import { useContext, useState } from 'react';
import logo from '../../../public/logo.png'
import homeIcon from '../../../public/icons/admin-avatar.svg'
import { IoMdExit } from 'react-icons/io';
import { AuthContext } from '../../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {
  const {user, logOut} = useContext(AuthContext);
  const [cart] = useCart();
  const [isExpended, setExpended] = useState(false);

  // TODO : get isAdmin value from the database
  const [isAdmin] = useAdmin();
  // console.log(isAdmin)

  const handleLogOut = () => {
    logOut()
    .then(() => {})
    .catch(console.error(error));
  }

    return (
      <div>
          <div>
          <Helmet>
          <title>
          Bangla-restaurant || User Dashboard
          </title>
          </Helmet>
          </div>
      <div className='flex'>
      <div
      className={
        isExpended
          ? "side-nav-container"
          : "side-nav-container side-nav-container-NX"
      }
    >
      <div className="nav-upper mb-10">
        <div className="nav-heading">
          {isExpended && (
            <div className="nav-brand border flex items-center pl-4 ">
              <img src={logo} alt="nav brand" />
              <h2 className='text-2xl font-semibold' >Bangla Restaurant</h2>
            </div>
          )}
          <button
            className={
              isExpended ? "hamburger hamburger-in" : "hamburger hamburger-out"
            }
            onClick={() => setExpended(!isExpended)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className='nav-menu' >
        {
          isAdmin ? <>
            <NavLink to="/dashboard/adminHome" >
              <li className={isExpended ? "menu-item " : "menu-item menu-item-NX"}>
                <FaHome></FaHome>
                 {isExpended && <p> Admin Home </p>}
                 {!isExpended && <div className="tooltip"> Admin Home </div>}
              </li>
            </NavLink>
            <NavLink to="/dashboard/addItems" >
              <li className={isExpended ? "menu-item" : "menu-item menu-item-NX"}>
              <FaUtensils ></FaUtensils>
                 {isExpended && <p> Add Items </p>}
                 {!isExpended && <div className="tooltip"> Add Items </div>}
              </li>
            </NavLink>
            <NavLink to="/dashboard/manageItems">
              <li className={isExpended ? "menu-item" : "menu-item menu-item-NX"}>
              <FaList></FaList>
                 {isExpended && <p> Manage Items </p>}
                 {!isExpended && <div className="tooltip"> Manage Items </div>}
              </li>
            </NavLink>
            <NavLink to="/dashboard/bookings" >
              <li className={isExpended ? "menu-item" : "menu-item menu-item-NX"}>
              <FaBook></FaBook>
                 {isExpended && <p> Manage Bookings </p>}
                 {!isExpended && <div className="tooltip"> Manage Bookings</div>}
              </li>
            </NavLink>
            <NavLink to="/dashboard/users" >
              <li className={isExpended ? "menu-item" : "menu-item menu-item-NX"}>
              <FaUser></FaUser>
                 {isExpended && <p> All Users </p>}
                 {!isExpended && <div className="tooltip"> All Users </div>}
              </li>
            </NavLink>
          </>
          :
          <>
          
          <NavLink to="/dashboard/userHome" >
              <li className={isExpended ? "menu-item" : "menu-item menu-item-NX"}>
                <FaHome></FaHome>
                {isExpended && <p> User Home </p>}
                 {!isExpended && <div className="tooltip"> User Home </div>}
              </li>
          </NavLink>
          <NavLink to="/dashboard/History" >
              <li className={isExpended ? "menu-item" : "menu-item menu-item-NX"}>
              <FaCalendar></FaCalendar>
                {isExpended && <p>Payment History</p>}
                 {!isExpended && <div className="tooltip"> Payment History </div>}
              </li>
          </NavLink>
          <NavLink to="/dashboard/cart" >
              <li className={isExpended ? "menu-item" : "menu-item menu-item-NX"}>
              <FaShoppingCart></FaShoppingCart>
                {isExpended && <p> My Cart ({cart.length}) </p>}
                 {!isExpended && <div className="tooltip"> My Cart </div>}
              </li>
          </NavLink>
          <NavLink to="/dashboard/review" >
              <li className={isExpended ? "menu-item" : "menu-item menu-item-NX"}>
              <FaAd></FaAd>
                {isExpended && <p> Review </p>}
                 {!isExpended && <div className="tooltip"> Review </div>}
              </li>
          </NavLink>
          <NavLink to="/dashboard/paymentHistory" >
              <li className={isExpended ? "menu-item" : "menu-item menu-item-NX"}>
              <FaList></FaList>
                {isExpended && <p> Order History </p>}
                 {!isExpended && <div className="tooltip"> Order History </div>}
              </li>
          </NavLink>
          </>
        }
        </div>
        <div className='divider'></div>
        <NavLink to="/" >
              <li className={isExpended ? "menu-item" : "menu-item menu-item-NX"}>
              <FaHome></FaHome>
                {isExpended && <p> Home </p>}
                 {!isExpended && <div className="tooltip"> Home </div>}
              </li>
        </NavLink>
        <NavLink to="/order/salad" >
              <li className={isExpended ? "menu-item" : "menu-item menu-item-NX"}>
              <FaSearch></FaSearch>
                {isExpended && <p> Menu </p>}
                 {!isExpended && <div className="tooltip"> Menu </div>}
              </li>
        </NavLink>
        <NavLink to="/contact" >
              <li className={isExpended ? "menu-item" : "menu-item menu-item-NX"}>
              <FaEnvelope></FaEnvelope>
                {isExpended && <p> Contact </p>}
                 {!isExpended && <div className="tooltip"> Contact </div>}
              </li>
        </NavLink>
        
      </div>
      <div className="nav-footer flex items-center ">
        {isExpended && (
          <div  >
          {
          user || isAdmin ? 
          <div className="nav-details">
            <img src={user?.photoURL}  alt="admin" />
            <div className="nav-footer-info">
              <p className="nav-footer-user-name"> {user.displayName} </p>
              <p className="nav-footer-user-position">
              {
              isAdmin ? <p>Store Admin</p> : <p> Normal User </p>
              }
              </p>
            </div>
          </div>
          :
          <div></div>
          }
          </div>
        )}
        <button onClick={handleLogOut} className=' btn btn-ghost mx-2 bg-[#0091ff] text-3xl hover:text-white'  ><IoMdExit ></IoMdExit></button>
      </div>
      </div>
          <div className='flex-1 p-8 bg-[#F3F3F3]'>
            <Outlet></Outlet>
          </div>
      </div>
      </div>
    );
};

export default Dashboard;