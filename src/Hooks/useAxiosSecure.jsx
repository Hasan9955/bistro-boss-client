import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "./useAuth";


export const AxiosBase = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {

    const navigate = useNavigate();
    const {logOut} = useAuth();
    const location = useLocation();

    // interceptors for reaquest
    AxiosBase.interceptors.request.use(function (config){
        const token = localStorage.getItem('access-token') 
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      })

    AxiosBase.interceptors.response.use((res) =>{
        return res;
    }, (error) =>{
        const status =  error.response.status 
        if(status === 401 || status === 403){
            logOut()
            .then(() =>{
                navigate('/login', {state: location.pathname})
            })
        }
        return Promise.reject(error)
    })
    return AxiosBase;
};


// eslint-disable-next-line react-refresh/only-export-components
export default useAxiosSecure;