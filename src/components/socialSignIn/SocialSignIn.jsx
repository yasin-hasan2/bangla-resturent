// import React from 'react';
import { FaGoogle, FaPlus } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';

const SocialSignIn = () => {
    const {googleSignIn} = useAuth();

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user);
        } )
    }
    return (
        <div>
        <div className="divider"></div>
            <div className="flex justify-center mb-2">
            <button onClick={handleGoogleSignIn} className="btn btn-outline">
            <FaGoogle></FaGoogle>
            <FaPlus></FaPlus>
            google
            </button>
            </div>
        </div>
    );
};

export default SocialSignIn;