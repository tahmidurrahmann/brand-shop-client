import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
    const {name, image} = brand;
    
    return (
        <>
            <Link to={`/products/${name}`}>
                <div className="rounded-lg bg-gray-100 shadow-xl">
                    <figure><img className="rounded-t-lg h-[300px] lg:h-[400px] w-full" src={image} alt="Brands" /></figure>
                    <div className="card-body">
                        <h2 className="text-center text-4xl font-bold">{name}</h2>
                    </div>
                </div>
            </Link>
            </>
    );
};

export default Brand;