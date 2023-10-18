import { Link } from "react-router-dom";

const Detail = ({ detail }) => {

    const { _id, select, name, photo, brand, price, description, rating } = detail;
    console.log(detail);

    return (

        <div className="card bg-base-100 shadow-xl">
            <figure><img className="w-full h-[300px] lg:h-[400px]" src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="text-center">
                    <h2 className="text-xl md:text-2xl font-bold text-[#1C1B1B]">{name}</h2>
                        <div className="flex">
                            <p className="md:text-lg text-[#1C1B1B99] font-semibold">Brand Name : {brand}</p>
                            <p className="text-lg text-[#1C1B1B99] font-semibold">Product Cost : ${price}.00</p>
                        </div>
                        <div className="flex">
                            <p className="md:text-lg text-[#1C1B1B99] font-semibold">Category : {select}</p>
                            <p className="md:text-lg md:-[#1C1B1B99] font-semibold">Rating : {rating}</p>
                        </div>
                </div>
                <div className="card-actions justify-center ">
                    <Link to={`/description/${_id}`}><button className="text-lg text-white font-medium bg-[#DD2955]  py-2 px-4 lg:px-6 rounded-lg">{description}</button></Link>
                    <button className="text-lg text-white font-medium bg-[#DD2955] py-2 px-4 lg:px-6 rounded-lg">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Detail;