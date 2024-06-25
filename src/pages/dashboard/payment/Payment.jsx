// import React from 'react';

import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";



// const stripePromise = loadStripe('');


const Payment = () => {
    return (
        <div>
            <SectionTitle heading="Payment" subHeading="Please pay to eat" ></SectionTitle>

            <div>
            <h1> payment system </h1>
            </div>
        </div>
    );
};

export default Payment;