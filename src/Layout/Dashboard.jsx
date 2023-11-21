import { FaAd, FaCalendar,  FaHome, FaList, FaListAlt, FaPhone, FaShoppingBag, FaShoppingCart, FaWallet } from "react-icons/fa";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import useCart from "../Hooks/useCart";
import { useEffect } from "react";



const Dashboard = () => {
    const [cart] = useCart();

    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])


    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
            <a href="/" style={{ fontFamily: 'Cinzel' }} className="text-xl"><p className="flex flex-col justify-center items-center my-8"><span className="md:text-2xl lg:text-3xl font-bold">BISTRO BOSS</span> <span className="md:text-xl lg:text-2xl font-bold">R e s t a u r a n t</span></p></a>
                <ul className="menu uppercase text-lg">
                    <li>
                        <NavLink to='/dashboard/userHome'>
                            <FaHome className="text-2xl"></FaHome> User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/reservation'>
                            <FaCalendar className="text-2xl"></FaCalendar> Reservation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/payment'>
                            <FaWallet className="text-2xl"></FaWallet> payment history
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/cart'>
                            <FaShoppingCart className="text-2xl"></FaShoppingCart> Cart ({cart.length})
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/review'>
                            <FaAd className="text-2xl"></FaAd> Add Review
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/bookings'>
                            <FaList className="text-2xl"></FaList> my booking
                        </NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to='/'>
                            <FaHome className="text-2xl"></FaHome> Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/menu'>
                            <FaListAlt className="text-2xl"></FaListAlt> Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/salad'>
                            <FaShoppingBag className="text-2xl"></FaShoppingBag> shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>
                            <FaPhone className="text-2xl"></FaPhone> contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;