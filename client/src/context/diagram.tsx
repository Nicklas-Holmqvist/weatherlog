import React, { useState, useContext, createContext, FunctionComponent, useEffect } from 'react'

import { useLogsContext } from './logs';
import { getTempColor } from 'src/utils';
import { ILogs} from '../types/Logs'

export const DiagramContext = createContext<Context>(undefined!);
    
type Context = {  
    getDiagramUrl: (e:any) => void,
    // handleChange: (e:any) => void
}

export const DiagramProvider: FunctionComponent = ({ children }) => {
    
    const logContext = useLogsContext().logs
    const [logs, setLogs] = useState<ILogs[]>(logContext)
    const [ApiData, setApiData] = useState<ILogs[]>([])
    const [diagramMonth, setDiagramMonth] = useState<string[]>([])
    const [diagramData, setDiagramData] = useState<string[]>([])
    const [diagramLabel, setDiagramLabel] = useState<string[]>([])
    const [diagramBackgroundcolor, setBackgroundcolor] = useState<string[]>([])

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

    const splitUpYearMonths = () => {
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
    
    const prepairDiagramData = (e:ILogs[]) => {
        let data:string[] = []  
        let label:string[] = []  
        let color:string[] = []

        for(let i = 0; i < e.length; i++) {

            label.push(splitDate(e[i], 6, 8))
            data.push(e[i].temperature.toString())
            color.push(getTempColor(parseInt(e[i].temperature))!)
        }
        setDiagramData(data)
        setDiagramLabel(data.sort((a:any, b:any) => {
            return a - b
        }))
        setBackgroundcolor(color)
    }

    const splitDate = (date:ILogs, start:number, end:number) => {
        return date.date.substring(start, end)        
    }

    useEffect(() => {       
        setLogs(logContext)
        splitUpYearMonths()
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
                setApiData(data)
                prepairDiagramData(data)
                console.log(data)
            })
            .catch(function (err) {
                console.error(err);
            });
    };
    
    return (
        <DiagramContext.Provider value={{ 
            getDiagramUrl
            }}>
            {children}
        </DiagramContext.Provider>
    )
};

export const useDiagramsContext = () => useContext<Context>(DiagramContext)