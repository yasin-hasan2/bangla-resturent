// import React from 'react';


import CallUs from "../shared/callUs/CallUs";
import Featured from "../featured/Featured";
import PopularMenu from "../popularMenu/PopularMenu";
import Banner from "./banner/Banner";
import Category from "./category/Category";
import Testimonials from "./testimonials/Testimonials";
import { Helmet} from 'react-helmet-async';



const Home = () => {
    return (
        <div  > 
        <Helmet>
        <title>
        Bangla-restaurant || Home
        </title>
        </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;