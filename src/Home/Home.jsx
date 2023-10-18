import Banner from "../Banner/Banner";
import { LiaShippingFastSolid } from 'react-icons/lia';
import { FaMedal } from 'react-icons/fa';
import { IoHeartCircleOutline } from 'react-icons/io5';
import { BsWallet } from 'react-icons/bs';
import Brand from "../Brand/Brand";
import Marque from "../Marquee/Marquee";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brand></Brand>
            <div className="px-20 md:px-28 py-10 lg:p-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container mx-auto lg:gap-32 gap-12 justify-center items-center lg:my-10">
                <div className="flex gap-4 items-center">
                    <LiaShippingFastSolid className="text-5xl md:text-6xl text-[#DD2955]"></LiaShippingFastSolid>
                    <div>
                        <h1 className="font-bold text-base">Free Shipping</h1>
                        <p className="text-[#6A7285] text-sm">Free Shipping in all order</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <FaMedal className="text-4xl text-[#DD2955]"></FaMedal>
                    <div>
                        <h1 className="font-bold text-base">Recognizing Excellence</h1>
                        <p className="text-[#6A7285] text-sm">Outstanding achievements</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <IoHeartCircleOutline className="text-5xl text-[#DD2955]"></IoHeartCircleOutline>
                    <div>
                        <h1 className="font-bold text-base">Guiding Principles</h1>
                        <p className="text-[#6A7285] text-sm">Customers satisfaction</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <BsWallet className="text-4xl md:text-5xl text-[#DD2955]"></BsWallet>
                    <div>
                        <h1 className="font-bold text-base">Less Money</h1>
                        <p className="text-[#6A7285] text-sm">Save money for good</p>
                    </div>
                </div>
            </div>
            <Marque></Marque>
        </div>
    );
};

export default Home;