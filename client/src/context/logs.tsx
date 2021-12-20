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

    const optionsPost = {
        method: "post",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(postLog),
    };

    const addPost = async () => {   
        await fetch('/api/logs/register', optionsPost)
        .catch(function (err) {
            console.error(err);
        });
    };

    const optionsPut = {
        method: "put",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(postLog),
    };

    const editPost = async () => {   
        const logId = "61b9d185bd5038e17fc353a2"
        await fetch(`/api/logs/${logId}`, optionsPut)
        .catch(function (err) {
            console.error(err);
        });
    };

    const optionsDelete = {
        method: "delete",
        headers: {
        "Content-Type": "application/json",
        },
    };

    const deletePost = async () => {   
        const logId = "61b9d185bd5038e17fc353a2"
        await fetch(`/api/logs/${logId}`, optionsDelete)
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

