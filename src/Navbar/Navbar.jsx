import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Logout Successful')
            })
            .catch(() => {
                toast.error('Logout Unsuccessful')
            })
    }

    return (
        <div className="flex flex-col lg:flex-row justify-between mx-auto container items-center my-3 md:my-4 space-y-5 lg:space-y-0">
            <div className="flex items-center">
                <img className="w-[36px]" src="https://image.similarpng.com/very-thumbnail/2021/05/Letter-D-logo-design-template-with-geometric-shape-style-on-transparent-background-PNG.png" alt="" />
                <h1 className="text-4xl font-extrabold">ream<span className="">Tech</span></h1>
            </div>
            <div className="flex gap-12 items-center">
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-[#DD2955] py-1 px-3 md:py-2 md:px-5 rounded-lg text-xl text-white font-medium" : ""
                    }
                >
                    <button className="text-xl font-bold">Home</button>
                </NavLink>
                <NavLink
                    to="/addProduct"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-[#DD2955] py-1 px-2 md:py-2 md:px-5 rounded-lg text-xl text-white font-medium" : ""
                    }
                >
                    <button className="text-xl font-bold">Add Product</button>
                </NavLink>
                <NavLink
                    to="/myCart"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-[#DD2955] py-1 px-3 md:py-2 md:px-5 rounded-lg text-xl text-white font-medium" : ""
                    }
                >
                    <button className="text-xl font-bold">My Cart</button>
                </NavLink>
            </div>
            <div>
                {user ? <div className="flex flex-col md:flex-row gap-5 items-center">
                    <h1 className="text-black text-lg font-medium font-poppins">{user.displayName}</h1>
                    <span><button onClick={handleLogOut} className="text-lg text-white font-medium bg-[#DD2955] py-2 px-4 lg:px-6 rounded-lg">LogOut</button></span>
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={user?.photoURL} alt="" />
                        </div>
                    </label>
                </div>
                    : <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-lg text-white font-medium bg-[#DD2955] py-2 px-4 lg:px-6 rounded-lg" : ""
                        }
                    >
                        <span className="text-xl font-semibold">Login</span>
                    </NavLink>}
            </div>
        </div>
    );
};

export default Navbar;