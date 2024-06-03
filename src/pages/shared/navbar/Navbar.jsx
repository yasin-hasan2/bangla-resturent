import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { IoCartSharp } from "react-icons/io5";
import useCart from '../../../hooks/useCart';

const Navbar = () => {

  const {user, logOut} = useContext(AuthContext);
  const [cart] = useCart();
  // console.log(user)
  // console.log(logOut)
  const handleLogOut = () => {
    logOut()
    .then(() => {})
    .catch(console.error(error));
  }


    const navOption = <>
    <li> <Link to="/" >Home</Link> </li>
    <li> <Link to="/menu" >Our Menu</Link> </li>
    <li> <Link to="/order/salad" >Food Order </Link> </li>
    <li> <Link to="secret" >secret </Link> </li>
    <li> <Link to="/" > 
    <button className="btn">
    <IoCartSharp></IoCartSharp> 
  <div className="badge badge-secondary">+{cart.length}</div>
</button>
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
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navOption}
      </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">Bangla Restaura</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOption}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">{user?.email}</a>
        </div>
      </div>
        </div>
    );
};

export default Navbar;