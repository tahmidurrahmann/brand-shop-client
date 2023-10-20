import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {

    const updatedData = useLoaderData();
    const { _id } = updatedData;

    const handleUpdateProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const category = form.category.value;
        const product = { name, photo, brand, price, category, description, rating };
        console.log(category);
        fetch(`https://dream-tech-server-app.vercel.app/products/${_id}`,{
            method : "PUT",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify(product),
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                Swal.fire({
                    title: 'Success!',
                    text: 'You successfully updated this cart',
                    icon: 'success',
                    confirmButtonText: 'Well done!'
                })
            }
        })
    }

    return (
        <div className="p-4">
            <form onSubmit={handleUpdateProduct} className="w-full lg:w-1/2 mx-auto flex flex-col justify-center rounded px-8 pb-8 md:px-16">
                <h1 className="font-bold text-2xl my-8">Update Product</h1>
                <input defaultValue={updatedData?.name} className="bg-gradient-to-r from-white to-gray-400 w-full p-4 mb-4 border rounded-md" type="text" name="name" placeholder="Product Name" /> <br />
                <input defaultValue={updatedData?.photo} className="bg-gradient-to-r from-white to-gray-400 w-full p-4 mb-4 border rounded-md" type="text" name="photo" placeholder="Your photoURL"   /> <br />
                <input defaultValue={updatedData?.brand} className="bg-gradient-to-r from-white to-gray-400 w-full p-4 mb-4 border rounded-md" type="text" name="brand" placeholder="Brand Name" /> <br />
                <select defaultValue={updatedData?.category} name="category" className="select select-bordered w-full mb-4 border rounded-md">
                <option>Mobile</option>
                    <option>Processor</option>
                    <option>Headphone</option>
                    <option>Smart Watch</option>
                    <option>Laptop</option>
                    <option>Airpod</option>
                    <option>Earphone</option>
                    <option>Camera</option>
                    <option>TV</option>
                </select>
                <textarea defaultValue={updatedData?.description} name="description" className="bg-gradient-to-r from-white to-gray-400 w-full p-4 mb-4 border rounded-md" placeholder="Describe your product details" cols="15" rows="6"></textarea>
                <input defaultValue={updatedData?.price} className="bg-gradient-to-r from-white to-gray-400 w-full p-4 mb-4 border rounded-md" type="text" name="price" placeholder="Price of your Product" /> <br />
                <input defaultValue={updatedData?.rating} className="bg-gradient-to-r from-white to-gray-400 w-full p-4 mb-4 border rounded-md" type="text" name="rating" placeholder="Give your rating out of 5"/> <br />
                <input className="w-full text-white font-medium py-3.5 rounded bg-gradient-to-r from-[#DD2955] to-orange-800" type="submit" value="Update this Product" />
            </form>
        </div>
    );
};

export default Update;