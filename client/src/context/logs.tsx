import React, { useState, useContext, createContext, FunctionComponent, useEffect } from 'react'
import { Logs } from '../types/Logs'

export const LogsContext = createContext<Context>(undefined!);
    
type Context = {
    logs: Logs[],
    test: string,
    addPost: () => void
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

    // Hämtar alla logs
    const fetchLogs = async () => {
        await fetch('/api/logs', {method: 'get'})
            .then(function (res) {
                if (res.status === 400) {
                    return;
                }
                return res.json();
            })
            .then(function (data) {
                setLogs(data)
                console.log(data)
            })
            .catch(function (err) {
                console.error(err);
            });
    };

    // Skapar en log
    const addPost = async () => {   
        const options = {
            method: "post",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(postLog),
        };
        await fetch('/api/logs/register', options)
        .catch(function (err) {
            console.error(err);
        });
    };

    // Ändra en log
    const editPost = async () => {   
        const options = {
            method: "put",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(postLog),
        };
        const logId = "61b9d185bd5038e17fc353a2"
        await fetch(`/api/logs/${logId}`, options)
        .catch(function (err) {
            console.error(err);
        });
    };

    // Ta bort log
    const deletePost = async () => {   
        const options = {
            method: "delete",
            headers: {
            "Content-Type": "application/json",
            },
        };
        const logId = "61b9d185bd5038e17fc353a2"
        await fetch(`/api/logs/${logId}`, options)
        .catch(function (err) {
            console.error(err);
        });
    };

    useEffect(() => {
        // fetchLogs();
    });

    return (
        <LogsContext.Provider value={{ logs, test, addPost, editPost, deletePost }}>
            {children}
        </LogsContext.Provider>
    )
};

export const useLogsContext = () => useContext<Context>(LogsContext)

