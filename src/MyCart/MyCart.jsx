import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useState } from "react";

const MyCart = () => {

    const cartData = useLoaderData();

    const [remainingCarts, setRemainingCarts] = useState(cartData);
    console.log(remainingCarts);

    return (
        <div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 gap-3 my-10 md:my-20">
                {
                    remainingCarts.map((cart,i) => <Cart key={i} remainingCarts={remainingCarts} setRemainingCarts={setRemainingCarts} cart={cart}></Cart>)
                }
            </div>
        </div>
    );
};

export default MyCart;