"use client"

import React, {createContext, useState, useEffect, useContext} from 'react';
import {axiosWithBase} from "../../utils";
import {useRouter, usePathname} from "next/navigation";

// Create the auth context
export const AuthContext = createContext({});

// Create the auth provider component
export const AuthProvider = ({ children, href }) => {
    const [user, setUser] = useState(null);
    const [userPreferred, setUserPreferred] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const csrf = () => axiosWithBase.get("sanctum/csrf-cookie");
    const router = useRouter();
    const currentPage = usePathname();


    // Simulate user authentication
    useEffect( () => {

        //console.log('href:', currentPage  );
        //color: router.pathname === href ? 'red' : 'black',

        if(!((currentPage !== '/') ^ (currentPage !== '/user-signup'))){
            (async ()=>{
                if (!user) {
                    await getLoggedUser();
                    setIsLoading(false);
                }
                if (!userPreferred) {
                    userPreference();
                }
            })()
        }


    }, []);


    const userPreference = () => {
        setIsLoading(true);

        axiosWithBase.get('/api/user-preference')
            .then(res=>res.data)
            .then((datas)=>{
                //console.log('-----',datas)
                setIsLoading(false);
                setUserPreferred(datas)
            }).catch(()=>{
            setIsLoading(false);
        })
    }


    const getLoggedUser = async () => {
        setIsLoading(true);
        try {
            const {data} = await axiosWithBase.get("/api/user");
            setUser(data);
            //console.log('user: ',data)


        } catch (e){
            setIsLoading(false);


            console.log('user not logged in')
        }
    };

    // Login function
    const login = async ({...data}) => {
        setIsLoading(true);

        await csrf();

        try {

            await axiosWithBase.post("/login", data);
            await getLoggedUser();
            setIsLoading(false);



            router.push("/news-and-articles")
            return {status: true};
        }catch(e){
            setIsLoading(false);
            //console.log('error',e)
            return {status: false, err: e};
        }

    };

    const register = async ({...data}) => {
        setIsLoading(true);

        try {

            await axiosWithBase.post("/register", data);
            await getLoggedUser();
            setIsLoading(false);


            router.push("/news-and-articles")
            return {status: true};
        }catch(e){
            setIsLoading(false);
            return {status: false, err: e};
        }

    };


    const postRequestToBackend = () => {

    }

    // Logout function
    const logout = () => {
        setIsLoading(true);

        // Perform logout logic here
        axiosWithBase.post('/logout').then(()=>{
            setIsLoading(false);

            router.push("/")

            setUser(null);
        })
    };

    // Provide the auth context value
    const authContextValue = {
        user,
        userPreferred,
        userPreference,
        register,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {isLoading && <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
                <h2 className="text-center text-white text-xl font-semibold">Loading...</h2>
                <p className="w-1/3 text-center text-white">
                    This may take a few seconds, please wait...
                </p>
            </div>
            }
            {children}
        </AuthContext.Provider>
    );
};


export default function useAuthContext() {
    return useContext(AuthContext);
};
