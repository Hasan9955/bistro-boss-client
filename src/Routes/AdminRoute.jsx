import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";



const AdminRoute = ({children}) => {

    const [isAdmin, isAdminLoading] = useAdmin();
    const { user, loading } = useAuth();
    const location = useLocation()


    if (loading || isAdminLoading) {
        return <div className="w-24 mx-auto my-80"><span className="loading loading-infinity loading-lg"></span></div>
    }
    if (user && isAdmin) {
        return children;
    }

    return <Navigate state={location.pathname} replace to='/'></Navigate>

};

export default AdminRoute;