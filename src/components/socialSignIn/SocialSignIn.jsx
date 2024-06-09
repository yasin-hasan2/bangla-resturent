// import React from 'react';
import { FaGoogle, FaPlus } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocialSignIn = () => {
    const {googleSignIn} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res.data);
                navigate('/');
            })
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