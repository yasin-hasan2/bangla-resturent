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
import Dashboard from "../layout/dashboard/Dashboard";
import Cart from "../pages/dashboard/cart/Cart";
import AllUsers from "../pages/dashboard/allUsers/AllUsers";

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
    {
      path: "/dashboard",
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: "cart",
          element: <Cart></Cart>
          
        },
        // admin routes
        {
          path: "users",
          element: <AllUsers></AllUsers>
        }
      ]
    }
    // {
    //   path: '/dashboard',
    //   element: <Dashboard></Dashboard>,
    //   children: [
    //     {
    //       path: '/cart',
    //       element: <Cart></Cart>
    //     }
    //   ]
    // }
  ]);