"use client";

import { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({children}){
    const [isAuthenticated, setisAuthenticated] = useState(false);

    // checking auth status from local storage
    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if(token) setisAuthenticated(true);
    }, []);

    function login(token){
        localStorage.setItem("authToken", token);
        setisAuthenticated(true);
    };

    function logout(){
        localStorage.removeItem("authToken");
        setisAuthenticated(false);
    }

    return(
        <AuthContext.Provider value={{isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth(){
    return useContext(AuthContext);
}

