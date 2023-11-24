import Swal from "sweetalert2";
import SectionTitle from "../../../Components/SectionTitle";
import useMenu from "../../../Hooks/UseMenu";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { Link } from "react-router-dom";


const ManageItems = () => {

    const axiosSecure = useAxiosSecure();
    const [menu, , refetch] = useMenu();


    const handleDelete = id => {
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
                axiosSecure.delete(`/menu/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.acknowledged) {
                            refetch();
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Deleted successfully",
                                showConfirmButton: false,
                                timer: 1500
                              });
                        }
                    })
            }
        });
    }


    return (
        <div>
            <SectionTitle
            heading={'MANAGE ALL ITEMS'}
            subHeading={'---Hurry Up!---'}
            ></SectionTitle>

<> 
            <div className="overflow-x-auto mt-10 rounded-t-lg">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className="bg-[#D1A054] text-white h-16">
                            <th>
                                #
                            </th>
                            <th>ITEM IMAGE</th>
                            <th>ITEM NAME</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            menu?.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-24 h-24">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p className="text-xl font-semibold">{item.name}</p>
                                </td>
                                <td className="text-lg font-bold">${item.price}</td>
                                <th>
                                    <Link to={`/dashboard/updateItem/${item._id}`}>
                                    <button className="btn btn-ghost p-2 bg-[#D1A054] text-white">
                                        <MdOutlineDriveFileRenameOutline className="text-xl "></MdOutlineDriveFileRenameOutline>
                                    </button>
                                    </Link>
                                </th>
                                <th>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-ghost p-2 bg-red-600 text-white">
                                        <RiDeleteBin6Line className="text-xl "></RiDeleteBin6Line>
                                    </button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </>
        </div>
    );
};

export default ManageItems;