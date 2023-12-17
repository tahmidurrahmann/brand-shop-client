import './Banner.css'
const Banner = () => {
    return (
        <div className='-mt-20'>
            <div className="background w-full h-[400px] md:h-[500px] lg:h-[700px] relative">
                <div className='absolute top-16 left-6 md:top-28 md:left-10 lg:top-56 lg:left-52 space-y-2'>
                    <h1 className='text-white text-4xl md:text-5xl lg:text-6xl font-semibold'>Tech Wonders <span className='text-[#DD2955]'>Await</span> You</h1>
                    <p className='text-gray-300 md:text-xl font-semibold'>Discover Innovation at DreamTech. Your <br /> Trusted <span className='text-[#DD2955]'>Source</span> for Cutting-Edge <br />Technology and Electronics.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;