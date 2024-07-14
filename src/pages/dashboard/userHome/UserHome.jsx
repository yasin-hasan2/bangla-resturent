import { FaCalendar, FaMoneyBill, FaShoppingCart, FaStar } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
    const {user } = useAuth();
    return (
        
    <div>
    <h2 className="text-4xl font-semibold mb-4 ml-4">
    <span>Hi, welcome Back!</span>
    <br />
    <h3 className='text-[#D1A054] '>
    {
      user?.displayName ? user.displayName : 'Back'
  }
    </h3>
    </h2>
    <div className="flex flex-col lg:flex-row  items-center">
    <div className=" lg:border-r-2 border-[#D1A054] lg:flex-1 w-full h-96 bg-[#FFEDD5] flex flex-col gap-5 justify-center items-center">
    <div className="rounded-full mx-auto border-2 border-[#D1A054] w-48 h-48 ">
    <img className="rounded-full w-full" src={user?.photoURL} alt="" />
    </div>
    <h2 className="text-4xl font-semibold"> {user?.displayName} </h2>
    </div>


    <div className="  flex-1 border bg-[#FEF9C3] w-full h-96">
    <div className="w-72  mx-auto">
    <h2 className=" text-4xl font-semibold uppercase mt-10" >Your Activities</h2>
    <div className=" mt-12">
    <ul className="grid grid-rows-4 gap-5 ">
    <li className="flex gap-3 items-center text-xl font-semibold uppercase text-[#0088FE] ">
    <FaShoppingCart></FaShoppingCart>
    Order:
    </li>
    <li className="flex gap-3 items-center text-xl font-semibold uppercase text-[#00C4A1] ">
    <FaStar></FaStar>
    Reviews:
    </li>
    <li className="flex gap-3 items-center text-xl font-semibold uppercase text-[#FFBB28] ">
    <FaCalendar></FaCalendar>
    Bookings:
    </li>
    <li className="flex gap-3 items-center text-xl font-semibold uppercase text-[#FF8042] ">
    <FaMoneyBill></FaMoneyBill>
    Payment:
    </li>
    </ul>
    </div>
    </div>
    </div>
    </div>
    </div>
        
    );
};

export default UserHome;