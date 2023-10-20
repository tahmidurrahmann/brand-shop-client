import Swal from "sweetalert2";
import { AiFillDelete } from 'react-icons/ai';

const Cart = ({ cart, remainingCarts, setRemainingCarts }) => {

    const { _id, brand, description, name, photo, price, rating, category } = cart;
    console.log(cart);

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

                fetch(`https://dream-tech-server-app.vercel.app/carts/${id}`, {
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
                    })


            }
        })
    }

    return (
        <div className="px-10 md:px-5 lg:px-0">
            <div className="bg-gradient-to-r from-white to-gray-400 bg-base-100 shadow-2xl rounded-lg">
                <div>
                    <img className="w-96 h-96 mx-auto" src={photo} alt="Shoes" />
                </div>
                <div className="card-body space-y-2">
                    <div className="text-center">
                        <h2 className="text-xl lg:text-2xl font-bold text-[#1C1B1B]">{name}</h2>

                        <div className="flex flex-col lg:flex-row">
                            <p className="md:text-lg text-[#1C1B1B99] font-bold">{brand}</p>
                            <p className="md:text-lg text-[#1C1B1B99] font-bold">{price}$</p>
                        </div>
                        <div className="flex flex-col lg:flex-row">
                            <p className="md:text-lg text-[#1C1B1B99] font-bold">{category}</p>
                            <p className="md:text-lg text-[#1C1B1B99] font-bold">{rating}</p>
                        </div>
                    </div>
                    <div className="card-actions justify-center ">
                        <p className="text-center text-[#1C1B1B99] font-medium">{description?.length > 100 ? description.slice(0,100) : description}...</p>
                        <button onClick={() => handleDeleteCart(_id)} className="text-lg text-white font-medium bg-gradient-to-r from-[#DD2955] to-orange-800 py-2 px-4 lg:px-6 rounded-lg my-4 flex items-center gap-1.5"><span>Delete</span><AiFillDelete></AiFillDelete></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;