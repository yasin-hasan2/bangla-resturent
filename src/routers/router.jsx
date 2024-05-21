import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/main/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import Order from "../pages/order/Order";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import PrivateRouter from "./PrivateRouter";
import Secret from "../pages/shared/secret/Secret";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element: <Home></Home>
        },
        {
          path:"/menu",
          element: <Menu></Menu>
        },
        {
          path: "/order/:category",
          element: <Order></Order>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/signUp",
          element: <SignUp></SignUp>
        },
        {
          path: "secret",
          element: 
           <PrivateRouter>
              <Secret></Secret>
           </PrivateRouter>
        }

      ]
    },
  ]);