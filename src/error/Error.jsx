import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import errImg from "../assets/img/404.gif"
import { FaHome } from "react-icons/fa";
import notFoundImg from "../assets/img/others/authentication.gif"
import useAdmin from "../hooks/useAdmin";
import { TypeAnimation } from "react-type-animation";

const Error = () => {
  // const {user} = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const error = useRouteError();
  console.log(error);



  return (
    <div  className="h-[100vh] bg-[#FAFBFD]">
   <div className="w-full h-[70%] mx-auto  flex justify-center items-center ">
   {
    isAdmin === true ? <img src={errImg} className=" w-[500px] " alt="" />
    :
    <img src={notFoundImg} className=" w-[500px] " alt="" />
   }
   </div>
      <div className="text-center ">
      <div>
      {  isAdmin === true && <div className="text-lg font-medium"> Your Error is : <span className="text-red-500">{error.statusText || error.message} </span></div>
    }
    <div>
    <div>
    <TypeAnimation
    className="text-3xl font-semibold text-[#D99904]"
  sequence={[
    // Same substring at the start will only be typed once, initially
    'Coming Soon.......!',
    2000,
    'Coming ',
    1000,
    'Coming Soon.......!',
    2000,
    'Coming ',
    1000,
  ]}
  speed={{type: 'keyStrokeDelayInMs', value: 250}}
  repeat={Infinity}
  deletionSpeed={50}
/>
    </div>
    </div>
      </div>
      {error.status === 404 && (
        <div className="text-center">
            <Link>
              {" "}
              <button className="btn btn-ghost text-[#FFFFFF] font-semibold uppercase mt-5 bg-gradient-to-r from-[#835D23] to-[#B58130]" to="/">
                {" "}
                back to home
                <FaHome></FaHome>
              </button>{" "}
            </Link>
        </div>
      )}
      </div>
    </div>
  );
};

export default Error;


// {error.status === 404 && (
//     <div className="text-center">
//         <Link>
//           {" "}
//           <button className="btn btn-ghost text-[#FFFFFF] font-semibold uppercase mt-5 bg-gradient-to-r from-[#835D23] to-[#B58130]" to="/">
//             {" "}
//             back to home
//             <FaHome></FaHome>
//           </button>{" "}
//         </Link>
//     </div>
//   )}