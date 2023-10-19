import Swal from "sweetalert2";

const Cart = ({ cart, remainingCarts, setRemainingCarts }) => {

    const { _id, brand, description, name, photo, price, rating, select } = cart;
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
            <div className="card bg-base-100 shadow-2xl">
                <figure><img className="w-4/5 h-[300px] lg:h-[400px]" src={photo} alt="Shoes" /></figure>
                <div className="card-body space-y-2">
                    <div className="text-center">
                        <h2 className="text-xl lg:text-2xl font-bold text-[#1C1B1B]">{name}</h2>

                        <div className="flex flex-col lg:flex-row">
                            <p className="md:text-lg text-[#1C1B1B99] font-bold">Brand : {brand}</p>
                            <p className="md:text-lg text-[#1C1B1B99] font-bold">Price : ${price}.00</p>
                        </div>
                        <div className="flex flex-col lg:flex-row">
                            <p className="md:text-lg text-[#1C1B1B99] font-bold">{select}</p>
                            <p className="md:text-lg text-[#1C1B1B99] font-bold">{rating}</p>
                        </div>
                    </div>
                    <div className="card-actions justify-center ">
                        <p className="text-center text-[#1C1B1B99] font-medium">{description}</p>
                        <button onClick={() => handleDeleteCart(_id)} className="text-lg text-white font-medium bg-[#DD2955] py-2 px-4 lg:px-6 rounded-lg my-4">Delete this item</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;