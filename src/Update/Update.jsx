import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {

    const updatedData = useLoaderData();
    const { _id ,select, name, photo, brand, price, description, rating } = updatedData;

    const handleUpdateProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const brandName = form.brandName.value;
        const brand = brandName.toLowerCase();
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const select = form.select.value;
        const product = { select, name, photo, brand, price, description, rating };
        fetch(`http://localhost:5002/products/${_id}`,{
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
                <input defaultValue={name} className="w-full p-4 mb-4 border rounded-md" type="text" name="name" placeholder="Product Name" required id="1" /> <br />
                <input defaultValue={photo} className="w-full p-4 mb-4 border rounded-md" type="text" name="photo" placeholder="Your photoURL" required id="2" /> <br />
                <input defaultValue={brand} className="w-full p-4 mb-4 border rounded-md" type="text" name="brandName" placeholder="Brand Name" required id="3" /> <br />
                <select defaultValue={select} required name="select" className="select w-full mb-4 border rounded-md">
                    <option disabled>Pick your own category</option>
                    <option>Mobile</option>
                    <option>Processor</option>
                    <option>Headphones</option>
                    <option>Smart Watch</option>
                    <option>Laptops</option>
                    <option>Airpods</option>
                    <option>Earphones</option>
                    <option>Camera</option>
                    <option>TV</option>
                </select>
                <input defaultValue={price} className="w-full p-4 mb-4 border rounded-md" type="text" name="price" placeholder="Price of your Product" required id="4" /> <br />
                <textarea defaultValue={description} required name="description" id="5" className="w-full p-4 mb-4 border rounded-md" placeholder="Describe your product details" cols="15" rows="6"></textarea>
                <input defaultValue={rating} className="w-full p-4 mb-4 border rounded-md" type="text" name="rating" placeholder="Give your rating out of 5" required id="5" /> <br />
                <input className="w-full text-white font-medium py-3.5 rounded bg-[#DD2955]" type="submit" value="Update this Product" />
            </form>
        </div>
    );
};

export default Update;