import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { useLogsContext } from '../../context/logs';
import { useDiagramsContext } from 'src/context/diagram'; 

const Diagram = () => {

    const {id} = useParams();

    const diagramContext = useDiagramsContext()
    const setApiParam = useDiagramsContext().getDiagramUrl

    useEffect(() => {
        setApiParam(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id])


    return <>
    <p>{id}</p>
    <h1>jo</h1>
    </>
}

export default Diagram