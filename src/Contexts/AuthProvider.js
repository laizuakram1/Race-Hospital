import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/Firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const verifyEmail = ()=>{
        return sendEmailVerification(auth?.currentUser);
    }

    const updateUser = (userInfo) =>{
        return updateProfile(auth?.currentUser, userInfo)
    }

    const userLogin = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const LogOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log('user observing.....')
            setUser(currentUser);
        })
        return ()=> unSubscribe();
    },[])

    const authInfo = {
        createUser,
        userLogin,
        LogOut,
        updateUser,
        verifyEmail,
        user,
        auth
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;