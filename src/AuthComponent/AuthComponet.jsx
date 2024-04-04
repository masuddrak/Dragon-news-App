import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Firebase/Firebase.config";

export const authContext = createContext()
const AuthComponet = ({ children }) => {
    const [user,setUser]=useState(null)
    const [firebaseLoader,setFirebaseLoader]=useState(true)
    const createUser = (email, password) => {
        setFirebaseLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser=(email,password)=>{
        setFirebaseLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut=()=>{
        setFirebaseLoader(true)
        return signOut(auth)
    }
    useEffect(()=>{
       const observID= onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            setUser(currentUser)
            setFirebaseLoader(false)
        })
        return(()=>{
            observID()
        })
    },[])
    const authInfo = { createUser,loginUser,logOut ,user,firebaseLoader}
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthComponet;
AuthComponet.propTypes = {
    children: PropTypes.node,
}
