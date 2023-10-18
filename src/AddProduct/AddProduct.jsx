import Swal from "sweetalert2";

const AddProduct = () => {

    const handleAddProduct = e => {
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
        console.log(product);
        fetch('http://localhost:5002/products', {
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
                <input className="w-full p-4 mb-4 border rounded-md" type="text" name="name" placeholder="Your Name" required id="1" /> <br />
                <input className="w-full p-4 mb-4 border rounded-md" type="text" name="photo" placeholder="Your photoURL" required id="2" /> <br />
                <input className="w-full p-4 mb-4 border rounded-md" type="text" name="brandName" placeholder="Brand Name" required id="3" /> <br />
                <select name="select" className="select w-full mb-4 border rounded-md">
                    <option disabled selected>Pick your own category</option>
                    <option>Phone</option>
                    <option>Computer</option>
                    <option>Headphones</option>
                    <option>Watch</option>
                </select>
                <input className="w-full p-4 mb-4 border rounded-md" type="text" name="price" placeholder="Price of your Product" required id="4" /> <br />
                <textarea name="description" id="5" className="w-full p-4 mb-4 border rounded-md" placeholder="Describe your product details" cols="15" rows="6"></textarea>
                <input className="w-full p-4 mb-4 border rounded-md" type="text" name="rating" placeholder="Give your rating out of 5" required id="5" /> <br />
                <input className="w-full text-white font-medium py-3.5 rounded bg-[#DD2955]" type="submit" value="Add Button" />
            </form>
        </div>
    );
};

export default AddProduct;