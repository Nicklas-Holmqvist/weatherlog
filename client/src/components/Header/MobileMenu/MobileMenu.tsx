import React from 'react';
import { Grid, Typography } from '@material-ui/core';
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
	const handleAuth = useAuthContext().handleAuth;

	const handleLogout = () => {
		handleClose();
		handleAuth(false)
		navigateTo('/', { replace: true })		
		logOut();
	};

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
