import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "./useAuth";


const axiosSecure = axios.create({
    baseURL: 'https://bistro-boss-server-chi-three.vercel.app'
})
const useAxiosSecure = () => {

    const {logOut} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    // interceptors for request
    axiosSecure.interceptors.request.use(function (config){
        const token = localStorage.getItem('access-token') 
        console.log('token in useAxios secure', token)
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) { 
        // Do something with request error
        return Promise.reject(error);
      })

    axiosSecure.interceptors.response.use((res) =>{
        return res;
    }, (error) =>{
        const status =  error.response.status 
        if(status === 401 || status === 403){
            console.log('from useAxios Secure', error)
            logOut()
            .then(() =>{
                return navigate('/login', {state: location.pathname})
             })
        }
        return Promise.reject(error)
    })
    return axiosSecure;
};

// 
// eslint-disable-next-line react-refresh/only-export-components
export default useAxiosSecure;