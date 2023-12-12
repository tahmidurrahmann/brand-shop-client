import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { BsFillCartFill } from 'react-icons/bs';
import Rating from "react-rating";
import { GoCodeReview } from "react-icons/go";
import { useContext, useEffect, useState } from "react";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useReviews from "../hooks/useReviews";

const Description = () => {

    const descriptionData = useLoaderData();
    let [isOpen, setIsOpen] = useState(false);
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [review, setReview] = useState([]);

    const [allReviews, refetch, isPending] = useReviews();

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true);

    }

    const { brand, description, name, photo, price, rating, category, _id } = descriptionData;

    const carts = { brand, description, name, photo, price, rating, category };

    useEffect(() => {
        if (allReviews?.length) {
            const specificReviews = allReviews?.filter(review => review?.productId === _id);
            setReview(specificReviews);
        }
    }, [allReviews, _id])

    if (isPending) {
        return <div className="flex justify-center items-center min-h-screen"><span className="loading loading-spinner loading-lg"></span></div>
    }




    const handleAddCart = () => {
        fetch('https://dream-tech-server-app.vercel.app/carts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(carts)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Successfully added this item',
                        icon: 'success',
                        confirmButtonText: 'Good!'
                    })
                }
            })
    }

    const handleAddReview = async (e) => {
        e.preventDefault();
        const form = e.target;
        const review = form?.review?.value;
        const userName = user?.displayName;
        const photo = user?.photoURL;
        const productId = _id;
        const reviewData = { userName, review, productId, photo };
        const res = await axiosSecure.post("/reviews", reviewData);
        if (res?.data?.insertedId) {
            Swal.fire({
                title: "Good job!",
                text: "You entered a review!",
                icon: "success"
            });
            form.reset();
            refetch();
        }
    }


    return (
        <div className="bg-gradient-to-r from-white to-gray-400 py-20 w-full mx-auto">
            <div className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="col-span-1 flex items-center">
                        <img src={photo} alt="" />
                    </div>
                    <div className="flex items-center px-10 lg:px-0">
                        <div className="space-y-6 md:space-y-12 text-center md:text-left">
                            <h2 className="text-3xl font-semibold">{name}</h2>
                            <h2 className="text-xl font-bold">{price}$</h2>
                            <p className="text-gray-500">{description}</p>
                            <p className="text-xl font-semibold">{brand}</p>
                            <div className="flex gap-3 md:justify-start md:items-start justify-center items-center">
                                <Rating
                                    initialRating={rating}
                                    emptySymbol={<svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6 text-[#DD2955]"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                        />
                                    </svg>}
                                    fullSymbol={<svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-6 h-6 text-[#DD2955]"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                            clipRule="evenodd"
                                        />
                                    </svg>}
                                    readonly
                                />
                                <p className="text-xl font-medium">{rating}</p>
                            </div>
                            <h2 className="text-xl font-semibold">{category}</h2>
                            <div className="flex items-center justify-center md:justify-start">
                                <button onClick={handleAddCart} className="text-lg text-white font-medium bg-gradient-to-r from-[#DD2955] to-orange-800 flex gap-1.5 items-center justify-center py-2 px-4 lg:px-6 rounded-lg my-4"><span>Add to Cart</span><BsFillCartFill></BsFillCartFill></button>
                                <div className="flex items-center justify-center">
                                    <button onClick={openModal} className="ml-2 text-[#DD2955] border py-2 px-5 rounded border-[#DD2955] hover:text-white text-lg hover:bg-gradient-to-r from-[#DD2955] to-orange-800 font-semibold flex justify-center items-center gap-3">Add Review<GoCodeReview /></button>
                                </div>

                                <Transition appear show={isOpen} as={Fragment}>
                                    <Dialog as="div" className="relative z-10" onClose={closeModal}>
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <div className="fixed inset-0 bg-black/25" />
                                        </Transition.Child>

                                        <div className="fixed inset-0 overflow-y-auto">
                                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                                                <Transition.Child
                                                    as={Fragment}
                                                    enter="ease-out duration-300"
                                                    enterFrom="opacity-0 scale-95"
                                                    enterTo="opacity-100 scale-100"
                                                    leave="ease-in duration-200"
                                                    leaveFrom="opacity-100 scale-100"
                                                    leaveTo="opacity-0 scale-95"
                                                >
                                                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                                        <form onSubmit={handleAddReview}>
                                                            <div className="form-control">
                                                                <label className="label">
                                                                    <span className="label-text text-xl font-semibold">Enter your review here</span>
                                                                </label>
                                                                <textarea placeholder="Enter your review here..." className="p-4" name="review" id="" cols="30" rows="10"></textarea>
                                                                <input className="text-[#DD2955] border py-2 px-5 rounded border-[#DD2955] hover:text-white text-lg hover:bg-gradient-to-r from-[#DD2955] to-orange-800 font-semibold flex justify-center items-center gap-3 my-6" type="submit" value="Add Review" />
                                                            </div>
                                                        </form>
                                                        <div className="mt-4">
                                                            <button onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                        </div>
                                                    </Dialog.Panel>
                                                </Transition.Child>
                                            </div>
                                        </div>
                                    </Dialog>
                                </Transition>

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-center py-6 md:py-12 text-xl md:text-3xl font-bold">Product Reviews</h1>
                    {
                        review?.map((data, index) => <div key={index}>
                            <div className="flex justify-center md:justify-start items-center my-4 gap-6 md:gap-12 border border-white p-3 rounded-xl">
                                <div className="flex">
                                    <div className="avatar">
                                        <div className="w-24 rounded-xl">
                                            <img referrerPolicy="no-referrer" src={data?.photo} />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <p className="md:text-xl font-medium">{data?.userName}</p>
                                    <p>{data?.review}</p>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Description;