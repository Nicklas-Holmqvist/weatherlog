import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useNavigate } from "react-router-dom"

import { useDiagramsContext } from 'src/context/diagram'; 
import { useLogsContext } from '../../context/logs';
import GetMonthName from '../../utils/getMonthName';

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
import { Button, Grid, Typography } from '@material-ui/core';
  
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
    const {id}:any = useParams();
    let navigate = useNavigate();

    const {diagramData, diagramLabel, diagramBackgroundcolor, diagramMonth, diagramPrec} = useDiagramsContext()
    const setApiParam = useDiagramsContext().getDiagramUrl
    const [temp, setTemp] = useState<number[]>(diagramData)
    const [labels, setLabels] = useState<string[]>(diagramLabel)
    const [color, setColor] = useState<any[] | any>(diagramBackgroundcolor)

    const findOld = diagramMonth.indexOf(id)
    const year:string = id.substring(0,4)
    const month:any = GetMonthName(id.substring(4,6))

    const prevMonth = () => {            
      if(findOld !== -1) {
        navigate(`/diagram/${diagramMonth[findOld-1]}`)
      } 
    }

    const nextMonth = () => {
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
            label: 'Temperatur',
            data: temp,
            backgroundColor: color,
            borderColor: 'rgba(0, 0, 0, 0.5',
            tension: 0.3,
            pointRadius: 6,      
            borderWidth: 1    
          },
          {
            label: 'Nederbörd',
            data: diagramPrec,
            backgroundColor: 'rgb(0, 0, 204)',
            borderColor: '#0000CC',
            tension: 0.3,
            pointRadius: 6,      
            borderWidth: 1    
          },
        ],
      };

    return (
    <Grid container direction="column" className={classes.diagramContainer}>
      <Grid container direction="row" className={classes.header}>
        <Button onClick={prevMonth}>Bakåt</Button>
        <Typography variant="h4">{year}</Typography> 
        <Typography variant="h4">{month}</Typography> 
        <Button onClick={nextMonth}>Framåt</Button>
      </Grid>
      <Grid container className={classes.diagram}>
        <Line options={options} data={data} />
      </Grid>
    </Grid>
    )
}

export default Diagram