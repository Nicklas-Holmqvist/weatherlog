import React, { useEffect, useState } from 'react'
import { useLogsContext } from '../../context/logs';

import { ILogs } from '../../types/Logs'

const Diagram = () => {
    const logContext = useLogsContext().logs
    const [logs, setLogs] = useState<ILogs[]>(logContext)
    
    const [diagramData, setDiagramData] = useState<number[]>([])
    const [diagramLabel, setDiagramLabel] = useState<string[]>([])
    const [diagramMonth, setDiagramMonth] = useState<string[]>([])
    const [diagramBackgroundcolor, setBackgroundcolor] = useState<string[]>([])


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
    const getDiagramLabels = () => {
        
    }

    const splitDate = (date:ILogs, start:number, end:number) => {
        return date.date.substring(start, end)        
    }
    useEffect(() => {
        
        setLogs(logContext)
        splitUpMonths()
      },[logContext, logs])

    return <>
    </>
}

export default Diagram