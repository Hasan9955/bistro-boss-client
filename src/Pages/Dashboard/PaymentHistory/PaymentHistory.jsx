import SectionTitle from "../../../Components/SectionTitle";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState } from 'react';


const PaymentHistory = () => {

    const { user } = useAuth();
    const [items, setItems] = useState();
    const axiosSecure = useAxiosSecure();
    axiosSecure.get(`/payments/${user.email}`)
        .then(res => {
            setItems(res.data)
            console.log(res.data)
        })
    return (
        <div>
            {
                items && <div>
                    {
                        items.length > 0 ? <div>
                            <SectionTitle
                                heading={'PAYMENT HISTORY'}
                                subHeading={'---At a Glance!---'}
                            ></SectionTitle>
                            <div className="p-4 ">
                            <h2 className="text-3xl ">Total Payments: {items.length}</h2>
                            <div className="overflow-x-auto mt-10 rounded-t-xl">
                                <table className="table w-full">
                                    {/* head */}
                                    <thead className="bg-[#D1A054] text-white h-16 uppercase text-md">
                                        <tr>
                                            <th>Email</th>
                                            <th>TOTAL Price</th>
                                            <th>Payment Date</th>
                                            <th>Transaction Id</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {

                                            items.map((item) => <tr key={item._id}>

                                                <td><p className="text-lg font-semibold">{item.email}</p></td>
                                                <td className="">${item.price}</td>
                                                <td className="">{item.date}</td>
                                                <td className="">{item.transactionId}</td>
                                                <td className="">{item.status}</td>

                                            </tr>)
                                        }

                                    </tbody>
                                </table>
                            </div>
                            </div>
                        </div> : <div className="p-5 font-bold text-center text-4xl bg-gradient-to-r to-purple-200 from-purple-800">
                            You Payment History is Empty!!!
                        </div>
                    }
                </div>

            }
        </div>
    );
};

export default PaymentHistory;