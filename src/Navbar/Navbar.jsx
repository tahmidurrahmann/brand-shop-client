import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between mx-auto container items-center my-3 md:my-4 space-y-5 md:space-y-0">
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
                    <h1 className="text-xl font-semibold">Home</h1>
                </NavLink>
                <NavLink
                    to="/addProduct"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-[#DD2955] py-1 px-2 md:py-2 md:px-5 rounded-lg text-xl text-white font-medium" : ""
                    }
                >
                    <h1 className="text-xl font-semibold">Add Product</h1>
                </NavLink>
                <NavLink
                    to="/myCart"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-[#DD2955] py-1 px-3 md:py-2 md:px-5 rounded-lg text-xl text-white font-medium" : ""
                    }
                >
                    <h1 className="text-xl font-semibold">My Cart</h1>
                </NavLink>
            </div>
            <div>
                <NavLink
                    to="/login"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-[#DD2955] py-1 px-3 md:py-2 md:px-5 rounded-lg text-xl text-white font-medium" : ""
                    }
                >
                Login
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;