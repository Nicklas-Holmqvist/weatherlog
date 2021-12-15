import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';

function App() {
	const [api, setApi] = useState<string>('');

	useEffect(() => {
		const options = {
			method: 'get',
		};
		const fetchApi = async () => {
			await fetch('/api/hello-server', options)
				.then(function (res) {
					if (res.status === 400) {
						return;
					}
					return res.json();
				})
				.then(function (data) {
					setApi(data);
				})
				.catch(function (err) {
					console.error(err);
				});
		};

		fetchApi();
	});

	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<h1>{api}</h1>
				<Grid container direction="column">
					<Typography variant="h1">Exempeltext här</Typography>
					<Typography variant="h2">Exempeltext här</Typography>
					<Typography variant="h3">Exempeltext här</Typography>
					<Typography variant="h4">Exempeltext här</Typography>
					<Typography variant="h5">Exempeltext här</Typography>
					<Typography variant="h6">Exempeltext här</Typography>
					<Typography variant="subtitle1">Exempeltext här</Typography>
					<Typography variant="subtitle2">Exempeltext här</Typography>
					<Typography variant="body1">Exempeltext här</Typography>
					<Typography variant="body2">Exempeltext här</Typography>
				</Grid>
			</div>
		</ThemeProvider>
	);
}

export default App;
