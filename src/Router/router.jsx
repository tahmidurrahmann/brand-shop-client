import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../Home/Home";
import AddProduct from "../AddProduct/AddProduct";
import MyCart from "../MyCart/MyCart";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Description from "../Description/Description";
import Apple from "../components/Apple";
import Samsung from "../components/Samsung";
import Google from "../components/Google";
import Sony from "../components/Sony";
import Intel from "../components/Intel";
import Xiaomi from "../components/Xiaomi";

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
                path : '/description/:id',
                element : <Description></Description>
            },
            {
                path : "/apple",
                element  :<Apple></Apple>,
                loader : () => fetch('http://localhost:5002/products')
            },
            {
                path : "/samsung",
                element : <Samsung></Samsung>,
                loader : () => fetch('http://localhost:5002/products')
            },
            {
                path : "/google",
                element  : <Google></Google>,
                loader : () => fetch('http://localhost:5002/products'),
            },
            {
                path : "/sony",
                element : <Sony></Sony>,
                loader : () => fetch('http://localhost:5002/products'),
            },
            {
                path  : "/intel",
                element : <Intel></Intel>,
                loader : () => fetch('http://localhost:5002/products'),
            },
            {
                path : "/xiaomi",
                element : <Xiaomi></Xiaomi>,
                loader : () => fetch('http://localhost:5002/products')
            }
            
        ]
    }
])

export default router;