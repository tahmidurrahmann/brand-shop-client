import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../Home/Home";
import AddProduct from "../AddProduct/AddProduct";
import MyCart from "../MyCart/MyCart";
import Login from "../Login/Login";

const router = createBrowserRouter([
    {
        path : "/",
        element : <Layout></Layout>,
        children : [
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path : "/addProduct",
                element : <AddProduct></AddProduct>
            },
            {
                path : "/myCart",
                element : <MyCart></MyCart>
            },
            {
                path : "/login",
                element : <Login></Login>
            },
        ]
    }
])

export default router;