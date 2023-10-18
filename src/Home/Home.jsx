import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Brand from "../Brand/Brand";
import Contribution from "../Contribution/Contribution";
import Marque from "../Marquee/Marquee";

const Home = () => {

    const brands = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-0 md:my-20 px-10 py-6 md:p-6 lg:p-0">
            {
                brands.map((brand,i) => <Brand key={i} brand={brand}></Brand>)
            }
            </div>
            <Marque></Marque>
            <Contribution></Contribution>
        </div>
    );
};

export default Home;