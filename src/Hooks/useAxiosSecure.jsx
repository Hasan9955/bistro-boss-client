import axios from "axios";


export const AxiosBase = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
    return AxiosBase;
};

// eslint-disable-next-line react-refresh/only-export-components
export default useAxiosSecure;