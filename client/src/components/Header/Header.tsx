import { useEffect, useState } from 'react';
import {
	Button,
	Grid,
	Typography,
	useMediaQuery,
	IconButton,
} from '@material-ui/core';
import {
	ExitToAppRounded,
	SettingsRounded,
	MoreVertRounded,
} from '@material-ui/icons';
import { useNavigate, useRoutes } from 'react-router-dom';

import { useUsersContext } from '../../context/users';
import { useAuthContext } from '../../context/auth';

import theme from 'src/theme';
import useStyles from './styles';
import logo from './weatherlog-mini-logo.svg';
import { MenuIcon } from 'src/utils';
import { Link } from 'react-router-dom';
import { Menu } from '.';

export const Header = () => {
	const classes = useStyles();
	const mobile = useMediaQuery(theme.breakpoints.only('xs'));
	const logOut = useAuthContext().logout;
	const navigateTo = useNavigate();
	const { user } = useUsersContext();
	const [showMenu, setShowMenu] = useState(false);

	// useEffect(() => {
	// 	isPathLoginOrRegister();
	// });

	const handleCloseMenu = () => {
		setShowMenu(false);
	};

	const nameString = () => {
		if (user.firstName && user.lastName && user.city) {
			return `${user.firstName} ${user.lastName}, ${user.city}`;
		} else if (user.email) {
			return `${user.email}`;
		} else {
			return '';
		}
	};

	// const isPathLoginOrRegister = () => {
	// 	if (
	// 		window.location.pathname === '/login' ||
	// 		window.location.pathname === '/register'
	// 	) {
	// 		// reloadWindow();
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// };

	return mobile ? (
		<>
			<Menu open={showMenu} handleClose={handleCloseMenu} />
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
		</>
	) : (
		<>
			<Menu open={showMenu} handleClose={handleCloseMenu} />
			<Grid item container component="header" className={classes.container}>
				<Grid item container className={classes.wrapper}>
					<Grid item className={classes.left}>
						<img src={logo} alt="Logo" />
						<Typography variant="body1" className={classes.name}>
							{nameString()}
							{/* {user?.firstName || 'Greger'} {user?.lastName || 'Grindberg'},
							{user?.city || ' Jukkasjärvi'} */}
						</Typography>
					</Grid>
					<Grid item className={classes.right}>
						{/* <Link to="/about" className={classes.link}>
							<Typography variant="subtitle2">Om</Typography>
						</Link>
						<Link to="/contact" className={classes.link}>
							<Typography variant="subtitle2">Kontakt</Typography>
						</Link>
						<Button
							onClick={handleRunLogout}
							endIcon={<ExitToAppRounded />}
							className={classes.logoutButton}
						>
							Logga ut
						</Button> */}
						<IconButton
							onClick={() => navigateTo('/settings')}
							className={classes.settingsButton}
						>
							<SettingsRounded />
						</IconButton>
						<IconButton
							onClick={() => setShowMenu(!showMenu)}
							className={classes.menuButton}
						>
							<MoreVertRounded />
						</IconButton>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default Header;
