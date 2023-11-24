import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext();
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {

    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true);

    const axiosPublic = useAxiosPublic();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
            if(currentUser){
                const userInfo = {email: currentUser.email}
                axiosPublic.post('/jwt', userInfo)
                .then(res => {
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                        setLoading(false)
                    }
                })
            }
            else{
                // do something
                localStorage.removeItem('access-token')
                setLoading(false)
            }
        })

        return () => {
            return unsubscribe()

        }
    },[axiosPublic])

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSign = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }


    const logOut = () =>{
        return signOut(auth)
    }

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSign,
        logOut,
        updateUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;