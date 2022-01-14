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
} from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';

import { useUsersContext } from '../../context/users';
import { useAuthContext } from '../../context/auth';

import theme from 'src/theme';
import useStyles from './styles';
import logo from './weatherlog-mini-logo.svg';
import { MenuIcon } from 'src/utils';
import { Menu } from '.';

export const Header = () => {
	const classes = useStyles();
	const mobile = useMediaQuery(theme.breakpoints.only('xs'));
	const navigateTo = useNavigate();
	const isAuth = useAuthContext().isAuth;
	const { user } = useUsersContext();
	const [showMenu, setShowMenu] = useState(false);

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

	return mobile ? (
		<>
			<Menu open={showMenu} handleClose={handleCloseMenu} />
			<Grid item container component="header" className={classes.mobileHeader}>
				<Grid 
					item 
					className={classes.mobileLeft}>
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
						<img 
							onClick={()=>navigateTo('/home')}
							src={logo} 
							alt="Logo" 
						/>
						<Typography variant="body1" className={classes.name}>
							{nameString()}
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
