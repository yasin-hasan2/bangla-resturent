// import React from 'react';

import PopularMenu from "../popularMenu/PopularMenu";
import Banner from "./banner/Banner";
import Category from "./category/Category";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;