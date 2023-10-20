import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Relevant from "../Relevant/Relevant";
import Rating from "react-rating";

const Intel = () => {

    const [intels, setIntels] = useState([]);

    const intelData = useLoaderData();

    useEffect(() => {
        const filterData = intelData.filter(intel => intel.brand == 'Intel');
        setIntels(filterData);
    }, [intelData])

    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://images.squarespace-cdn.com/content/v1/592fa861f7e0abb6ba906720/1561499432917-JFG9AZ758X64K7VJI7K5/Picture1.jpg" className="lg:w-4/5 mx-auto lg:h-[700px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-60 left-5 right-5 lg:right-60 top-1/2">
                        <a href="#slide3" className="bg-gradient-to-r from-[#DD2955] to-orange-800 px-2 py-2.5 hover:text-black rounded-full text-white font-extrabold">❮</a>
                        <a href="#slide2" className="bg-gradient-to-r from-[#DD2955] to-orange-800 px-2 py-2.5 hover:text-black rounded-full text-white font-extrabold">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://hyperspaceportfolio.files.wordpress.com/2011/09/spangleys-intel-3-03-10.jpg" className="lg:w-4/5 mx-auto lg:h-[700px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-60 left-5 right-5 lg:right-60 top-1/2">
                        <a href="#slide1" className="bg-gradient-to-r from-[#DD2955] to-orange-800 px-2 py-2.5 hover:text-black rounded-full text-white font-extrabold">❮</a>
                        <a href="#slide3" className="bg-gradient-to-r from-[#DD2955] to-orange-800 px-2 py-2.5 hover:text-black rounded-full text-white font-extrabold">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://www.dailydooh.com/wp-content/uploads/2009/06/intel-1.bmp" className="lg:w-4/5 mx-auto lg:h-[700px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-60 left-5 right-5 lg:right-60 top-1/2">
                        <a href="#slide2" className="bg-gradient-to-r from-[#DD2955] to-orange-800 px-2 py-2.5 hover:text-black rounded-full text-white font-extrabold">❮</a>
                        <a href="#slide1" className="bg-gradient-to-r from-[#DD2955] to-orange-800 px-2 py-2.5 hover:text-black rounded-full text-white font-extrabold">❯</a>
                    </div>
                </div>
            </div>
            {
                intels.length ?
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto my-10 md:my-20 px-6 lg:px-0">
                        {
                            intels.map(apple => <div key={apple._id}>
                                <div className="bg-gradient-to-r from-gray-100 via-white to-gray-400 rounded-md p-5 shadow-2xl">
                                    <div>
                                        <img src={apple?.photo} className="h-72 mx-auto" alt={apple?.photo} />
                                    </div>
                                    <div className="text-center space-y-2">
                                        <h2 className="text-lg font-semibold">{apple?.brand}</h2>
                                        <h3 className="font-bold text-xl">{apple?.name}</h3>
                                        <div className="flex gap-5 justify-center items-center">

                                            <p className="text-lg text-[#1C1B1B99] font-semibold">{apple?.category}</p>
                                            <p className="text-lg text-[#1C1B1B99] font-semibold">{apple?.price}$</p>
                                        </div>
                                        <div className="flex gap-3 justify-center items-center">
                                            <Rating
                                                initialRating={apple?.rating}
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
                                            <p className="text-xl font-medium">{apple?.rating}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-1.5 w-1/2 mx-auto my-3 justify-center items-center">
                                        <Link to={`/description/${apple?._id}`}><button className="text-white py-1 px-5 rounded bg-gradient-to-r from-[#DD2955] to-orange-800 hover:text-black">Details</button></Link>
                                        <Link to={`/update/${apple?._id}`}><button className="text-[#DD2955] border py-[3px] px-5 rounded border-[#DD2955] hover:text-black">Update</button></Link>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                    : <Relevant></Relevant>
            }
        </div>
    );
};

export default Intel;