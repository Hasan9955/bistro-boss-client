import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {

    const location = useLocation();

    const hideNavFooter = location.pathname.includes('login')

    return (
        <div>
            {hideNavFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {hideNavFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;