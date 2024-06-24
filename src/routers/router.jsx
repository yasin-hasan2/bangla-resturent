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
import AddItems from "../pages/dashboard/addItem/AddItems";
import AdminRoute from "../routers/AdminRoute"
import ManageItems from "../pages/dashboard/manageItems/ManageItems";
import UpdateItem from "../pages/dashboard/updateItem/UpdateItem";
import Payment from "../pages/dashboard/payment/Payment";

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
        // normal user routes
        {
          path: "cart",
          element: <Cart></Cart>
          
        },
        {
          path: "payment",
          element: <Payment></Payment>
        },
        // admin only  routes
        {
          path: "addItems",
          element: <AdminRoute> <AddItems></AddItems> </AdminRoute>
        },
        {
          path: 'manageItems',
          element: <AdminRoute> <ManageItems></ManageItems> </AdminRoute>
        },
        {
          path: 'updateItem/:id',
          element: <AdminRoute> <UpdateItem></UpdateItem> </AdminRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
        },

        {
          path: "users",
          element: <AdminRoute> <AllUsers></AllUsers> </AdminRoute>
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