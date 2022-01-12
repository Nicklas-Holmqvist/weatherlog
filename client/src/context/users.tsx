import React, { useState, useContext, createContext, FunctionComponent, useEffect } from 'react'
import { IUsers, IPassword } from '../types/Users'

export const UsersContext = createContext<Context>(undefined!);

type Context = {
    user: IUsers,
    password: IPassword,
    deleteUser: () => void,
    changePassword: () => void,
    addUser: () => void,
    addUserInfo: () => void,
    editUser: () => void,     
    handleChange: (e:any) => void,    
}

export const UsersProvider: FunctionComponent = ({ children }) => {

    const emptyUser = {
        email: "",
        password: "",
        city: "",
        firstName: "",
        lastName: "",
    }

    const emptyPassword = {
        oldPassword: "",
        newPassword: ""
    }

    const [user, setUser] = useState<IUsers>(emptyUser)

    const [password, setPassword] = useState<IPassword>(emptyPassword)

    /**
     * Handle input changes in setting page
     * @param e value from inpufields in settings page
     * @returns 
     */
    const handleChange = (e:any) => {
        const value = e.target.value;
        const name = e.target.name;

        if(name === "oldPassword" || name === "newPassword"){
            setPassword({
                ...password,
                [name]: value
            })
        }

        setUser({
            ...user,
            [name]: value
        })     
    }

    const options = {
        fetchUser: {method: 'get'},
        addUser: {
            method: "post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(""),
        },
        addUserInfo: {
            method: "post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user),
        },
        editUser: {
            method: "put",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user),
        },
        changePassword: {
            method: "put",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(password),
        },
        deleteUser: {
            method: "delete",
            headers: {"Content-Type": "application/json"},
        },
    }

    useEffect(() => {
        fetch('/api/user', options.fetchUser)
            .then((res) => {
                if (res.status === 400) {
                    return;
                }
                return res.json();
            })
            .then((data) => {
                setUser(data)
            })
            .catch((err) => {
                console.error(err);
            });
    },[]);

    const addUser = async () => {          
        await fetch('/api/user/register', options.addUser)
        .catch((err) => {
            console.error(err);
        });
    };

    const addUserInfo = async () => {   
        await fetch('/api/user/addUserInfo', options.addUserInfo)
        .catch((err) => {
            console.error(err);
        });
    };

    const editUser = async () => {          
        await fetch(`/api/user/edit`, options.editUser)
        .catch((err) => {
            console.error(err);
        });
    };

    const changePassword = async () => {       
        await fetch(`/api/user/changePassword`, options.changePassword)
        .catch((err) => {
            console.error(err);
        });
        setPassword(emptyPassword)
    };

    const deleteUser = async () => {   
        await fetch(`/api/user/delete`, options.deleteUser)
        .catch((err) => {
            console.error(err);
        });
    };

    return (
        <UsersContext.Provider value={
            { 
                user,
                password,
                deleteUser, 
                changePassword,
                addUser, 
                addUserInfo, 
                editUser, 
                handleChange
            }
        }>
        {children}
        </UsersContext.Provider>
    )
};

export const useUsersContext = () => useContext<Context>(UsersContext)