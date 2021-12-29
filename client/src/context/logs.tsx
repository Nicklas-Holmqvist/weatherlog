import React, { useState, useContext, createContext, FunctionComponent, useEffect } from 'react'
import { ILogs, ILogDate } from '../types/Logs'

export const LogsContext = createContext<Context>(undefined!);
    
type Context = {
    logs: ILogs[],
    logValue: ILogs,
    logDate: ILogDate,
    numberOfMonths: number[],
    numberOfDays: number[],
    addPost: () => void,
    editPost: () => void,
    deletePost: () => void,
    handleChange: (e:any) => void
}

export const LogsProvider: FunctionComponent = ({ children }) => {
    const d = new Date()
    
    /** Contains all the users logs */
    const [logs, setLogs] = useState<ILogs[]>([])
    
    /** The object of dates dropdowns on create log */
    const [logDate, setLogDate] = useState<ILogDate>({
        day: d.getDate(),
        month: (d.getMonth()+1),
        year: d.getFullYear(),
    })
    
    /** The object that will be created in backend */
    const [logValue, setLogValue] = useState<ILogs>({
        airFeeling: "",
        airpressure: "",
        date: `${logDate.year}${logDate.month}${logDate.day}`,
        description: "",
        humidity: "",
        precipitation: "",
        temperature: "",
        user: "",
        windDirection: "",
        windSpeed: "",
        weather: ""
    })
    
    /** Month in a year */
    const numberOfMonths: number[] = [1,2,3,4,5,6,7,8,9,10,11,12]
    
    /** Empty array that will contain days in a month, sets in "setDayInMonth" */
    const [numberOfDays, setNumberOfDays] = useState<number[]>([])
    /** Gets the value of selected month */
    const getDays = new Date(logDate.year, logDate.month, 0).getDate()
    
    /** Creates an array of days in choosed month */
    const setDayInMonth = () => {

        let days:number[] = []

        for(let i = 1; i < getDays+1; i++) {
            days.push(i)   
            setNumberOfDays(days)  
        }           
    }

    /**
     * Handle input changes on create log page
     * @param e value from inpufields in create log
     * @returns 
     */
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

    /**
     * Function that adds a zero infront of single digits
     * @param e date values
     * @returns 
     */
    const addZero = (e:any) => {
        if(e < 10) {
            return (`0${e}`).toString()
        } else return e.toString() 
    }

    /**
     * Sorts incoming logs per date and sets the variable logs
     * @param e incoming data från GET logs api
     */
    const sortLogs = (e:ILogs[]) => {
        setLogs(e.sort((a:any, b:any) => {
            return a.date - b.date
        }))
    }
    
    /** Sets the data from logDate to logValue.date */
    useEffect(() => {
        setLogValue({
            ...logValue,
            date: `${logDate.year}${addZero(logDate.month)}${addZero(logDate.day)}`
        }) 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [logDate])

    /** Run function when year or month is changed in create log */
    useEffect(() => {
        setDayInMonth() 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[logDate.year, logDate.month])

    /** All options to all API-calls */
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
    useEffect(() => {
        fetch('/api/logs', options.fetchLogs)
            .then((res) => {
                if (res.status === 400) {
                    return;
                }
                return res.json();
            })
            .then((data) => {
                sortLogs(data)     
            })
            .catch((err) => {
                console.error(err);
            });
    },[])
    

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
    
    return (
        <LogsContext.Provider value={{ 
                addPost, 
                editPost, 
                deletePost, 
                handleChange,
                logs,
                logValue,
                logDate,
                numberOfMonths,
                numberOfDays,
            }}>
            {children}
        </LogsContext.Provider>
    )
};

export const useLogsContext = () => useContext<Context>(LogsContext)