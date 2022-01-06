import {
	Grid,
	List,
	ListItem,
	ListItemText,
	Typography,
} from '@material-ui/core';

import useStyles from './styles';

interface IDesktopSettingsList {
	active: number;
	setActive: (number: number) => void;
}

export const DesktopSettingsList = ({
	active,
	setActive,
}: IDesktopSettingsList) => {
	const classes = useStyles();

	return (
		<Grid item container className={classes.listContainer}>
			<List className={classes.list} dense>
				<ListItem
					className={`${classes.listItem} ${active === 1 && classes.active}`}
					onClick={() => setActive(1)}
				>
					<ListItemText>
						<Typography
							variant="subtitle2"
							className={`${classes.listItemText} ${
								active === 1 && classes.activeListItemText
							}`}
						>
							Konto
						</Typography>
					</ListItemText>
				</ListItem>
				<ListItem
					className={`${classes.listItem} ${active === 2 && classes.active}`}
					onClick={() => setActive(2)}
				>
					<ListItemText>
						<Typography
							variant="subtitle2"
							className={`${classes.listItemText} ${
								active === 2 && classes.activeListItemText
							}`}
						>
							Lösenord
						</Typography>
					</ListItemText>
				</ListItem>
			</List>
		</Grid>
	);
};

export default DesktopSettingsList;
