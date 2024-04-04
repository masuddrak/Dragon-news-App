import { useContext } from "react";
import { authContext } from "../AuthComponent/AuthComponet";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, firebaseLoader } = useContext(authContext)
    const location=useLocation()
    
    console.log(location)
    if (firebaseLoader) {
        return <div className="flex justify-center mt-48"><div><span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span></div></div>
    }
    if (user) {
        return children
    }
    return (
        <Navigate state={location.pathname} to="/login"></Navigate>
    );
};

export default PrivateRoute;