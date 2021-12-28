import React, { useState, useContext, createContext, FunctionComponent, useEffect } from 'react'
import { Logs, LogDate } from '../types/Logs'

export const LogsContext = createContext<Context>(undefined!);
    
type Context = {
    logValue: Logs,
    logDate: LogDate,
    addPost: () => void
    editPost: () => void
    deletePost: () => void
    fetchLogs: () => void
    handleChange: (e:any) => void
}

export const LogsProvider: FunctionComponent = ({ children }) => {
    const d = new Date()

    const [logs, setLogs] = useState<Logs[]>()
    
    const [logDate, setLogDate] = useState<LogDate>({
        day: d.getDate().toString(),
        month: d.getMonth().toString(),
        year: d.getFullYear().toString(),
    })

    const [logValue, setLogValue] = useState<Logs>({
        airFeeling: "",
        airpressure: "",
        date: logDate.year + logDate.month + logDate.day,
        description: "",
        humidity: "",
        precipitation: "",
        temperature: "",
        user: "",
        windDirection: "",
        windSpeed: "",
        weather: ""
    })

    const handleChange = (e:any) => {
        const value = e.target.value;
        const name = e.target.name;

        if(name === "year" || name === "month" || name === "day") {
            setLogDate({
                ...logDate,
                [name]: value
            })  
            return
        }

        setLogValue({
            ...logValue,
            [name]: value
        })     
    }
    
    useEffect(() => {
        setLogValue({
            ...logValue,
            date: logDate.year + logDate.month + logDate.day
        }) 
    }, [logDate])

    const options = {
        fetchLogs: {
            method: 'get',
        },
        addPost: {
            method: "post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(logValue),
        },
        editPost: {
            method: "put",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(logValue),
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
    const addPost = async () => { 

        await fetch('/api/logs/register', options.addPost)
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <LogsContext.Provider value={{ 
                addPost, 
                editPost, 
                deletePost, 
                fetchLogs, 
                handleChange, 
                logValue,
                logDate
            }}>
            {children}
        </LogsContext.Provider>
    )
};

export const useLogsContext = () => useContext<Context>(LogsContext)