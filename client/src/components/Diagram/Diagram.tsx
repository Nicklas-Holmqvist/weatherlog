import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { useLogsContext } from '../../context/logs';
import { useDiagramsContext } from 'src/context/diagram'; 
import { ILogs } from '../../types/Logs'

const Diagram = () => {

    const {id} = useParams();

    const diagramContext = useDiagramsContext()
    const setApiParam = useDiagramsContext().getDiagramUrl
    // console.log(diagramContext)

    const click = () => {
        setApiParam(id)
    }

    useEffect(() => {
        setApiParam(id)
    },[id])


    return <>
    <p>{id}</p>
    <button onClick={click}>hämta</button>
    <h1>jo</h1>
    </>
}

export default Diagram