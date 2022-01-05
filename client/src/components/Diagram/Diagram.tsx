import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useNavigate } from "react-router-dom"
import { Line } from 'react-chartjs-2';
import { Button, Grid, Typography } from '@material-ui/core';

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

  import { useDiagramsContext } from 'src/context/diagram'; 

  import GetMonthName from '../../utils/getMonthName';
  import useStyles from './style';
  
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

    let navigate = useNavigate(); 
    const classes = useStyles()
    const {id}:any = useParams();

    const setApiParam = useDiagramsContext().getDiagramUrl
    const {diagramData, diagramLabel, diagramBackgroundcolor, diagramMonth, diagramPrec} = useDiagramsContext()

    const [temp, setTemp] = useState<number[]>(diagramData)
    const [labels, setLabels] = useState<string[]>(diagramLabel)
    const [color, setColor] = useState<any[] | any>(diagramBackgroundcolor)

    const diagramLength = diagramMonth.length
    const findOld = diagramMonth.indexOf(id)
    const year:string = id.substring(0,4)
    const month:any = GetMonthName(id.substring(4,6))

    console.log(diagramMonth)
    const prevMonth = () => {     
      if(findOld === 0) return navigate(`/diagram/${diagramMonth[diagramLength-1]}`)
      if(findOld !== -1) return navigate(`/diagram/${diagramMonth[findOld-1]}`)      
    }

    const nextMonth = () => {
      if(findOld === (diagramLength-1)) return navigate(`/diagram/${diagramMonth[1]}`)
      if(findOld !== -1) return navigate(`/diagram/${diagramMonth[findOld+1]}`)      
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
            pointRadius: 2,      
            borderWidth: 2    
          },
        ],
      };

    return (
    <Grid container direction="column" className={classes.diagramContainer}>
      <Grid container direction="row" className={classes.header}>
        {diagramLength > 1 ? <Button onClick={prevMonth}>Bakåt</Button> : ''}        
        <Typography variant="h4">{year}</Typography> 
        <Typography variant="h4">{month}</Typography> 
        {diagramLength > 1 ? <Button onClick={nextMonth}>Framåt</Button> : ''}        
      </Grid>
      <Grid container className={classes.diagram}>
        <Line options={options} data={data} />
      </Grid>
    </Grid>
    )
}

export default Diagram