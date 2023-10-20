import moment from "moment";
import { Link } from "react-router-dom";

const Relevant = () => {
    return (
        <div className="max-w-screen-xl py-5 mx-auto">
                        <div>
                            <div className="bg-gradient-to-r from-white to-gray-400 py-20 w-2/3 mx-auto px-5 rounded-xl space-y-5">
                                <h4 className="text-2xl font-medium">{moment().format('MMMM Do YYYY, h:mm:ss a')}</h4>
                                <h2 className="text-4xl font-bold">This Brand Have No Data Added</h2>
                                <p>Please Go and Add Some Product</p>
                                <Link to={'/addProduct'}>
                                    <div>
                                        <button className="btn bg-gradient-to-r from-[#DD2955] to-orange-800 hover:text-black text-white mt-4">Go Add Product</button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
    );
};

export default Relevant;