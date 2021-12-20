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
    setInputs: (e:string) => void,  
    newPassword: {oldPassword:string, newPassword:string}
}

export const UsersProvider: FunctionComponent = ({ children }) => {
    const [Users, setUsers] = useState<Users[]>([])
    const test = "Users context fungerar"

    // Test att sätta värdet från input direkt i context
    const [newPassword, setNewPassword] = useState<{oldPassword:string, newPassword:string}>({
        oldPassword: "",
        newPassword: ""
    })

    // Test att sätta värdet från input direkt i context via en universal funktion
    function setInputs(e:any){
        const value = e.target.value;
        console.log(e)

        setNewPassword({
            ...newPassword,
            [e.target.name]: value
        })     
    }

    // Dummy data för att skapa en ny användare
    const newUser = {
        email: "b@b.se",
        password: "123"
    }

    // Dummy data för att lägga till information på en användare
    const userInfo = {
        firstName: "Bertil",
        lastName: "Bertilsson",
        city: "Borås",
    }

    // Dummy data för att ändra information på en användare
    const newUserInfo = {
        firstName: "Albin",
        lastName: "Albinsson",
        city: "Alingsås",
    }

    // Hämtar alla användarna
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

    // Skapar en användare
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
    
    // Lägger till information på en användare
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
            console.log('error')
            console.error(err);
        });
    };

    // Ändra informationen på en användare
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

    // Ändra lösenord
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

    // Ta bort en användare
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
        <UsersContext.Provider value={{ Users, test, deleteUser, changePassword, fetchUser, addUser, addUserInfo, editUser, newPassword, setInputs }}>
            {children}
        </UsersContext.Provider>
    )
};

export const useUsersContext = () => useContext<Context>(UsersContext)

