import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import useAxiosPublic from '../hooks/useAxiosPublic';
// import { GoogleAuthProvider } from 'firebase/auth/cordova';


export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic();

// ==================== create User 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

// ====================  User Sign in
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        setLoading(true);
        // return signInWithPopup(auth, googleProvider);
        return signInWithPopup(auth, googleProvider);
    }

// ====================  User Log Out
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

// ====================  User Log Out
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
        // .then(() => {
        //     // profile updated !
        //     // ......
        // }).catch((error) => {
        //     // An error occurred
        //     // .....
        // })
    }


useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        if(currentUser){
            // get token and store client
            const userInfo = {email: currentUser.email}; 
            axiosPublic.post('jwt', userInfo)
            .then(res => {
                if (res.data.token) {
                    localStorage.setItem('access-token', res.data.token);
                    setLoading(false);
                }
            })
        }
        else{
            // do something
            //TODO : remove token (id token stored in the client side : local storage , caching, in memory)
            localStorage.removeItem('access-token');
        }
        setLoading(false);
    });
    return () => {
        return unsubscribe();
    }
}, [axiosPublic])



    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        updateUserProfile
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;