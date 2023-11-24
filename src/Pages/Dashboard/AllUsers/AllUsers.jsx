import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaUserShield } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";



const AllUsers = () => {


    const axiosSecure = useAxiosSecure();
    
    const { refetch, data: users } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;

        }
    })

    const handleRole = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Make this user as admin",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.acknowledged) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Updated successfully!",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            refetch();
                        }
                    })
            }
        });
    }

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.acknowledged) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Deleted successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            refetch();
                        }
                    })
            }
        });
    }

    return (
        <>
            <div>
                <SectionTitle
                    heading={'MANAGE ALL USERS'}
                    subHeading={'---How many??---'}
                ></SectionTitle>
            </div>
            <div className="flex justify-evenly items-center">
                <h2 className="text-2xl">All Users</h2>
                <h2 className="text-2xl">Total users: {users?.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr className="uppercase">
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, ind) => <tr key={user._id}>
                                <th>{ind + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.role === 'admin' ? <span className="text-green-500 font-bold">Admin</span> : <button onClick={() => handleRole(user._id)} className="btn btn-ghost p-2 bg-[#D1A054] text-white">
                                        <FaUserShield className="text-xl ">
                                        </FaUserShield>
                                    </button>}
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(user._id)} className="btn btn-ghost p-2 bg-red-600 text-white">
                                        <RiDeleteBin6Line className="text-xl "></RiDeleteBin6Line>
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </>
    );
};

export default AllUsers;