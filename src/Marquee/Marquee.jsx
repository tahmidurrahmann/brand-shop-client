import Marquee from "react-fast-marquee";

const Marque = () => {
    return (
        <div className="container mx-auto my-10 md:my-20">
            <h1 className="text-center text-2xl my-10 md:my-20 font-bold">Our Sponsors</h1>
            <Marquee speed={140}>
                <div className="">
                    <img src="https://demothemedh.b-cdn.net/axtronic/wp-content/uploads/2022/01/brand-2.svg" alt="" />
                </div>
                <div>
                    <img src="https://demothemedh.b-cdn.net/axtronic/wp-content/uploads/2022/01/brand-3.svg" alt="" />
                </div>
                <div>
                    <img src="https://demothemedh.b-cdn.net/axtronic/wp-content/uploads/2022/01/brand-4.svg" alt="" />
                </div>
                <div>
                    <img src="https://demothemedh.b-cdn.net/axtronic/wp-content/uploads/2022/01/brand-5.svg" alt="" />
                </div>
                <div>
                    <img src="https://demothemedh.b-cdn.net/axtronic/wp-content/uploads/2022/01/brand-6.svg" alt="" />
                </div>
                <div>
                    <img src="https://demothemedh.b-cdn.net/axtronic/wp-content/uploads/2022/01/brand-1.svg" alt="" />
                </div>
                <div>
                    <img src="https://demothemedh.b-cdn.net/axtronic/wp-content/uploads/2022/01/brand-5.svg" alt="" />
                </div>
            </Marquee>
        </div>
    );
};

export default Marque;