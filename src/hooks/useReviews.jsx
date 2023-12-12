import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useReviews = () => {

    const axiosSecure = useAxiosSecure();

    const { data: allReviews = [], refetch, isPending } = useQuery({
        queryKey: ["reviews"],
        queryFn: async () => {
            const res = await axiosSecure.get("/reviews");
            return res?.data;
        }
    })

    return [allReviews, refetch, isPending];
};

export default useReviews;