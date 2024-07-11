// import React from 'react';
import { FaGoogle } from 'react-icons/fa';
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
            <div className="flex justify-center m-4">
            <button onClick={handleGoogleSignIn} className="btn btn-outline text-black rounded-full">
            <FaGoogle></FaGoogle>
            </button>
            </div>
        </div>
    );
};

export default SocialSignIn;