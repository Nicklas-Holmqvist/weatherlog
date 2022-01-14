import React, { useEffect, useState } from 'react';
import { Button, Grid, IconButton, Typography } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { ExitToAppRounded } from '@material-ui/icons';

import { useAuthContext } from 'src/context/auth';
import useStyles from './styles';

interface IMobileMenu {
	open: boolean;
	handleClose: () => void;
}

export const MobileMenu = ({ handleClose, open }: IMobileMenu) => {
	const classes = useStyles();
	const logOut = useAuthContext().logout;
	const isAuth = useAuthContext().isAuth;
	const navigateTo = useNavigate();

	const handleLogout = () => {
		handleClose();
		logOut();
		navigateTo('/');
		window.location.reload();
	};

	// const isLoggedIn = () => {
	// 	console.log('köööör');
	// setTimeout(() => {
	// 	console.log('kör settimeout');
	// 	if (isAuth) {
	// 		return 'Logga ut';
	// 	} else {
	// 		return 'Logga in';
	// 	}
	// }, 1000);
	// };

	return (
		<Grid
			item
			container
			direction="column"
			className={open ? classes.container : classes.hidden}
		>
			<Grid item container direction="column" className={classes.wrapper}>
				{/* <IconButton className={classes.closeButton} onClick={handleClose}>
					<ArrowUpwardRounded className={classes.closeIcon} />
				</IconButton> */}
				<Link to="/" className={classes.link} onClick={handleClose}>
					<Typography variant="h5" className={classes.linkText}>
						Hem
					</Typography>
				</Link>
				<Link to="/about" className={classes.link} onClick={handleClose}>
					<Typography variant="h5" className={classes.linkText}>
						Om
					</Typography>
				</Link>
				<Link to="/contact" className={classes.link} onClick={handleClose}>
					<Typography variant="h5" className={classes.linkText}>
						Kontakt
					</Typography>
				</Link>
				{isAuth && (
					<Typography
						variant="h5"
						className={classes.logoutLink}
						onClick={handleLogout}
					>
						Logga ut
						<ExitToAppRounded className={classes.logoutIcon} />
					</Typography>
				)}
			</Grid>
		</Grid>
	);
};

export default MobileMenu;
