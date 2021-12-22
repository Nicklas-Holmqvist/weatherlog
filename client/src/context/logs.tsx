import React, { useState, useContext, createContext, FunctionComponent, useEffect } from 'react'
import { Logs } from '../types/Logs'

export const LogsContext = createContext<Context>(undefined!);
    
type Context = {
    logs: Logs,
    test: string,
    addPost: (e: Logs) => void
    editPost: () => void
    deletePost: () => void
    fetchLogs: () => void
}

export const LogsProvider: FunctionComponent = ({ children }) => {
    const [logs, setLogs] = useState<Logs>({
        airFeeling: "",
        airpressure: "",
        date: "",
        description: "",
        humidity: "",
        precipitation: "",
        temperature: "",
        user: "",
        windDirection: "",
        windSpeed: "",
        weather: ""
    })
    const test = "Logs context fungerar"

    // Dummy information för en log
    const postLog = {
        airFeeling: "Kyligt",
        airpressure: "String",
        date: "987",
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
            method: 'get',
        },
        addPost: {
            method: "post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(postLog),
        },
        editPost: {
            method: "put",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(postLog),
        },
        deletePost: {
            method: "delete",
            headers: {"Content-Type": "application/json"},
        },
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
                console.log(data)
            })
            .catch((err) => {
                console.error(err);
            });
    };

    // Skapar en log
    const addPost = async (e:Logs) => {   

        const addPost = {
            method: "post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(e),
        }

        await fetch('/api/logs/register', addPost)
        .catch((err) => {
            console.error(err);
        });
    };

    // Ändra en log
    const editPost = async () => {  
        const logId = "61c1cf0f934272f160fffbca"
        await fetch(`/api/logs/${logId}`, options.editPost)
        .catch((err) => {
            console.error(err);
        });
    };

    // Ta bort log
    const deletePost = async () => {  
        const logId = "61c1cf0f934272f160fffbca"
        await fetch(`/api/logs/${logId}`, options.deletePost)
        .catch((err) => {
            console.error(err);
        });
    };

    useEffect(() => {
        // fetchLogs();
    });

    return (
        <LogsContext.Provider value={{ logs, test, addPost, editPost, deletePost, fetchLogs }}>
            {children}
        </LogsContext.Provider>
    )
};

export const useLogsContext = () => useContext<Context>(LogsContext)