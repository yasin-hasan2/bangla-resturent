// import React from 'react';

import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../pages/shared/footer/Footer";
import Navbar from "../../pages/shared/navbar/Navbar";

const Main = () => {
    const location = useLocation();
    console.log(location)
    const noHeaderFooter = location.pathname.includes('login')
    return (
        <div>
            {noHeaderFooter ||  <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;