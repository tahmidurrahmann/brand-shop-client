import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Relevant from "../Relevant/Relevant";
const Apple = () => {

    const appleData = useLoaderData();

    const [apples, setApples] = useState([]);

    useEffect(() => {
        const filterData = appleData.filter(apple => apple.brand == 'Apple');
        setApples(filterData);
    }, [appleData])

    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://s.yimg.com/os/creatr-uploaded-images/2022-05/1cd0cb70-d6d0-11ec-bffb-4773eeb8ae79" className="lg:w-4/5 mx-auto lg:h-[700px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://cdn.wccftech.com/wp-content/uploads/2020/02/apple-arcade-promotion-1.png" className="lg:w-4/5 mx-auto lg:h-[700px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.pinimg.com/originals/d2/c6/86/d2c686b44f379f1ceed6971c08929b14.jpg" className="lg:w-4/5 mx-auto lg:h-[700px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            {
                apples.length ?
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto my-8 px-2">
                        {
                            apples.map(apple => <div key={apple._id}>
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
                    </div>
                    : <Relevant></Relevant>
            }
        </div>
    );
};

export default Apple;