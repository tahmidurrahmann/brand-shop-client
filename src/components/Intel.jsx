import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Relevant from "../Relevant/Relevant";

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
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://hyperspaceportfolio.files.wordpress.com/2011/09/spangleys-intel-3-03-10.jpg" className="lg:w-4/5 mx-auto lg:h-[700px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://www.dailydooh.com/wp-content/uploads/2009/06/intel-1.bmp" className="lg:w-4/5 mx-auto lg:h-[700px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
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
                                <img src={apple?.photo} className="w-96 h-96 mx-auto" alt={apple?.photo} />
                            </div>
                            <div className="text-center space-y-2">
                            <h2 className="text-lg font-semibold">{apple?.brand}</h2>
                                <h3 className="font-bold text-xl">{apple?.name}</h3>
                                <div className="flex gap-5 justify-center items-center">
                                
                                <p className="text-lg text-[#1C1B1B99] font-semibold">{apple?.category}</p>
                                <p className="text-lg text-[#1C1B1B99] font-semibold">{apple?.price}$</p>
                                </div>
                                <div className="flex gap-5 justify-center items-center">
                                
                                <p>{apple?.rating}</p>
                                </div>
                            </div>
                            <div className="flex gap-1.5 w-1/2 mx-auto my-3 justify-center items-center">
                                <Link to={`/description/${apple?._id}`}><button className="text-white py-1 px-5 rounded bg-gradient-to-r from-[#DD2955] to-orange-800">Details</button></Link>
                                <Link to={`/update/${apple?._id}`}><button className="text-[#DD2955] border py-[3px] px-5 rounded border-[#DD2955]">Update</button></Link>
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