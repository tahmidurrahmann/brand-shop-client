import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Relevant from "../Relevant/Relevant";

const Google = () => {

    const [googles, setSonys] = useState([]);

    const sonyData = useLoaderData();

    useEffect(() => {
        const filterData = sonyData.filter(google => google.brand == 'Google');
        setSonys(filterData);
    }, [sonyData])

    return (
        <div>
            <div className="carousel w-full my-6">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://imageio.forbes.com/specials-images/imageserve/60e4751febc90f1ebc049065/INDIA-US-GOOGLE/960x0.jpg?format=jpg&width=960" className="lg:w-4/5 mx-auto lg:h-[700px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://qph.cf2.quoracdn.net/main-qimg-f6f939399110a5df8714f7b55ea5be26-lq" className="lg:w-4/5 mx-auto lg:h-[700px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://grandvisual.com/wp-content/uploads/2018/07/DSC_0037.jpg" className="lg:w-4/5 mx-auto lg:h-[700px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            {
                googles.length ?
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto my-10 md:my-20 px-6 lg:px-0">
                {
                    googles.map(apple => <div key={apple._id}>
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

export default Google;