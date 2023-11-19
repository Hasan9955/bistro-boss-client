import { NavLink } from "react-router-dom";




const Navbar = () => {



    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/contact'>CONTACT US</NavLink></li>
        <li><NavLink to='/dashboard'>DASHBOARD</NavLink></li>
        <li><NavLink to='/menu'>OUR MENU</NavLink></li>
        <li><NavLink to='/order/salad'>Order Food</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
    </>


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
                <a style={{fontFamily: 'Cinzel'}} className="text-xl"><p className="flex flex-col justify-center items-start"><span className="md:text-2xl lg:text-3xl font-bold">BISTRO BOSS</span> <span className="md:text-xl lg:text-2xl font-bold">R e s t a u r a n t</span></p></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;