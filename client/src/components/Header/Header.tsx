import { useState } from 'react';
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
	CloseRounded,
} from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';

import { useUsersContext } from '../../context/users';
import { useAuthContext } from '../../context/auth';

import theme from 'src/theme';
import useStyles from './styles';
import logo from './weatherlog-mini-logo.svg';
import { MenuIcon } from 'src/utils';
import { Menu, MobileMenu } from '.';
import { Link } from 'react-router-dom';

export const Header = () => {
	const classes = useStyles();
	const mobile = useMediaQuery(theme.breakpoints.only('xs'));
	const navigateTo = useNavigate();
	const isAuth = useAuthContext().isAuth;
	const { user } = useUsersContext();
	const [showMenu, setShowMenu] = useState(false);
	const [showMobileMenu, setShowMobileMenu] = useState(false);

	const handleCloseMenu = () => {
		setShowMenu(false);
	};

	const handleCloseMobileMenu = () => {
		setShowMobileMenu(false);
	};

	const getNameString = () => {
		if (user.firstName && user.lastName && user.city) {
			return `${user.firstName} ${user.lastName}, ${user.city}`;
		} else if (user.email) {
			return `${user.email}`;
		} else {
			return '';
		}
	};

	return mobile ? (
		<>
			<MobileMenu open={showMobileMenu} handleClose={handleCloseMobileMenu} />
			<Grid item container component="header" className={classes.mobileHeader}>
				<IconButton
					edge="start"
					onClick={() => setShowMobileMenu(!showMobileMenu)}
				>
					{showMobileMenu ? (
						<CloseRounded className={classes.closeMobileMenuIcon} />
					) : (
						<MenuIcon />
					)}
				</IconButton>
				<Link to="/">
					<img src={logo} alt="Logo" className={classes.mobileLogo} />
				</Link>
				{isAuth && (
					<IconButton
						edge="end"
						onClick={() => navigateTo('/settings')}
						className={classes.settingsButton}
					>
						<SettingsRounded />
					</IconButton>
				)}
			</Grid>
		</>
	) : (
		<>
			<Menu open={showMenu} handleClose={handleCloseMenu} />
			<Grid item container component="header" className={classes.container}>
				<Grid item container className={classes.wrapper}>
					<Grid item className={classes.left}>
						<img onClick={() => navigateTo('/')} src={logo} alt="Logo" />
						<Typography variant="body1" className={classes.name}>
							{getNameString()}
						</Typography>
					</Grid>
					<Grid item className={classes.right}>
						{isAuth && (
							<IconButton
								onClick={() => navigateTo('/settings')}
								className={classes.settingsButton}
							>
								<SettingsRounded />
							</IconButton>
						)}
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
