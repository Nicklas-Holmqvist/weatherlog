import { IconButton } from '@material-ui/core';
import { ChevronLeftRounded } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';

import useStyles from './styles';

export const NavigateBackButton = () => {
	const classes = useStyles();
	const navigateTo = useNavigate();

	const handleNavigateBack = () => {
		navigateTo('/');
	};

	return (
		<IconButton className={classes.button} onClick={handleNavigateBack}>
			<ChevronLeftRounded className={classes.icon} />
		</IconButton>
	);
};

export default NavigateBackButton;
