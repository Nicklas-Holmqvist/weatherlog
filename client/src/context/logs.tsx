import React, { useState, useContext, createContext, FunctionComponent, useEffect } from 'react'
import { Logs, LogDate, MonthName } from '../types/Logs'

export const LogsContext = createContext<Context>(undefined!);
    
type Context = {
    logValue: Logs,
    logDate: LogDate
    numberOfMonths: MonthName[]
    numberOfDays: string[]
    numberMonths: number[]
    addPost: () => void
    editPost: () => void
    deletePost: () => void
    fetchLogs: () => void
    handleChange: (e:any) => void
}

export const LogsProvider: FunctionComponent = ({ children }) => {
    const d = new Date()

    /** Contains all the users logs */
    const [logs, setLogs] = useState<Logs[]>()
    
    /** The object of dates dropdowns on create log */
    const [logDate, setLogDate] = useState<LogDate>({
        day: d.getDate().toString(),
        month: (d.getMonth()+1).toString(),
        year: d.getFullYear(),
    })

    console.log(logDate)

    /** The object that will be created in backend */
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

    /** Month in a year */
    const numberMonths: number[] = [1,2,3,4,5,6,7,8,9,10,11,12]
    const numberOfMonths: MonthName[] = [{number:"01",
                                        name: "Jan"},
                                        {number:"02",
                                        name: "Feb"},
                                        {number:"03",
                                        name: "Mar"},
                                        {number:"04",
                                        name: "Apr"},
                                        {number:"05",
                                        name: "Maj"},
                                        {number:"06",
                                        name: "Jun"},
                                        {number:"07",
                                        name: "Jul"},
                                        {number:"08",
                                        name: "Aug"},
                                        {number:"09",
                                        name: "Sep"},
                                        {number:"10",
                                        name: "Okt"},
                                        {number:"11",
                                        name: "Nov"},
                                        {number:"12",
                                        name: "Dec"},]

    /** Empty array that will contain days in a month, sets in "setDayInMonth" */
    const [numberOfDays, setNumberOfDays] = useState<string[]>([])

    /** Creates an array of days in choosed month */
    const setDayInMonth = () => {
        const getDays = new Date(logDate.year, Number(logDate.month), 0).getDate()

        let days = []

        for(let i = 1; i < getDays+1; i++) {
            if(i < 10) days.push((`0${i}`).toString())
            else days.push(i.toString())   
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

    const addZero = (e:any) => {
        if(e < 10) {
            return (`0${e}`).toString()
        } else return e.toString() 
    }
    
    /** Sets the data from logDate to logValue.date */
    useEffect(() => {
        setLogValue({
            ...logValue,
            date: `${logDate.year}${addZero(logDate.month)}${logDate.day.toString()}`
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

    return (
        <LogsContext.Provider value={{ 
                addPost, 
                editPost, 
                deletePost, 
                fetchLogs, 
                handleChange,
                logValue,
                logDate,
                numberOfMonths,
                numberOfDays,
                numberMonths
            }}>
            {children}
        </LogsContext.Provider>
    )
};

export const useLogsContext = () => useContext<Context>(LogsContext)