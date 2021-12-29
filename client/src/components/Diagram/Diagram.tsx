import React, { useEffect, useState } from 'react'
import { useLogsContext } from '../../context/logs';

import { ILogs } from '../../types/Logs'

const Diagram = () => {
    const logContext = useLogsContext().logs
    const [logs, setLogs] = useState<ILogs[]>(logContext)
    
    useEffect(() => {
        setLogs(logContext)
      },[logContext, logs])

    return <>
    </>
}

export default Diagram