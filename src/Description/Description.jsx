import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { BsFillCartFill } from 'react-icons/bs';

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
        <div className="my-10 lg:my-0 px-10 lg:px-0">
            <div className="bg-gradient-to-r from-white to-gray-400 py-20 rounded-xl lg:rounded-none w-full mx-auto">
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
                            <p className="text-xl font-semibold">{rating}</p>
                            <h2 className="text-xl font-semibold">{category}</h2>
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