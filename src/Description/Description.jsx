import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { BsFillCartFill } from 'react-icons/bs';
import Rating from "react-rating";

const Description = () => {

    const descriptionData = useLoaderData();

    const { brand, description, name, photo, price, rating, category } = descriptionData;

    const carts = { brand, description, name, photo, price, rating, category };

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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Description;