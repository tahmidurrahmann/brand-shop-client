import Swal from "sweetalert2";

const AddProduct = () => {

    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const category = form.category.value;
        const product = { name , photo, brand, category, price, description, rating };
        fetch('https://dream-tech-server-app.vercel.app/products', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'You Successfully added this product',
                        icon: 'success',
                        confirmButtonText: 'Good Job!'
                      })
                }
            })
       
    }

    return (
        <div className="p-4">
            <form onSubmit={handleAddProduct} className="w-full lg:w-1/2 mx-auto flex flex-col justify-center rounded px-8 pb-8 md:px-16">
                <h1 className="font-bold text-2xl my-8">Add Product</h1>
                <input className="w-full p-4 mb-4 border rounded-md bg-gradient-to-r from-white to-gray-400" type="text" name="name" placeholder="Product Name" required/> <br />
                <input className="w-full p-4 mb-4 border rounded-md bg-gradient-to-r from-white to-gray-400" type="text" name="photo" placeholder="Your photoURL" required  /> <br />
                <input className="w-full p-4 mb-4 border rounded-md bg-gradient-to-r from-white to-gray-400" type="text" name="brand" placeholder="Brand Name" required  /> <br />
                <select name="category" className="select select-bordered w-full mb-4 border rounded-md" >
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
                <input className="w-full p-4 mb-4 border rounded-md bg-gradient-to-r from-white to-gray-400" type="text" name="price" placeholder="Price of your Product" required  /> <br />
                <textarea required name="description" className="w-full p-4 mb-4 border rounded-md bg-gradient-to-r from-white to-gray-400" placeholder="Describe your product details" cols="15" rows="6"></textarea>
                <input className="w-full p-4 mb-4 border rounded-md bg-gradient-to-r from-white to-gray-400" type="text" name="rating" placeholder="Give your rating out of 5" required /> <br />
                <input className="w-full text-white font-medium py-3.5 rounded bg-gradient-to-r from-[#DD2955] to-orange-800" type="submit" value="Add Button" />
            </form>
        </div>
    );
};

export default AddProduct;