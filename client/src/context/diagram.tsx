import React, { useState, useContext, createContext, FunctionComponent, useEffect } from 'react'

import { useLogsContext } from './logs';
import { ILogs} from '../types/Logs'

export const DiagramContext = createContext<Context>(undefined!);
    
type Context = {
    diagramData: ILogs[],    
    getDiagramUrl: (e:any) => void,
    // handleChange: (e:any) => void
}

export const DiagramProvider: FunctionComponent = ({ children }) => {
    
    const logContext = useLogsContext().logs
    const [logs, setLogs] = useState<ILogs[]>(logContext)
    const [diagramData, setDiagramData] = useState<ILogs[]>([])
    const [diagramMonth, setDiagramMonth] = useState<string[]>([])

    // /**
    //  * Handle input changes on create log page
    //  * @param e value from inpufields in create log
    //  * @returns 
    //  */
    //  const handleChange = (e:any) => {
    //     const value = e.target.value;
    //     const name = e.target.name;

    //     if(name === "year" || name === "month" || name === "day") {            
    //         setLogDate({
    //             ...logDate,
    //             [name]: value
    //         })  
    //         return
    //     }
    //     setLogValue({
    //         ...logValue,
    //         [name]: value
    //     })     
    // }

    const splitUpMonths = () => {
        let month:any = []
        for(let i = 0; i < logs.length; i++) {
            month.push(splitDate(logs[i], 0, 6))
        }

        let uniqueMonths:any = []
        month.forEach((m:string) => {
            if(!uniqueMonths.includes(m)) {
                uniqueMonths.push(m)
            }
        })
        setDiagramMonth(uniqueMonths)       
    }

    const splitDate = (date:ILogs, start:number, end:number) => {
        return date.date.substring(start, end)        
    }

    useEffect(() => {    
        console.log(diagramData)    
        setLogs(logContext)
        splitUpMonths()
      },[logContext, logs])

    const getDiagramUrl = (e:any) => {
        fetchDiagram(e)
    }

    /** Fetch all days in specific month */
    const fetchDiagram = async (e:any) => {

        await fetch(`/api/diagram/${e}`, {method: 'get'})
            .then(function (res) {
                if (res.status === 400) {
                    return;
                }
                return res.json();
            })
            .then(function (data) {
                setDiagramData(data)
                console.log(data)
            })
            .catch(function (err) {
                console.error(err);
            });
    };
    
    return (
        <DiagramContext.Provider value={{ 
            diagramData,
            getDiagramUrl
            }}>
            {children}
        </DiagramContext.Provider>
    )
};

export const useDiagramsContext = () => useContext<Context>(DiagramContext)