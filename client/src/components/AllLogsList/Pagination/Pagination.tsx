import { Button, ButtonGroup, Grid, IconButton } from '@material-ui/core';
import { ChevronLeftRounded, ChevronRightRounded } from '@material-ui/icons';
import { useState } from 'react';

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
	const pageNumbersInSegment = 5;
	const oneMoreThanSegment = pageNumbersInSegment + 1;

	const [startOfPaginationSegment, setStartOfPaginationSegment] = useState(1);
	const [endOfPaginationSegment, setEndOfPaginationSegment] = useState(5);

	for (let i = 1; i <= Math.ceil(totalLogs / logsPerPage); i++) {
		pageNumbers.push(i);
	}

	let isEndOfPagination =
		currentPage === pageNumbers.at(-3) ||
		currentPage === pageNumbers.at(-2) ||
		currentPage === pageNumbers.at(-1);

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
		if (number === pageNumbers.at(-7)) {
			isEndOfPagination = true;
		}
		paginate(number - 1);
	};

	const handleClickLastOfPagination = (number: number) => {
		paginate(number);
		setEndOfPaginationSegment(number);
		setStartOfPaginationSegment(number - 4);
	};

	if (
		currentPage !== pageNumbers.at(-1) &&
		currentPage === endOfPaginationSegment
	) {
		setStartOfPaginationSegment(startOfPaginationSegment + 1);
		setEndOfPaginationSegment(endOfPaginationSegment + 1);
	}

	if (currentPage !== 1 && currentPage === startOfPaginationSegment) {
		setStartOfPaginationSegment(startOfPaginationSegment - 1);
		setEndOfPaginationSegment(endOfPaginationSegment - 1);
	}

	if (
		endOfPaginationSegment === pageNumbers.at(-1) ||
		endOfPaginationSegment === pageNumbers.at(-2)
	) {
		isEndOfPagination = true;
	}

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
				{pageNumbers.length > pageNumbersInSegment &&
				pageNumbers.length !== oneMoreThanSegment
					? pageNumbers
							.slice(startOfPaginationSegment - 1, endOfPaginationSegment)
							.map((number) => {
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
							})
					: pageNumbers.map((number) => {
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
				{pageNumbers.length > pageNumbersInSegment && !isEndOfPagination && (
					<Button className={classes.paginationButton}>...</Button>
				)}
				{pageNumbers.length > pageNumbersInSegment && !isEndOfPagination && (
					<Button
						className={classes.paginationButton}
						onClick={() => handleClickLastOfPagination(pageNumbers.at(-1)!)}
					>
						{pageNumbers.at(-1)}
					</Button>
				)}
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
