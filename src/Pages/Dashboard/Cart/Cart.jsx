import useCart from "../../../Hooks/useCart";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from 'sweetalert2';
import { AxiosBase } from "../../../Hooks/useAxiosSecure";


const Cart = () => {
    const [cart, refetch] = useCart();

    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

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
                AxiosBase.delete(`/carts/${id}`)
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
            <div className="flex justify-evenly items-center">
                <h2 className="text-2xl">Items: {cart.length}</h2>
                <h2 className="text-2xl">Total Price: ${totalPrice}</h2>
                <button className="btn btn-primary ">Process to checkout</button>
            </div>
            <div className="overflow-x-auto mt-10">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            cart.map((item, index) => <tr key={item._id}>
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
                                    <p className="text-xl font-semibold">{item.menuName}</p>
                                </td>
                                <td className="text-lg font-bold">${item.price}</td>
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


    );
};

export default Cart;