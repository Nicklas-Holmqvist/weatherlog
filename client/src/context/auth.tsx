import React, { useState, useContext, createContext, FunctionComponent, useEffect } from 'react'

export const AuthContext = createContext<Context>(undefined!);
    
type Context = {  
    isAuth:boolean
    loading:boolean
    handleAuth: (e:any) => void,
    logout: () => void,   
}

export const AuthProvider: FunctionComponent = ({ children }) => {
    
    const [isAuth, setIsAuth] = useState<any>(undefined) 
    const [loading, setLoading] = useState<boolean>(true)
    
    const handleAuth = (e:any) => {
        setIsAuth(e)
    }
    
    const logout = async () => {   
        setIsAuth(false)
        await fetch(`/api/user/logout`, {
            method: "post",
            headers: {"Content-Type": "application/json"},
        })
        .catch((err) => {
            console.error(err);
        });
    };
    
    useEffect(() => {       
        fetch('/auth', {method: 'get'})
        .then(function (res) {
            if (res.status === 400) {
                return;
            }
            return res.json();
        })
        .then(function (data) {
            if(data === null) setIsAuth(false)
            setTimeout(()=>setLoading(false), 500)            
            if(data !== undefined) setIsAuth(data)
            else setIsAuth(data)
        })
        .catch(function (err) {
            console.error(err);
        });       
            
    },[])
    
    return (
        <AuthContext.Provider value={{ 
            isAuth,
            loading,
            handleAuth,
            logout
            }}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuthContext = () => useContext<Context>(AuthContext)