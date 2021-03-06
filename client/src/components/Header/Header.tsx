import { useState } from 'react';
import { Grid, Typography, useMediaQuery, IconButton } from '@material-ui/core';
import {
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
	const { viewUser } = useUsersContext();
	const [showMenu, setShowMenu] = useState(false);
	const [showMobileMenu, setShowMobileMenu] = useState(false);

	const handleCloseMenu = () => {
		setShowMenu(false);
	};

	const handleCloseMobileMenu = () => {
		setShowMobileMenu(false);
	};

	const getNameString = () => {
		if (!isAuth) return;
		if (viewUser.firstName && viewUser.lastName && viewUser.city) {
			return `${viewUser.firstName} ${viewUser.lastName}, ${viewUser.city}`;
		} else if (viewUser.email) {
			return `${viewUser.email}`;
		} else {
			return '';
		}
	};

	return mobile ? (
		<>
			<MobileMenu open={showMobileMenu} handleClose={handleCloseMobileMenu} />
			<Grid item container component="header" className={classes.mobileHeader}>
				<IconButton
					aria-label="öppna eller stäng meny"
					name="öppna eller stäng meny"
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
						name="gå till inställningar"
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
						<img
							onClick={() => navigateTo('/')}
							src={logo}
							alt="Logo"
							className={classes.logo}
							title="Gå till startsidan"
						/>
						<Typography variant="body1" className={classes.name}>
							{getNameString()}
						</Typography>
					</Grid>
					<Grid item className={classes.right}>
						{isAuth && (
							<IconButton
								aria-label="gå till inställningar"
								name="gå till inställningar"
								onClick={() => navigateTo('/settings')}
								className={classes.settingsButton}
							>
								<SettingsRounded />
							</IconButton>
						)}
						<IconButton
							aria-label="öppna eller stäng meny"
							name="öppna eller stäng meny"
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
