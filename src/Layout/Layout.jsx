import { Outlet } from "react-router-dom";



const Layout = () => {
    return (
        <div className="w-4/6 mx-auto font-Poppins">
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;