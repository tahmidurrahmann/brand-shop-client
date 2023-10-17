import './Banner.css'
const Banner = () => {
    return (
        <div className=''>
            <div className="background w-full h-[400px] md:h-[500px] lg:h-[700px] relative">
                <div className='absolute top-16 left-6 md:top-28 md:left-10 lg:top-56 lg:left-52 space-y-2'>
                    <div className='bg-[#13172b63] w-[90px] pl-3 py-1.5 rounded-full '>
                        <h1 className="text-white text-lg font-medium">On Sale</h1>
                    </div>
                    <h1 className='text-white text-4xl md:text-5xl lg:text-6xl font-bold'>New Arrivals <br />Smartphones</h1>
                    <p className='text-gray-400 text-xl font-medium'>Original price $799.00</p>
                    <p className='text-gray-300 text-3xl md:text-4xl font-bold'>$550.99</p>
                    <button className='bg-[#DD2955] py-2 md:py-3 px-5 md:px-7 text-white font-semibold rounded-lg md:text-xl'>Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;