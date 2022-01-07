import React, { useState, useContext, createContext, FunctionComponent, useEffect } from 'react'

import { ILogs, ILogDate } from '../types/Logs'

import { useDiagramsContext } from 'src/context/diagram'; 

export const LogsContext = createContext<Context>(undefined!);
    
type Context = {
    logs: ILogs[],
    logValue: ILogs,
    log: ILogs,
    logDate: ILogDate,
    numberOfMonths: number[],
    numberOfDays: number[],
    historyMonths:string[],
    addPost: () => void,
    getLogs: () => void
    getLog: (id:any) => void
    editPost: (id:any) => void,
    deletePost: () => void,
    getLogUrl: (e:any) => void,
    handleChange: (e:any) => void
    handleEditChange: (e:any) => void
}

export const LogsProvider: FunctionComponent = ({ children }) => {
    const d = new Date()
    const updateHistory = useDiagramsContext()

    const emptyLog:ILogs = {
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
    }
    
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

    /** The object that will be created in backend */
    const [log, setLog] = useState<ILogs>(emptyLog)
    
    /** Month in a year */
    const numberOfMonths: number[] = [1,2,3,4,5,6,7,8,9,10,11,12]
    const [historyMonths, setHistoryMonths] = useState<string[]>([])
    
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
     * Fetch the param to fetch the right date from api
     * @param e param from '/log/*date*
     */
    const getLogUrl = (e:any) => {
        getLog(e)
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
     * Handle input changes on create log page
     * @param e value from inpufields in create log
     * @returns 
     */
    const handleEditChange = (e:any) => {
        const value = e.target.value;
        const name = e.target.name;

        setLog({
            ...log,
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

    const splitUpYearMonths = (e:ILogs[]) => {
        let month:any = []
        for(let i = 0; i < e.length; i++) {
            month.push(splitDate(e[i], 0, 6))
        }

        let uniqueMonths:any = []
        month.forEach((m:string) => {
            if(!uniqueMonths.includes(m)) {
                uniqueMonths.push(m)
            }
        })
        setHistoryMonths(uniqueMonths)
    }   

    const splitDate = (date:ILogs, start:number, end:number) => {
        return date.date.substring(start, end)        
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
        getLog: {
            method: "get",
        },
        addPost: {
            method: "post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(logValue),
        },
        editPost: {
            method: "put",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(log),
        },
        deletePost: {
            method: "delete",
            headers: {"Content-Type": "application/json"},
        },
    }

    const getLogs = async () => {
        await fetch('/api/logs', options.fetchLogs)
        .then((res) => {
            if (res.status === 400) {
                return;
            }
            return res.json();
        })
        .then((data) => {
            setLogs(data)
            splitUpYearMonths(data)
        })
        .catch((err) => {
            console.error(err);
        });
    }
    /** Fetch all users logs at refresh */
    useEffect(() => {
        getLogs()
    },[])

    /** Fetch one log by date as ID */
    const getLog = async (id:any) => { 
        await fetch(`/api/log/${id}`, options.getLog)
            .then((res) => {
                if (res.status === 400) {
                    return;
                }
                return res.json();
            })
            .then((data) => {
                setLog(data)
            })
            .catch((err) => {
                console.error(err);
            });
    };

    /** Create a log */
    const addPost = async () => { 
        await fetch('/api/logs/register', options.addPost)
        .catch((err) => {
            console.error(err);
        });
        setLogValue(emptyLog)
        setLogDate({
            day: d.getDate(),
            month: (d.getMonth()+1),
            year: d.getFullYear(),
        })        
    };

    /** Edit a log */
    const editPost = async (id:any) => {
        await fetch(`/api/logs/${id}`, options.editPost)
        .catch((err) => {
            console.error(err);
        });
        setLog(emptyLog)
    };

    /** Remove a log */
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
                handleEditChange,
                getLog,
                getLogs,
                getLogUrl,
                logs,
                log,
                logValue,
                logDate,
                numberOfMonths,
                numberOfDays,
                historyMonths
            }}>
            {children}
        </LogsContext.Provider>
    )
};

export const useLogsContext = () => useContext<Context>(LogsContext)