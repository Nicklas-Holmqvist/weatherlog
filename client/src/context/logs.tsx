import React, { useState, useContext, createContext, FunctionComponent, useEffect } from 'react'
import { Logs } from '../types/Logs'

export const LogsContext = createContext<Context>(undefined!);
    
type Context = {
    logs: Logs[],
    test: string,
    createLog: (e:any) => void
    editPost: () => void
    deletePost: () => void
}

export const LogsProvider: FunctionComponent = ({ children }) => {
    const [logs, setLogs] = useState<Logs[]>([])
    const test = "Logs context fungerar"
    
    // Dummy information för en log
    const postLog = {
        airFeeling: "Kyligt",
        airpressure: "String",
        date: "1234",
        description: "String",
        humidity: "String",
        precipitation: "String",
        temperature: "17",
        windDirection: "String",
        windSpeed: "String",
        weather: "String",
    }

    const options = {
        fetchLogs: {
            method: 'get'
        },
        createLog: {
            method: "post",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(postLog),
        },
        editPost: {
            method: "put",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(postLog),
        },
        deletePost: {
            method: "delete",
            headers: {
            "Content-Type": "application/json",
            },
        }
    }

    // Hämtar alla logs
    const fetchLogs = async () => {
        await fetch('/api/logs', options.fetchLogs)
            .then((res) => {
                if (res.status === 400) {
                    return;
                }
                return res.json();
            })
            .then((data) => {
                setLogs(data)
            })
            .catch((err) =>  {
                console.error(err);
            });
    };

    // Skapar en log
    const createLog = async (e:any) => {
        await fetch('/api/logs/register', options.createLog)
        .then((res) => {
            console.log(res)
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

    // Ändra en log
    const editPost = async () => {   
        const logId = "61b9d185bd5038e17fc353a2"
        await fetch(`/api/logs/${logId}`, options.editPost)
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

    // Ta bort log
    const deletePost = async () => {          
        const logId = "61b9d185bd5038e17fc353a2"
        await fetch(`/api/logs/${logId}`, options.fetchLogs)
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
        // fetchLogs();
    });

    return (
        <LogsContext.Provider value={{ logs, test, createLog, editPost, deletePost }}>
            {children}
        </LogsContext.Provider>
    )
};

export const useLogsContext = () => useContext<Context>(LogsContext)

