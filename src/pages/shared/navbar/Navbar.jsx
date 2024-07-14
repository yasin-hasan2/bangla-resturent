import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { IoCartSharp } from "react-icons/io5";
import useCart from '../../../hooks/useCart';
import useAdmin from '../../../hooks/useAdmin';
import profile from '../../../../public/profile.png'

const Navbar = () => {

  const {user, logOut} = useContext(AuthContext);
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  // console.log(user)
  // console.log(logOut)
  const handleLogOut = () => {
    logOut()
    .then(() => {})
    .catch(console.error(error));
  }
  // const displayName = user?.displayName;
  // const userProfile = displayName.split('');
  // const profile = userProfile[0]
  // console.log(displayName, userProfile, profile)


    const navOption = <>
    <li> <Link to="/" className='hover:text-[#EEFF25] ' >Home</Link> </li>
    <li> <Link to="/contact" className='hover:text-[#EEFF25] '  >Contact Us</Link> </li>
    {
      // user ? 'true' : 'false' <== ternary operator
      // user ? condition ? 'double true' : 'one true' : 'false' <== nested operator
    }
    {
      user && isAdmin && <li> <Link to="/dashboard/adminHome" className='hover:text-[#EEFF25] '  >Dashboard </Link> </li>
    }
    {
      user && !isAdmin && <li> <Link to="/dashboard/userHome" className='hover:text-[#EEFF25] '  >Dashboard </Link> </li>
    }
    <li> <Link to="/menu" className='hover:text-[#EEFF25] '  >Our Menu</Link> </li>
    <li> <Link to="/order/salad" className='hover:text-[#EEFF25] '  >Food Order</Link> </li>
    <li> 
    {
      user ? <Link to="/dashboard/cart" className='hover:text-[#EEFF25] '  > 
    
    
      <IoCartSharp></IoCartSharp> 
    <div className="badge badge-secondary">+{cart.length}</div>
  
      </Link>
      :
      ''
    }
    </li>
   <li>
   {
    user ? 
    
    <div>
    {/*<span>{user?.displayName}</span>*/}
    <button onClick={handleLogOut}  className='hover:text-[#EEFF25] ' >logOut</button>
    </div>
    :
    <div>
    <li> <Link to="/login" className='hover:text-[#EEFF25] btn btn-outline text-yellow-400'  > Login </Link> </li>
    </div>
  }
   </li>
    </>

    
    
    return (
        <div>
        <div className="navbar fixed z-10 bg-opacity-30 text-white bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm font-semibold dropdown-content mt-3 z-[1] p-2 shadow bg-[#111111db] rounded-box w-52">
        {navOption}
      </ul>
          </div>
          <div className='flex flex-col items-center uppercase'>
          <Link to="/" className="btn btn-ghost text-xl font-bold">Bistro Boss</Link>
          <span >Restaurant</span>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold ">
            {navOption}
          </ul>
        </div>
        {
        user ? <div className="navbar-end flex">
        <img src={user?.photoURL} className="avatar ring-primary ring-offset- w-12 mr-2 rounded-full" alt="" />
          {
         user && isAdmin &&  <Link to="/dashboard/adminHome" > <a className="btn btn-outline uppercase text-white">{user?.displayName}</a> </Link>
          }
          {
         user && !isAdmin &&  <Link to="/dashboard/userHome" > <a className="btn btn-outline uppercase text-white">{user?.displayName}</a> </Link>
          }
        </div>
        : 
        <div></div>
        }
      </div>
        </div>
    );
};

export default Navbar;