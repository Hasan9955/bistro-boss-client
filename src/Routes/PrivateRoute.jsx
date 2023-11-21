import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";



const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()


    if(loading){
        return <div className="w-24 mx-auto my-80"><span className="loading loading-infinity loading-lg"></span></div>
    }
    if(user){
        return children;
    }

    return <Navigate state={location.pathname} replace to='/login'></Navigate>
};

export default PrivateRoute;