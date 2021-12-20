import React, { useState, useContext, createContext, FunctionComponent } from 'react'
import { Users } from '../types/Users'

export const UsersContext = createContext<Context>(undefined!);

type Context = {
    Users: Users[],
    test: string
}

export const UsersProvider: FunctionComponent = ({ children }) => {
    const [Users, setUsers] = useState<Users[]>([])
    const test = "Users context fungerar"

    return (
        <UsersContext.Provider value={{ Users, test }}>
            {children}
        </UsersContext.Provider>
    )
};

export const useUsersContext = () => useContext<Context>(UsersContext)

