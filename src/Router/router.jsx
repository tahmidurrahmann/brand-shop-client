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
import Update from "../Update/Update";
import Error from "../Error/Error";

const router = createBrowserRouter([
    {
        path : "/",
        element : <Layout></Layout>,
        errorElement : <Error></Error>,
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
                element : <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader : () => fetch('https://dream-tech-server-app.vercel.app/carts'),
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
                element : <PrivateRoute><Description></Description></PrivateRoute>,
                loader : ({params}) => fetch(`https://dream-tech-server-app.vercel.app/products/${params.id}`)
            },
            {
                path : "/apple",
                element  :<Apple></Apple>,
                loader : () => fetch('https://dream-tech-server-app.vercel.app/products')
            },
            {
                path : "/samsung",
                element : <Samsung></Samsung>,
                loader : () => fetch('https://dream-tech-server-app.vercel.app/products')
            },
            {
                path : "/google",
                element  : <Google></Google>,
                loader : () => fetch('https://dream-tech-server-app.vercel.app/products'),
            },
            {
                path : "/sony",
                element : <Sony></Sony>,
                loader : () => fetch('https://dream-tech-server-app.vercel.app/products'),
            },
            {
                path  : "/intel",
                element : <Intel></Intel>,
                loader : () => fetch('https://dream-tech-server-app.vercel.app/products'),
            },
            {
                path : "/xiaomi",
                element : <Xiaomi></Xiaomi>,
                loader : () => fetch('https://dream-tech-server-app.vercel.app/products'),
            },
            {
                path : '/update/:id',
                element : <PrivateRoute><Update></Update></PrivateRoute>,
                loader : ({params}) => fetch(`https://dream-tech-server-app.vercel.app/products/${params.id}`),
            }
        ]
    }
])

export default router;