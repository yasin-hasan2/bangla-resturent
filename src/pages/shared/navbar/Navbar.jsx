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
    <li> <Link to="/" >Home</Link> </li>
    <li> <Link to="/menu" >Contact Us</Link> </li>
    {
      // user ? 'true' : 'false' <== ternary operator
      // user ? condition ? 'double true' : 'one true' : 'false' <== nested operator
    }
    {
      user && isAdmin && <li> <Link to="/dashboard/adminHome" >Dashboard </Link> </li>
    }
    {
      user && !isAdmin && <li> <Link to="/dashboard/userHome" >Dashboard </Link> </li>
    }
    <li> <Link to="/menu" >Our Menu</Link> </li>
    <li> <Link to="/order/salad" >Food Order </Link> </li>
    <li> <Link to="/dashboard/cart" className=" " > 
    
    Our Shop
    <IoCartSharp></IoCartSharp> 
  <div className="badge badge-secondary">+{cart.length}</div>

    </Link> </li>
   <li>
   {
    user ? 
    
    <div>
    {/*<span>{user?.displayName}</span>*/}
    <button onClick={handleLogOut}  >logOut</button>
    </div>
    :
    <div>
    <li> <Link to="/login" > Login </Link> </li>
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
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#111111db] rounded-box w-52">
        {navOption}
      </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl uppercase">Bangla Restaura</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            {navOption}
          </ul>
        </div>
        {
        user ? <div className="navbar-end flex">
        <img src={user?.photoURL} className="avatar ring-primary ring-offset- w-12 mr-2 rounded-full" alt="" />
          <a className="btn btn-outline uppercase ">{user?.displayName}</a>
        </div>
        : 
        <div></div>
        }
      </div>
        </div>
    );
};

export default Navbar;