import { Button, ButtonGroup, Grid, Typography } from '@material-ui/core';

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

	return (
		<Grid item container>
			<ButtonGroup className={classes.buttonGroup}>
				{pageNumbers.map((number) => {
					return (
						<Button
							onClick={() => paginate(number)}
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
			</ButtonGroup>
		</Grid>
	);
};

export default Pagination;
