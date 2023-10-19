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
                samsungs.length? 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto my-8 px-10">
                {
                    samsungs.map(apple => <div key={apple._id}>
                        <div className="card bg-base-100 shadow-2xl">
                            <figure><img className="w-3/5 h-[300px] lg:h-[400px]" src={apple?.photo} alt="Shoes" /></figure>
                            <div className="card-body">
                                <div className="text-center">
                                    <h2 className="text-xl lg:text-2xl font-bold text-[#1C1B1B]">{apple?.name}</h2>
                                    <div className="flex flex-col lg:flex-row">
                                        <p className="md:text-lg text-[#1C1B1B99] font-bold">Brand Name : {apple?.brand}</p>
                                        <p className="md:text-lg text-[#1C1B1B99] font-bold">Product Cost : ${apple?.price}.00</p>
                                    </div>
                                    <div className="flex flex-col lg:flex-row px-[72px]">
                                        <p className="md:text-lg text-[#1C1B1B99] text-left md:text-center lg:text-left font-bold">{apple?.category}</p>
                                        <p className="md:text-lg text-[#1C1B1B99] font-bold md:text-center lg:text-right">{apple?.rating}</p>
                                    </div>
                                </div>
                                <div className="card-actions justify-center ">
                                    <Link to={`/description/${apple?._id}`}><button className="text-lg text-white font-medium bg-[#DD2955] py-2 px-4 lg:px-6 rounded-lg">Category Detail</button></Link>
                                    <Link to={`/update/${apple?._id}`}>
                                        <button className="text-lg text-white font-medium bg-[#DD2955] py-2 px-4 lg:px-6 rounded-lg">Update</button>
                                    </Link>
                                </div>
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