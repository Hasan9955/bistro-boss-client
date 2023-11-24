import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { IoWalletOutline } from "react-icons/io5";
import { MdGroups2, MdOutlineRestaurantMenu } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";


const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats, isLoading } = useQuery({
        queryKey: ['admin-status'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-state')
            return res.data
        }
    })

    if (isLoading) {
        return <iframe className="w-56 mx-auto my-64" src="https://lottie.host/embed/df945a19-9961-4b2b-8728-2bc686fbc170/YRKwhPONd5.json"></iframe>
    }


    return (
        <div>
            <h2 className="text-3xl">Hi <span>{user?.displayName}</span>, Welcome Back!</h2>



            {
                stats && <div className="stats shadow flex justify-center items-center mt-5">

                    <div className="stat flex justify-center items-center bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF]">
                             <IoWalletOutline className="text-6xl"></IoWalletOutline>
                        <div className="stat-figure ">
                        <div className="text-3xl font-extrabold">{stats.totalRevenue}</div> 
                        <div className="text-xl ">Revenue</div>
                        </div>
                    </div>

                    <div className="stat flex justify-center items-center bg-gradient-to-r from-[#D3A256] to-[#FDE8C0]">
                             <MdGroups2 className="text-6xl"></MdGroups2>
                        <div className="stat-figure ">
                        <div className="text-3xl font-extrabold">{stats.totalUser}</div> 
                        <div className="text-xl ">Customers</div>
                        </div>
                    </div>

                    <div className="stat flex justify-center items-center bg-gradient-to-r from-[#FE4880] to-[#FECDE9]">
                             <MdOutlineRestaurantMenu className="text-6xl"></MdOutlineRestaurantMenu>
                        <div className="stat-figure ">
                        <div className="text-3xl font-extrabold">{stats.totalMenu}</div> 
                        <div className="text-xl ">Products</div>
                        </div>
                    </div>

                    <div className="stat flex justify-center items-center bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF]">
                             <CiDeliveryTruck className="text-6xl"></CiDeliveryTruck>
                        <div className="stat-figure ">
                        <div className="text-3xl font-extrabold">{stats.totalOrder}</div> 
                        <div className="text-2xl ">Orders</div>
                        </div>
                    </div>

                </div>
            }

            <h3 className="text-2xl text-center mt-10">TODO: Finish the admin dashboard and implement charts</h3>
        </div>
    );
};

export default AdminHome;