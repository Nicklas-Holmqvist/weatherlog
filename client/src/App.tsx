import { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import './App.css';
import theme from './theme';
import routes from './routes';

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
			<Typography variant="h2">{api}</Typography>
			<BrowserRouter>
				<Routes>
					{routes.map(({ path, element }, key) => (
						<Route path={path} element={element} key={key} />
					))}
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
