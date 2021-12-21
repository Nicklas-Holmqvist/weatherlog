import React, { useState, useContext, createContext, FunctionComponent, useEffect } from 'react'
import { Users } from '../types/Users'

export const UsersContext = createContext<Context>(undefined!);

type Context = {
    Users: Users[],
    test: string,
    deleteUser: () => void,
    changePassword: () => void,
    fetchUser: () => void,
    addUser: () => void,
    addUserInfo: () => void,
    editUser: () => void,    
    logout: () => void,    
}

export const UsersProvider: FunctionComponent = ({ children }) => {
    const [Users, setUsers] = useState<Users[]>([])
    const test = "Users context fungerar"

    const newUser = {
        email: "b@b.se",
        password: "123"
    }

    const userInfo = {
        firstName: "Bertil",
        lastName: "Bertilsson",
        city: "Borås",
    }

    const newUserInfo = {
        firstName: "Albin",
        lastName: "Albinsson",
        city: "Alingsås",
    }

    const newPassword = {
        oldPassword: "123",
        newPassword: "1234"
    }

    const options = {
        fetchUser: {method: 'get'},
        addUser: {
            method: "post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newUser),
        },
        addUserInfo: {
            method: "post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(userInfo),
        },
        editUser: {
            method: "put",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newUserInfo),
        },
        changePassword: {
            method: "put",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newPassword),
        },
        logout: {
            method: "post",
            headers: {"Content-Type": "application/json"},
        },
        deleteUser: {
            method: "delete",
            headers: {"Content-Type": "application/json"},
        },
    }

    const fetchUser = async () => {
        await fetch('/api/logs', options.addUser)
            .then((res) => {
                if (res.status === 400) {
                    return;
                }
                return res.json();
            })
            .then((data) => {
                setUsers(data)
                console.log(data)
            })
            .catch((err) => {
                console.error(err);
            });
    };

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
    };

    const logout = async () => {   
        await fetch(`/api/user/logout`, options.logout)
        .catch((err) => {
            console.error(err);
        });
    };

    const deleteUser = async () => {   
        await fetch(`/api/user/delete`, options.deleteUser)
        .catch((err) => {
            console.error(err);
        });
    };

    useEffect(() => {
        // fetchUser()
    });

    return (
        <UsersContext.Provider value={{ Users, test, deleteUser, changePassword, fetchUser, addUser, addUserInfo, editUser, logout }}>
            {children}
        </UsersContext.Provider>
    )
};

export const useUsersContext = () => useContext<Context>(UsersContext)