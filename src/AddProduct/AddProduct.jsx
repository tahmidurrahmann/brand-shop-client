const AddProduct = () => {

    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const brandName = form.brandName.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        console.log(name, photo, brandName, price, description, rating);
    }

    return (
            <div className="container mx-auto w-1/2 my-20">
                <form onSubmit={handleAddProduct} className="flex flex-col gap-4">
                    <input className="p-3 rounded-lg" type="text" name="name" placeholder="Your Name" id="" />
                    <input className="p-3 rounded-lg" type="text" name="photo" placeholder="Photo URL" id="" />
                    <input className="p-3 rounded-lg" type="text" name="brandName" placeholder="Brand Name" id="" />
                    <input className="p-3 rounded-lg" type="text" name="price" placeholder="Price" id="" />
                    <textarea name="description" placeholder="Type your description" id="" cols="20" rows="5"></textarea>
                    <input className="p-3 rounded-lg" type="text" name="rating" placeholder="Rating" id="" />
                    <input type="submit" className="btn" value="Add Button" />
                </form>
            </div>
    );
};

export default AddProduct;