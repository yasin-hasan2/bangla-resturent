import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import errImg from "../assets/img/404.gif"
import { FaHome } from "react-icons/fa";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div  className="h-[100vh]">
   <div className="w-full h-[70%] mx-auto  flex justify-center items-center ">
   <img src={errImg} className=" w-96 " alt="" />
   </div>
      <div className="text-center ">
      <div className="text-lg font-medium"> Your Error is : <span className="text-red-500">{error.statusText || error.message} </span></div>
      {error.status === 404 && (
        <div className="text-center">
            <Link>
            <button className="btn btn-ghost text-[#FFFFFF] font-semibold uppercase mt-5 bg-gradient-to-r from-[#835D23] to-[#B58130]" to="/">
              {" "}
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