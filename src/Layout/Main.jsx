import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { useEffect } from 'react';

const Main = () => {

    const location = useLocation();
    useEffect(() =>{
        window.scrollTo(0, 0)
    },[location.pathname])

    const hideNavFooter = location.pathname.includes('login')  || location.pathname.includes('signUp')

    
    return (
        <div>
            {hideNavFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {hideNavFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;