import React, { useState, useContext, createContext, FunctionComponent, useEffect } from 'react'
import { ILogs, ILogDate } from '../types/Logs'

export const LogsContext = createContext<Context>(undefined!);
    
type Context = {
    logs: ILogs[],
    landingLogs: ILogs[],
    logValue: ILogs,
    log: ILogs,
    logDate: ILogDate,
    numberOfMonths: number[],
    numberOfDays: number[],
    addPost: () => void,
    getLog: (id:any) => void
    editPost: (id:any) => void,
    deletePost: () => void,
    getLogUrl: (e:any) => void,
    handleChange: (e:any) => void
    handleEditChange: (e:any) => void
    getAllLogs: () => void
}

export const LogsProvider: FunctionComponent = ({ children }) => {
    const d = new Date()

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

    const [landingLogs, setLandingLogs] = useState<ILogs[]>([])

    /** The object that will be created in backend */
    const [log, setLog] = useState<ILogs>(emptyLog)
    
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

    /**
     * Sorts incoming logs per date and sets the variable logs
     * @param e incoming data från GET logs api
     */
    const sortLogs = (e:ILogs[]) => {
        setLogs(e.sort((a:any, b:any) => {
            return a.date - b.date
        }))
    }

    const createLandingLogs = (e:ILogs[]) => {
        let logLength = e.length
        let sortedList = e.sort((a:any, b:any) => {
            return a.date - b.date
        })

        let logs:ILogs[] = []

        for(let i = 0; i < 5; i++) {
            if(logLength === 0) return
            logs.push(sortedList[logLength-1])   
            setLandingLogs(logs)
            logLength--  
        }  
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

    // Fetch all logss
    const getAllLogs = async () => {
        await fetch('/api/logs', options.fetchLogs)
            .then((res) => {
                if (res.status === 400) {
                    return;
                }
                return res.json();
            })
            .then((data) => {
                sortLogs(data)
                createLandingLogs(data)
            })
            .catch((err) => {
                console.error(err);
            });
    }

    // Hämtar en log
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

    // Skapar en log
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

    // Ändra en log
    const editPost = async (id:any) => {
        await fetch(`/api/logs/${id}`, options.editPost)
        .catch((err) => {
            console.error(err);
        });
        setLog(emptyLog)
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
                handleEditChange,
                getLog,
                getLogUrl,
                getAllLogs,
                logs,
                log,
                landingLogs,
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