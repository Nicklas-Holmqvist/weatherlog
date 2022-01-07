import React, { useState, useContext, createContext, FunctionComponent, useEffect } from 'react'

import { useLogsContext } from './logs';
import { getDiagramColor } from '../utils/getDiagramColor';
import { ILogs} from '../types/Logs'

export const DiagramContext = createContext<Context>(undefined!);
    
type Context = {  
    getDiagramUrl: (e:any) => void,
    diagramData: number[],
    diagramLabel: string[],
    diagramBackgroundcolor: any[],
    diagramMonth:string[]
    diagramPrec: number[],
}

export const DiagramProvider: FunctionComponent = ({ children }) => {
    
    // const logContext = useLogsContext().logs
    const { historyMonths } = useLogsContext()
    // const [logs, setLogs] = useState<ILogs[]>(logContext)
    const [diagramMonth, setDiagramMonth] = useState<string[]>(historyMonths)
    const [diagramData, setDiagramData] = useState<number[]>([])
    const [diagramLabel, setDiagramLabel] = useState<string[]>([])
    const [diagramBackgroundcolor, setBackgroundcolor] = useState<any[]>([])
    const [diagramPrec, setDiagramPrec] = useState<number[]>([])
    
    /**
     * Prepare the API-response and split it up to the necessary arrays to be viewed in the diagram
     * @param e API-response
     */
    const prepairDiagramData = (e:ILogs[]) => {
        let data:number[] = []  
        let label:string[] = []  
        let color:any[] = []
        let precipitation:number[] = []
        
        for(let i = 0; i < e.length; i++) {
            data.push(parseInt(e[i].temperature))
            label.push(splitDate(e[i], 6, 8))
            color.push(getDiagramColor(parseInt(e[i].temperature))!)
            precipitation.push(Number(e[i].precipitation))
        }
        setDiagramData(data)
        setDiagramLabel(label.sort((a:any, b:any) => {
            return a - b
        }))
        setBackgroundcolor(color)
        setDiagramPrec(precipitation)
    }

    /**
     * Splits the date-string 8 digits, ex 20210101
     * @param date string
     * @param start where to start, after choosed digit
     * @param end where to end, you want the last two, you choose 8 and get "01"
     * @returns 
     */
    const splitDate = (date:ILogs, start:number, end:number) => {
        return date.date.substring(start, end)        
    }

    useEffect(() => {
        setDiagramMonth(historyMonths)
    })

    // useEffect(() => {       
    //     setLogs(logContext)        
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    //   },[logContext, logs])

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
                prepairDiagramData(data)
                console.log(data)
            })
            .catch(function (err) {
                console.error(err);
            });
    };
    
    return (
        <DiagramContext.Provider value={{ 
            getDiagramUrl,
            diagramData,
            diagramLabel,
            diagramBackgroundcolor,
            diagramMonth,
            diagramPrec
            }}>
            {children}
        </DiagramContext.Provider>
    )
};

export const useDiagramsContext = () => useContext<Context>(DiagramContext)