import axios from "axios";

const axiosSecure = axios.create({
    baseURL : "https://dream-tech-server-p07cxoeoq-tahmidur-rahmans-projects.vercel.app"
})

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;