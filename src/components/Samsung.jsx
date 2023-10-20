import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Relevant from "../Relevant/Relevant";

const Samsung = () => {

    const [samsungs, setSamsungs] = useState([]);

    const samsungData = useLoaderData();

    useEffect(() => {
        const filterData = samsungData.filter(samsung => samsung.brand == 'Samsung');
        setSamsungs(filterData);
    }, [samsungData])


    return (
        <div>
            <div className="carousel w-full my-8">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/73fbe271026179.5bb6e7af358b6.jpg" className="lg:w-4/5 mx-auto lg:h-[700px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://img.global.news.samsung.com/global/wp-content/uploads/2017/04/Leo-Burnett-Campaign-S8_main_1.jpg" className="lg:w-4/5 mx-auto lg:h-[700px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://s3-prod.adage.com/s3fs-public/20221013_Samsung_Galaxy-Z-Flip4_OOH_3X2.jpg" className="lg:w-4/5 mx-auto lg:h-[700px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            {
                samsungs.length ?
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto my-8 px-10">
                        {
                            samsungs.map(apple => <div key={apple._id}>
                                <div className="bg-gradient-to-r from-white to-gray-400 rounded-md w-80 md:w-96 p-5">
                                    <div>
                                        <img src={apple?.photo} className="w-96 h-96" alt="" />
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
                    </div> : <Relevant></Relevant>
            }
        </div>
    );
};

export default Samsung;