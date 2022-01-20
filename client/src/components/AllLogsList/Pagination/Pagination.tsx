import { Button, ButtonGroup, Grid, IconButton } from '@material-ui/core';
import { ChevronLeftRounded, ChevronRightRounded } from '@material-ui/icons';

import useStyles from './styles';

interface IPagination {
	logsPerPage: number;
	totalLogs: number;
	paginate: (pageNumber: number) => void;
	currentPage: number;
}

export const Pagination = ({
	logsPerPage,
	totalLogs,
	paginate,
	currentPage,
}: IPagination) => {
	const classes = useStyles();
	const pageNumbers: number[] = [];

	for (let i = 1; i <= Math.ceil(totalLogs / logsPerPage); i++) {
		pageNumbers.push(i);
	}

	const handlePaginate = (number: number) => {
		paginate(number);
		document.getElementById('logListContainer')?.scrollTo(0, 0);
	};

	const handleIncreasePagination = (number: number) => {
		if (number === pageNumbers.at(-1)) {
			return;
		}
		paginate(number + 1);
	};
	const handleDecreasePagination = (number: number) => {
		if (number === 1) {
			return;
		}
		paginate(number - 1);
	};

	console.log(pageNumbers.at(-1));

	return (
		<Grid item container>
			<ButtonGroup className={classes.buttonGroup}>
				<IconButton
					edge="start"
					className={classes.arrowButton}
					onClick={() => handleDecreasePagination(currentPage)}
				>
					<ChevronLeftRounded />
				</IconButton>
				{pageNumbers.map((number) => {
					return (
						<Button
							onClick={() => handlePaginate(number)}
							className={
								currentPage === number
									? classes.activePage
									: classes.paginationButton
							}
						>
							{number}
						</Button>
					);
				})}
				<IconButton
					className={classes.arrowButton}
					onClick={() => handleIncreasePagination(currentPage)}
				>
					<ChevronRightRounded />
				</IconButton>
			</ButtonGroup>
		</Grid>
	);
};

export default Pagination;
