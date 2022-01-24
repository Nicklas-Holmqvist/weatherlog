import React from 'react'
import { Helmet } from 'react-helmet-async';
import Grid from '@material-ui/core/Grid'
import { Button, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

import {Error} from '../../utils/icons'
import useStyles from './styles';

export const ErrorPage = () => {

    const navigateTo = useNavigate()

    const classes = useStyles()
    const handleClick = () => {
        navigateTo('/', { replace: true });
    }

    return (
        <Grid container className={classes.container}>
            <Helmet>
				<title>404 - Error | Väderdagboken</title>
				<meta name="error" content="Du har kommit lite fel" />
			</Helmet>
            <Grid item direction='column' className={classes.content}>
                <Error />   
                <Typography variant="h4" className={classes.text}>
					Ett oväder drog in...
				</Typography>
                <Button
                    name='gå tillbaka till start' 
                    onClick={handleClick}
                >
                    Gå till start
                </Button>
            </Grid>
        </Grid>
    )
}

export default ErrorPage