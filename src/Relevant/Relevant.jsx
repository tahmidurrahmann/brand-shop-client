import moment from "moment";
import { Link } from "react-router-dom";

const Relevant = () => {
    return (
        <div className="max-w-screen-xl py-5 mx-auto">
                        <div>
                            <div className="bg-gradient-to-r from-orange-300 to-orange-700 py-20 w-2/3 mx-auto px-5 rounded-xl space-y-5">
                                <h4 className="text-2xl font-medium">{moment().format('MMMM Do YYYY, h:mm:ss a')}</h4>
                                <h2 className="text-4xl font-bold">This Brand Have No Data Added</h2>
                                <p>Please Go Add Product And Add Some Product</p>
                                <Link to={'/addProduct'}>
                                    <div>
                                        <button className="btn bg-gradient-to-r from-orange-600 to-orange-400 hover:text-blue-800 text-white mt-4">Go Add Product</button>
                                    </div>
                                </Link>
                            </div>
                            <div className="h-36 w-36 bg-gradient-to-r from-orange-300 to-orange-700 rounded-xl absolute -mt-60 ml-[970px]">

                            </div>
                        </div>
                    </div>
    );
};

export default Relevant;