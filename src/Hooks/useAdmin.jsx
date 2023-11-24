import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";



const useAdmin = () => {

    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: ["isAdmin"],
        enabled: !loading,
        queryFn: async () => {
            if (user) {
                console.log('in use admin', user)
                const res = await axiosSecure.get(`/users/admin/${user.email}`)
                return res.data?.admin
            }
        }
    })
    return [isAdmin, isAdminLoading];
};

export default useAdmin;