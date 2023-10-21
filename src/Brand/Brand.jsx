import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
    const {name, image} = brand;

    return (
        <>
            <Link to={`/${name}`}>
                <div className="rounded-lg bg-gradient-to-r from-white to-gray-400 shadow-xl">
                    <figure><img className="rounded-t-lg h-[300px] lg:h-[400px] w-full" src={image} alt="Brands" /></figure>
                    <div className="card-body">
                        <h2 className="text-center text-4xl font-semibold">{name}</h2>
                    </div>
                </div>
            </Link>
            </>
    );
};

export default Brand;