import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Relevant from "../Relevant/Relevant";

const Xiaomi = () => {

    const [xiaomis, setXiaomis] = useState([]);

    const xiaomiData = useLoaderData();

    useEffect(() => {
        const filterData = xiaomiData.filter(xiaomi => xiaomi.brand == 'Xiaomi');
        setXiaomis(filterData);
    }, [xiaomiData])


    return (
        <div>

            <div className="carousel w-full my-8">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2021/08/image-6-scaled.jpeg?ssl=1" className="lg:w-4/5 mx-auto lg:h-[700px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://newspaperads.ads2publish.com/wp-content/uploads/2021/05/redmi-note-10-pro-max-revolutionary-108mp-smartphone-ad-times-of-india-mumbai-25-05-2021.jpg" className="lg:w-4/5 mx-auto lg:h-[700px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://iide.co/wp-content/uploads/2021/06/Marketing-Strategy-of-Xiaomi-Redmi-A-Case-Study-Flash-Sales.jpg" className="lg:w-4/5 mx-auto lg:h-[700px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            {
                xiaomis.length ?
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto my-8 px-10">
                        {
                            xiaomis.map(apple => <div key={apple?._id}>
                                <div className="card bg-base-100 shadow-2xl">
                                    <figure><img className="w-full h-[300px] lg:h-[400px]" src={apple?.photo} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <div className="text-center">
                                            <h2 className="text-xl lg:text-2xl font-bold text-[#1C1B1B]">{apple?.name}</h2>
                                            <div className="flex flex-col lg:flex-row">
                                                <p className="md:text-lg text-[#1C1B1B99] font-bold">Brand Name : {apple?.brand}</p>
                                                <p className="md:text-lg text-[#1C1B1B99] font-bold">Product Cost : ${apple?.price}.00</p>
                                            </div>
                                            <div className="flex flex-col lg:flex-row px-[72px]">
                                                <p className="md:text-lg text-[#1C1B1B99] text-left md:text-center lg:text-left font-bold">Category : {apple?.category}</p>
                                                <p className="md:text-lg text-[#1C1B1B99] font-bold md:text-center lg:text-right">{apple?.rating}</p>
                                            </div>
                                        </div>
                                        <div className="card-actions justify-center ">
                                            <Link to={`/description/${apple?._id}`}><button className="text-lg text-white font-medium bg-[#DD2955] py-2 px-4 lg:px-6 rounded-lg">Category Detail</button></Link>
                                            <Link to={`/update/${apple?._id}`}>
                                                <button className="text-lg text-white font-medium bg-[#DD2955] py-2 px-4 lg:px-6 rounded-lg">Update</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                    :
                    <Relevant></Relevant>
            }
        </div>
    );
};

export default Xiaomi;

