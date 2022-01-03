import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useNavigate } from "react-router-dom"

import { useLogsContext } from '../../context/logs';
import { useDiagramsContext } from 'src/context/diagram'; 

import useStyles from './style';

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
import { Button, Grid } from '@material-ui/core';
  
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

    const classes = useStyles()
    const {id} = useParams();
    let navigate = useNavigate();

    const {diagramData, diagramLabel, diagramBackgroundcolor, diagramMonth} = useDiagramsContext()
    const setApiParam = useDiagramsContext().getDiagramUrl
    const [temp, setTemp] = useState<number[]>(diagramData)
    const [labels, setLabels] = useState<string[]>(diagramLabel)
    const [color, setColor] = useState<any[] | any>(diagramBackgroundcolor)

    const prevMonth = () => {
      const oldMonth:any = id
      const findOld = diagramMonth.indexOf(oldMonth)
            
      if(findOld !== -1) {
        navigate(`/diagram/${diagramMonth[findOld-1]}`)
      } 
    }

    const nextMonth = () => {
      const oldMonth:any = id
      const findOld = diagramMonth.indexOf(oldMonth)
            
      if(findOld !== -1) {
        navigate(`/diagram/${diagramMonth[findOld+1]}`)
      } 
    }

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
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title: {
            display: false,
            text: 'Chart.js Line Chart',
          },
        }
      };

    const data = {
        type: 'line',
        labels,
        datasets: [
            {
            label: '',
            data: temp,
            backgroundColor: color,
            borderColor: 'rgba(0, 0, 0, 0.5',
            tension: 0.3,
            pointRadius: 6,      
            borderWidth: 1    
          },
        ],
      };

    return (
    <Grid container direction="column" className={classes.diagramContainer}>
      <p>{id}</p>
      <Button onClick={prevMonth}>Bakåt</Button>
      <Button onClick={nextMonth}>Framåt</Button>
      <Grid container className={classes.diagram}>
        <Line options={options} data={data} />
      </Grid>
    </Grid>
    )
}

export default Diagram