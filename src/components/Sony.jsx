import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Sony = () => {

    const [sonys, setSonys] = useState([]);

    const sonyData = useLoaderData();

    useEffect(() => {
        const filterData = sonyData.filter(sony => sony.brand == 'sony');
        setSonys(filterData);
    }, [sonyData])

    return (
        <div>
            <div className="carousel w-full my-8">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.pinimg.com/originals/ab/a1/55/aba155b06697f42b44ab109eaed24553.jpg" className="lg:w-4/5 mx-auto lg:h-[700px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://images1.the-dots.com/v1/929080.jpg?p=socialLarge" className="lg:w-4/5 mx-auto lg:h-[700px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/fb439443288877.57ea2d9a6fd48.jpg" className="lg:w-4/5 mx-auto lg:h-[700px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto my-8 px-10">
                {
                    sonys.map((apple, i) => <div key={i}>
                        <div className="card bg-base-100 shadow-2xl">
                            <figure><img className="w-3/5 h-[300px] lg:h-[400px]" src={apple.photo} alt="Shoes" /></figure>
                            <div className="card-body">
                                <div className="text-center">
                                    <h2 className="text-xl lg:text-2xl font-bold text-[#1C1B1B]">{apple.name}</h2>
                                    <div className="flex flex-col lg:flex-row">
                                        <p className="md:text-lg text-[#1C1B1B99] font-bold">Brand Name : {apple.brand}</p>
                                        <p className="md:text-lg text-[#1C1B1B99] font-bold">Product Cost : ${apple.price}.00</p>
                                    </div>
                                    <div className="flex flex-col lg:flex-row px-[72px]">
                                        <p className="md:text-lg text-[#1C1B1B99] text-left md:text-center lg:text-left font-bold">Category : {apple.select}</p>
                                        <p className="md:text-lg text-[#1C1B1B99] font-bold md:text-center lg:text-right">{apple.rating}</p>
                                    </div>
                                </div>
                                <div className="card-actions justify-center ">
                                    <Link to={`/description/${apple._id}`}><button className="text-lg text-white font-medium bg-[#DD2955] py-2 px-4 lg:px-6 rounded-lg">Category Detail</button></Link>
                                    <button className="text-lg text-white font-medium bg-[#DD2955] py-2 px-4 lg:px-6 rounded-lg">Update</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Sony;