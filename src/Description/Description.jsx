import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Description = () => {

    const descriptionData = useLoaderData();
    console.log(descriptionData);

    const { brand, description, name, photo, price, rating, select } = descriptionData;

    const carts = {brand, description, name, photo, price, rating, select};

    const handleAddCart = () => {
        fetch('http://localhost:5002/carts',{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(carts)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Successfully added this item',
                    icon: 'success',
                    confirmButtonText: 'Good'
                  })
            }
        })
    }


    return (
        <div className="container mx-auto my-10 w-1/2">
            <div className="card bg-base-100 shadow-2xl">
                <figure><img className="w-3/5 h-[300px] lg:h-[400px]" src={photo} alt="Shoes" /></figure>
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
                        <button onClick={handleAddCart} className="text-lg text-white font-medium bg-[#DD2955] py-2 px-4 lg:px-6 rounded-lg my-4">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Description;