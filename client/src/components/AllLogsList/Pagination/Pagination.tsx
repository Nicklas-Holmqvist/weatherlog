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

	// count number of pages needed, push numbers to array
	for (let i = 1; i <= Math.ceil(totalLogs / logsPerPage); i++) {
		pageNumbers.push(i);
	}

	// start and end of "segment" of page numbers, ex: 1 2 3 4 5 ... 20 --- 1 to 5 is segment
	const [startOfPaginationSegment, setStartOfPaginationSegment] = useState(1);
	const [endOfPaginationSegment, setEndOfPaginationSegment] = useState(
		pageNumbers.length < 5 ? pageNumbers.length! : pageNumbersInSegment
	);

	// check if current page is at the end of pagination to hide "..." and last index, ex => ... 20
	let isEndOfPagination =
		currentPage === pageNumbers[pageNumbers.length - 3] ||
		currentPage === pageNumbers[pageNumbers.length - 2] ||
		currentPage === pageNumbers.length;

	// go to page when clicked and scroll to top
	const handlePaginate = (number: number) => {
		paginate(number);
		document.getElementById('logListContainer')?.scrollTo(0, 0);
	};

	// when clicking arrow to increase page number ">"
	const handleIncreasePagination = (number: number) => {
		// disable increase when at the last index
		if (number === pageNumbers.length) {
			return;
		}
		paginate(number + 1);
	};

	// when clicking arrow to increase page number "<"
	const handleDecreasePagination = (number: number) => {
		// disable decrease when at page 1
		if (number === 1) {
			return;
		}
		// time to show "..." and last index when decreasing on "<" button
		if (number === pageNumbers[pageNumbers.length - 7]) {
			isEndOfPagination = true;
		}
		paginate(number - 1);
	};

	// when clicking on the last page index beside "..." _X_
	const handleClickLastOfPagination = (number: number) => {
		paginate(number);
		setEndOfPaginationSegment(number);
		setStartOfPaginationSegment(number - 4);
	};

	// when not at last page index AND end of segment, show higher page numbers/new segment
	if (
		currentPage !== pageNumbers.length &&
		currentPage === endOfPaginationSegment
	) {
		setStartOfPaginationSegment(startOfPaginationSegment + 1);
		setEndOfPaginationSegment(endOfPaginationSegment + 1);
	}

	// when not at page 1 AND start of segment, show lower page numbers/new segment
	if (currentPage !== 1 && currentPage === startOfPaginationSegment) {
		setStartOfPaginationSegment(startOfPaginationSegment - 1);
		setEndOfPaginationSegment(endOfPaginationSegment - 1);
	}

	// if the end of segment is the last or second to last page numbers, hide => "..." _X_
	if (
		endOfPaginationSegment === pageNumbers.length ||
		endOfPaginationSegment === pageNumbers[pageNumbers.length - 2]
	) {
		isEndOfPagination = true;
	}

	return (
		<Grid item container>
			<ButtonGroup className={classes.buttonGroup}>
				<IconButton
					aria-label="går ej paginera bakåt"
					edge="start"
					disabled={currentPage === startOfPaginationSegment}
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
										aria-label="pagineringsnummer"
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
									aria-label="pagineringsnummer"
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
					<Button
						aria-label="finns fler dolda paginationer"
						className={`${classes.paginationButton} ${classes.threeDotsButton}`}
					>
						...
					</Button>
				)}
				{pageNumbers.length > pageNumbersInSegment && !isEndOfPagination && (
					<Button
						aria-label="paginera bakåt"
						name="paginera bakåt"
						className={classes.paginationButton}
						onClick={() => handleClickLastOfPagination(pageNumbers.length)}
					>
						{pageNumbers.length}
					</Button>
				)}
				<IconButton
					aria-label="paginera framåt"
					disabled={currentPage === endOfPaginationSegment}
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
