import { useEffect } from 'react';
import {
	Button,
	Grid,
	Typography,
	useMediaQuery,
	IconButton,
} from '@material-ui/core';
import { ExitToAppRounded } from '@material-ui/icons';
import { useNavigate } from "react-router-dom"

import theme from 'src/theme';
import useStyles from './styles';
import logo from './weatherlog-mini-logo.svg';
import { MenuIcon } from 'src/utils';
import { useUsersContext } from '../../context/users';

export const Header = () => {
	const classes = useStyles();
	const mobile = useMediaQuery(theme.breakpoints.only('xs'));
	const logOut = useUsersContext().logout
	const { user } = useUsersContext();
	const navigateTo = useNavigate()

	useEffect(() => {
		isPathLoginOrRegister();
	});

	const runLogout = () => {
		logOut()
		navigateTo('/login')
	}

	const isPathLoginOrRegister = () => {
		if (
			window.location.pathname === '/login' ||
			window.location.pathname === '/register'
		) {
			// reloadWindow();
			return true;
		} else {
			return false;
		}
	};

	return isPathLoginOrRegister() ? null : mobile ? (
		<Grid item container component="header" className={classes.mobileHeader}>
			<Grid item className={classes.mobileLeft}>
				<IconButton
					size="medium"
					edge="start"
					color="inherit"
					aria-label="menu"
				>
					<MenuIcon />
				</IconButton>
				<img src={logo} alt="Logo" className={classes.mobileLogo} />
			</Grid>
			<Button
				endIcon={<ExitToAppRounded />}
				className={classes.mobileLogoutButton}
			>
				Logga ut
			</Button>
		</Grid>
	) : (
		<Grid item container component="header" className={classes.container}>
			<Grid item container className={classes.wrapper}>
				<Grid item className={classes.left}>
					<img src={logo} alt="Logo" />
					<Typography variant="body1" className={classes.name}>
						{`${user?.firstName || 'Greger'} ${
							user?.lastName || 'Grindberg'
						}, ${user?.city || ' Jukkasjärvi'}`}
						{/* {user?.firstName || 'Greger'} {user?.lastName || 'Grindberg'},
						{user?.city || ' Jukkasjärvi'} */}
					</Typography>
				</Grid>
				<Grid item>
					<Button onClick={runLogout} endIcon={<ExitToAppRounded />}>Logga ut</Button>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Header;
