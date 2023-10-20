import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {

    const { createUser, googleSignIn } = useContext(AuthContext);
    const [displayError, setDisplayError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        setDisplayError('');
        console.log(name, photo, email, password);

        if (password.length < 6) {
            setDisplayError('Password should be at least 6 characters');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setDisplayError('Your Password must contain a Capital Letter');
            return;
        }
        else if (!/^(?=.*[!@#$%^&*()_+{}:;<>,.?~\\|-])/.test(password)) {
            setDisplayError('Password must contain a Special Character');
            return;
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                updateProfile(loggedUser, {
                    displayName : name,
                    photoURL : photo,
                })
                .then(()=>{
                    window.location.reload();
                    toast.success('Account created successfully')
                })
                .catch(error =>{
                    console.log(error.message);
                })
            })
            .catch(error => {
                const message = error.message;
                setDisplayError(message)
                console.log(message);
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                toast.success('Google signIn Successful')
            })
            .catch(error => {
                const message = error.message;
                toast.error(message)
            })
    }

    return (
        <div className="p-4">
            <form onSubmit={handleRegister} className="w-full lg:w-1/2 mx-auto flex flex-col justify-center rounded p-8 md:p-16">
                <h1 className="font-bold text-2xl my-8">Create an account</h1>
                <input className="w-full p-4 mb-4 border rounded-md bg-gradient-to-r from-white to-gray-400" type="text" name="name" placeholder="Your Name" required id="1" /> <br />
                <input className="w-full p-4 mb-4 border rounded-md bg-gradient-to-r from-white to-gray-400" type="text" name="photo" placeholder="Your photoURL" required id="2" /> <br />
                <input className="w-full p-4 mb-4 border rounded-md bg-gradient-to-r from-white to-gray-400" type="email" name="email" placeholder="Your Email" required id="3" /> <br />
                <div className="relative">
                    <input className="w-full border p-4 mb-4 rounded-md bg-gradient-to-r from-white to-gray-400"
                        type={showPassword ? "text" : "password"}
                        name="password" placeholder="Your Password" required id="4" /> <span className="absolute top-5 right-3" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>  }</span>
                </div> <br />
                <div>
                    {displayError && <p className="text-red-500 my-4">{displayError}</p>}
                </div>
                <input className="w-full text-white font-medium py-3.5 rounded bg-gradient-to-r from-[#DD2955] to-orange-800" type="submit" value="Register" />
                <p className="text-center mt-10">Already have an account?<Link to='/login' className="text-[#DD2955]"> Login</Link></p>
            </form>
            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-error flex justify-center items-center gap-16 border rounded-full  md:w-1/2 lg:w-1/5 mx-auto py-4">
                <FcGoogle></FcGoogle>
                <p>Continue with Google</p>
            </button>
        </div>
    );
};

export default Register;