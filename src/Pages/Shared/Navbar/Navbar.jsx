import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useContext } from 'react'
import { BsCart4 } from "react-icons/bs";
import useCart from "../../../Hooks/useCart";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    const [cart] = useCart()


    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/contact'>CONTACT US</NavLink></li>
        <li><NavLink to='/dashboard'>DASHBOARD</NavLink></li>
        <li><NavLink to='/menu'>OUR MENU</NavLink></li>
        <li><NavLink to='/order/salad'>Order Food</NavLink></li>
        <li>
            <Link to='/dashboard/cart'>
                <button className="btn btn-circle bg-green-600 relative">
                    <BsCart4 className="text-white text-2xl"></BsCart4>
                    <div className="badge badge-secondary absolute top-0 -right-8">+{cart.length}</div>
                </button>
            </Link>
        </li>

    </>

    const handleLogOut = () => {
        logOut()
            .then(() => {
                alert('successfully log out')
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="navbar fixed z-[10] bg-opacity-60 bg-black max-w-screen-xl text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a href="/" style={{ fontFamily: 'Cinzel' }} className="text-xl"><p className="flex flex-col justify-center items-start"><span className="md:text-2xl lg:text-3xl font-bold">BISTRO BOSS</span> <span className="md:text-xl lg:text-2xl font-bold">R e s t a u r a n t</span></p></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal items-center flex px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <button className="btn bg-[#D1A054] border-0 text-white" onClick={handleLogOut}>SIGN OUT</button> : <button className="btn bg-[#D1A054] border-0 text-white"><Link to='/login'>LOGIN</Link></button>
                }
            </div>
        </div>
    );
};

export default Navbar;