// import React from 'react';

import axios from "axios";

const axiosPublic = axios.create(
    {
        baseURL: 'https://bistro-boss-server-nine-gules.vercel.app'
    }
);

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;