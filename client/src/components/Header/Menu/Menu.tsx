import React from 'react';
import {
	Grid,
	IconButton,
	Typography,
	useMediaQuery,
} from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUpwardRounded, ExitToAppRounded } from '@material-ui/icons';

import { useAuthContext } from 'src/context/auth';
import useStyles from './styles';
import theme from 'src/theme';

interface IMenu {
	open: boolean;
	handleClose: () => void;
}

export const Menu = ({ handleClose, open }: IMenu) => {
	const classes = useStyles();
	const logOut = useAuthContext().logout;
	const handleAuth = useAuthContext().handleAuth;
	const isAuth = useAuthContext().isAuth;
	const navigateTo = useNavigate();
	const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));

	const handleLogout = () => {
		handleClose();
		navigateTo('/', { replace: true })
		logOut();
		handleAuth(false)
		window.location.reload();
	};

	return (
		<Grid
			item
			container
			direction="column"
			className={open ? classes.container : classes.hidden}
		>
			<Grid item container direction="column" className={classes.wrapper}>
				<IconButton className={classes.closeButton} onClick={handleClose}>
					<ArrowUpwardRounded className={classes.closeIcon} />
				</IconButton>
				<Link to="/" className={classes.link} onClick={handleClose}>
					<Typography variant={smallScreen ? 'h4' : 'h3'}>Hem</Typography>
				</Link>
				<Link to="/about" className={classes.link} onClick={handleClose}>
					<Typography variant={smallScreen ? 'h4' : 'h3'}>Om</Typography>
				</Link>
				<Link to="/contact" className={classes.link} onClick={handleClose}>
					<Typography variant={smallScreen ? 'h4' : 'h3'}>Kontakt</Typography>
				</Link>
				{isAuth && (
					<Typography
						variant="h3"
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

export default Menu;
