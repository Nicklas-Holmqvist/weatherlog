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

    const fetchUser = async () => {
        await fetch('/api/logs', {method: 'get'})
            .then(function (res) {
                if (res.status === 400) {
                    return;
                }
                return res.json();
            })
            .then(function (data) {
                setUsers(data)
                console.log(data)
            })
            .catch(function (err) {
                console.error(err);
            });
    };

    const addUser = async () => {   
        const options = {
            method: "post",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        };
        await fetch('/api/user/register', options)
        .catch(function (err) {
            console.error(err);
        });
    };

    const addUserInfo = async () => {   
        const options = {
            method: "post",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(userInfo),
        };
        await fetch('/api/user/addUserInfo', options)
        .catch(function (err) {
            console.error(err);
        });
    };

    const editUser = async () => {   
        const options = {
            method: "put",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(newUserInfo),
        };
        await fetch(`/api/user/edit`, options)
        .catch(function (err) {
            console.error(err);
        });
    };

    const changePassword = async () => {   
        const options = {
            method: "put",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(newPassword),
        };

        await fetch(`/api/user/changePassword`, options)
        .catch(function (err) {
            console.error(err);
        });
    };

    const logout = async () => {   
        const options = {
            method: "post",
            headers: {
            "Content-Type": "application/json",
            },
        };
        await fetch(`/api/user/logout`, options)
        .catch(function (err) {
            console.error(err);
        });
    };

    const deleteUser = async () => {   
        const options = {
            method: "delete",
            headers: {
            "Content-Type": "application/json",
            },
        };
        await fetch(`/api/user/delete`, options)
        .catch(function (err) {
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