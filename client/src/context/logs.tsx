import React, { useState, useContext, createContext, FunctionComponent } from 'react'
import { Logs } from '../types/Logs'

export const LogsContext = createContext<Context>(undefined!);

type Context = {
    logs: Logs[],
    test: string
}

export const LogsProvider: FunctionComponent = ({ children }) => {
    const [logs, setLogs] = useState<Logs[]>([])
    const test = "Logs context fungerar"

    return (
        <LogsContext.Provider value={{ logs, test }}>
            {children}
        </LogsContext.Provider>
    )
};

export const useLogsContext = () => useContext<Context>(LogsContext)

