import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";



const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()


    /* lottie loading logo
    <iframe src="https://lottie.host/embed/df945a19-9961-4b2b-8728-2bc686fbc170/YRKwhPONd5.json"></iframe>
/>
    */
    if(loading){
        return <div className="w-24 mx-auto my-80"><span className="loading loading-infinity loading-lg"></span></div>
    }
    if(user){
        return children;
    }

    return <Navigate state={location.pathname} replace to='/login'></Navigate>
};

export default PrivateRoute;