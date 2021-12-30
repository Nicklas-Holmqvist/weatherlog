import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { useLogsContext } from '../../context/logs';
import { useDiagramsContext } from 'src/context/diagram'; 

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const Diagram = () => {

    const {id} = useParams();

    const {diagramData, diagramLabel, diagramBackgroundcolor} = useDiagramsContext()
    const setApiParam = useDiagramsContext().getDiagramUrl
    const [temp, setTemp] = useState<number[]>(diagramData)
    const [labels, setLabels] = useState<string[]>(diagramLabel)
    const [color, setColor] = useState<string[]>(diagramBackgroundcolor)

    useEffect(() => {
        setApiParam(id)
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id])

    useEffect(() => {
        setTemp(diagramData)
        setLabels(diagramLabel)
        setColor(diagramBackgroundcolor)
    })

    console.log(temp, labels, color)
    const options = {
        responsive: false,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title: {
            display: false,
            text: 'Chart.js Line Chart',
          },
        },
      };

    const data = {
        type: 'line',
        labels,
        datasets: [
            {
            label: '',
            data: temp,
            color: color,
          },
        ],
      };

    return <>
    <p>{id}</p>
     <Line options={options} data={data} />;
    </>
}

export default Diagram