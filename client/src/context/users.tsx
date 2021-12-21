import React, { useState, useContext, createContext, FunctionComponent, useEffect } from 'react'
import { Users } from '../types/Users'

export const UsersContext = createContext<Context>(undefined!);

type Context = {
    Users: Users[],
    test: string,
    deleteUser: () => void,
    changePassword: () => void,
    fetchUser: () => void,
    createUser: () => void,
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
    const setInputs = (e:any) => {
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
    
        const options = {
            fetchUser: {
                method: 'get'
            },
            createUser: {
                method: "post",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newUser),
            },
            addInformation: {
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
            deleteuser: {
                method: "delete",
                headers: {"Content-Type": "application/json"}
            },
        }

    // Hämtar alla användarna
    const fetchUser = async () => {
        await fetch('/api/logs', options.fetchUser)
            .then((res) =>  {
                if (res.status === 400) {
                    return;
                }
                return res.json();
            })
            .then((data) =>  {
                setUsers(data)
            })
            .catch((err) =>  {
                console.error(err);
            });
    };

    // Skapar en användare
    const createUser = async () => { 
        await fetch('/api/user/register', options.createUser)
        .then((res) => {
            if (res.status === 503) {
                return;
            }
            return res.json();
        })
        .then((data) => {
            console.log(data)
        })
        .catch((err) =>  {
            console.error(err);
        });
    };
    
    // Lägger till information på en användare
    const addUserInfo = async () => {
        await fetch('/api/user/addUserInfo', options.addInformation)
        .then((res) => {
            if (res.status === 400) {
                return;
            }
            return res.json();
        })
        .then((data) => {
            console.log(data)
        })
        .catch((err) =>  {
            console.error(err);
        });
    };

    // Ändra informationen på en användare
    const editUser = async () => {           
        await fetch(`/api/user/edit`, options.editUser)
        .then((res) => {
            if (res.status === 400) {
                return;
            }
            return res.json();
        })
        .then((data) => {
            console.log(data)
        })
        .catch((err) =>  {
            console.error(err);
        });
    };

    // Ändra lösenord
    const changePassword = async () => {   
        await fetch(`/api/user/changePassword`, options.changePassword)
        .then((res) => {
            if (res.status === 400) {
                return;
            }
            return res.json();
        })
        .then((data) => {
            console.log(data)
        })
        .catch((err) =>  {
            console.error(err);
        });
    };

    // Ta bort en användare
    const deleteUser = async () => {        
        await fetch(`/api/user/delete`, options.deleteuser)
        .then((res) => {
            if (res.status === 400) {
                return;
            }
            return res.json();
        })
        .then((data) => {
            console.log(data)
        })
        .catch((err) =>  {
            console.error(err);
        });
    };

    useEffect(() => {
        // fetchUser()
    });

    return (
        <UsersContext.Provider value={{ Users, test, deleteUser, changePassword, fetchUser, createUser, addUserInfo, editUser, newPassword, setInputs }}>
            {children}
        </UsersContext.Provider>
    )
};

export const useUsersContext = () => useContext<Context>(UsersContext)

