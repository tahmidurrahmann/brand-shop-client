import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { useContext, useState } from "react";

import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {

    const { signIn, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        setLoginError('');
        signIn(email, password)
            .then(() => {
                toast.success('Log in Successful');
                navigate(location?.state ? location.state : '/' )
            })
            .catch(error => {
                const message = error.message;
                setLoginError(message);
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(()=>{
            toast.success('Google signIn Successful')
        })
        .catch(error => {
            const message = error.message;
            toast.error(message)
        })
    }

    return (
        <div className="p-4">
            <form onSubmit={handleLogin} className="w-full lg:w-1/2 mx-auto flex flex-col justify-center rounded p-8 md:p-16">
                <h1 className="font-bold text-2xl my-8">Login to account</h1>
                <input className="w-full p-4 mb-4 border rounded-md bg-gradient-to-r from-white to-gray-400" type="email" name="email" placeholder="Your Email" required id="1" /> <br />
                <div className="relative">
                    <input className="w-full border p-4 mb-4 rounded-md bg-gradient-to-r from-white to-gray-400"
                        type={showPassword ? "text" : "password"}
                        name="password" placeholder="Your Password" required id="2" /> <span className="absolute top-5 right-3" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye> }</span>
                </div> <br />
                <div>
                    {loginError && <p className="text-red-500 my-4">{loginError}</p>}
                </div>
                <input className="w-full text-white font-medium py-3.5 rounded bg-gradient-to-r from-[#DD2955] to-orange-800" type="submit" value="Login" />
                <p className="text-center mt-10">Do not have an account?<Link to='/register' className="text-[#DD2955]"> Create an account</Link></p>
            </form>
            <p className="text-center my-6">Or login with</p>
            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-error flex justify-center items-center gap-16 border rounded-full  md:w-1/2 lg:w-1/5 mx-auto py-4">
                <FcGoogle></FcGoogle>
                <p>Continue with Google</p>
            </button>
        </div>
    );
};

export default Login;