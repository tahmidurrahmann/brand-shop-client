import { Link } from "react-router-dom";

const Brand = () => {
    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-0 md:my-20 px-10 py-6 md:p-6 lg:p-0">
            <Link to='/iPhone'>
                <div className="card bg-gray-50 shadow-xl">
                    <figure><img className="h-[300px] lg:h-[400px] w-full" src="https://mapandfire.com/wp-content/uploads/2021/09/apple-brand-logo.jpg" alt="Shoes" /></figure>
                    <div className="card-body bg-gradient-to-r from-white to-gray-700">
                        <h2 className="text-center text-4xl font-bold">iPhone</h2>
                    </div>
                </div>
            </Link>
            <Link to='/google'>
                <div className="card bg-gray-100 shadow-xl">
                    <figure><img className="h-[300px] lg:h-[400px] w-full" src="https://blog.hubspot.com/hubfs/image8-2.jpg" alt="Shoes" /></figure>
                    <div className="card-body bg-gradient-to-r from-orange-700 via-green-300 to-blue-600">
                        <h2 className="text-center text-4xl font-bold">Google</h2>
                    </div>
                </div>
            </Link>
            <Link to='/sony'>
                <div className="card bg-white shadow-xl">
                    <figure><img className="h-[300px] lg:h-[400px] w-full" src="data:image/png;base64,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" alt="Shoes" /></figure>
                    <div className="card-body bg-gradient-to-r from-white to-gray-700">
                        <h2 className="text-center text-4xl font-bold">Sony</h2>
                    </div>
                </div>
            </Link>
            <Link to='/intel'>
                <div className="card bg-gray-50 shadow-xl">
                    <figure><img className="h-[300px] lg:h-[400px] w-full" src="https://logos-world.net/wp-content/uploads/2021/09/Intel-Emblem.png" alt="Shoes" /></figure>
                    <div className="card-body bg-gradient-to-r from-blue-300 via-blue-500 to-white">
                        <h2 className="text-center text-4xl font-bold">Intel</h2>
                    </div>
                </div>
            </Link>
            <Link to='/samsung'>
                <div className="card bg-gray-50 shadow-xl">
                    <figure><img className="h-[300px] lg:h-[400px] w-full" src="https://static.vecteezy.com/system/resources/previews/020/927/449/non_2x/samsung-brand-logo-phone-symbol-name-white-design-south-korean-mobile-illustration-with-black-background-free-vector.jpg" alt="Shoes" /></figure>
                    <div className="card-body bg-gradient-to-r from-white to-gray-700">
                        <h2 className="text-center text-4xl font-bold">Samsung</h2>
                    </div>
                </div>
            </Link>
            <Link to='/realme'>
                <div className="card bg-gray-50 shadow-xl">
                    <figure><img className="h-[300px] lg:h-[400px] w-full" src="https://zeevector.com/wp-content/uploads/Realme-Logo-Vector.png" alt="Shoes" /></figure>
                    <div className="card-body bg-gradient-to-r from-gray-400 to-yellow-400">
                        <h2 className="text-center text-4xl font-bold">Realme</h2>
                    </div>
                </div>
            </Link>
        </div>

    );
};

export default Brand;