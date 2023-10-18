import { useLoaderData } from "react-router-dom";
import Detail from "../Detail/Detail";

const Details = () => {

    const details = useLoaderData();
    console.log(details);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto my-8 px-10">
            {
                details.map((detail,i) => <Detail key={i} detail={detail}></Detail> )
            }
        </div>
    );
};

export default Details;