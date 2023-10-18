import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../Home/Home";
import AddProduct from "../AddProduct/AddProduct";
import MyCart from "../MyCart/MyCart";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Details from "../Details/Details";
import Description from "../Description/Description";

const router = createBrowserRouter([
    {
        path : "/",
        element : <Layout></Layout>,
        children : [
            {
                path : "/",
                element : <Home></Home>,
                loader :() => fetch('/brands.json'),
            },
            {
                path : "/addProduct",
                element : <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path : "/myCart",
                element : <PrivateRoute><MyCart></MyCart></PrivateRoute>
            },
            {
                path : "/login",
                element : <Login></Login>
            },
            {
                path : "/register",
                element : <Register></Register>
            },
            {
                path : "/products/:brand",
                element : <Details></Details>,
                loader : ({params}) => fetch(`http://localhost:5002/products/${params.brand}`)
            },
            {
                path : '/description/:id',
                element : <Description></Description>
            }
            
        ]
    }
])

export default router;