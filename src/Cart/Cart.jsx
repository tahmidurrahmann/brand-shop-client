import Swal from "sweetalert2";
import { AiFillDelete } from 'react-icons/ai';
import Rating from "react-rating";

const Cart = ({ cart, remainingCarts, setRemainingCarts }) => {

    const { _id, brand, description, name, photo, price, rating, category } = cart;

    const handleDeleteCart = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(id);
                fetch(`http://localhost:5000/carts/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: 'Success!',
                                text: 'Successfully deleted this cart',
                                icon: 'success',
                                confirmButtonText: 'Good'
                            })
                            const remaining = remainingCarts.filter(carts => carts._id !== id);
                            setRemainingCarts(remaining);
                        }
                        console.log(data);
                    })

            }
        })
    }

    return (
        <div className="px-10 md:px-5 lg:px-0">
            <div className="bg-gradient-to-r from-white to-gray-400 bg-base-100 shadow-2xl rounded-lg">
                <div>
                    <img className="h-72 mx-auto" src={photo} alt="Shoes" />
                </div>
                <div className="card-body space-y-2">
                    <div className="text-center">
                        <h2 className="text-xl lg:text-2xl font-bold text-[#1C1B1B]">{name}</h2>

                        <div className="flex flex-col md:flex-row space-y-0.5">
                            <p className="md:text-lg text-[#1C1B1B99] font-bold">{brand}</p>
                            <p className="md:text-lg text-[#1C1B1B99] font-bold">{price}$</p>
                        </div>
                        <div className="flex flex-col md:flex-row space-y-0.5">
                            <p className="md:text-lg text-[#1C1B1B99] font-bold">{category}</p>
                            <div className="flex gap-3">
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
                                <p className="text-xl font-semibold">{rating}</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-actions justify-center ">
                        <p className="text-center text-[#1C1B1B99] font-medium">{description?.length > 100 ? description.slice(0, 100) : description}...</p>
                        <button onClick={() => handleDeleteCart(_id)} className="text-lg text-white font-medium bg-gradient-to-r from-[#DD2955] to-orange-800 py-2 px-4 lg:px-6 rounded-lg my-4 flex items-center gap-1.5"><span>Delete</span><AiFillDelete></AiFillDelete></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;