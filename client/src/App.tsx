import { useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import './App.css';
import theme from './theme';
import routes from './routes';
import { Footer, Header } from './components';

function App() {
	useEffect(() => {
		const options = {
			method: 'get',
		};
		const fetchApi = async () => {
			await fetch('/api/logs', options)
				.then(function (res) {
					if (res.status === 400) {
						return;
					}
					return res.json();
				})
				.then(function (data) {
					console.log(data);
				})
				.catch(function (err) {
					console.error(err);
				});
		};

		fetchApi();
	});
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Header />
				<Routes>
					{routes.map(({ path, element }, key) => (
						<Route path={path} element={element} key={key} />
					))}
				</Routes>
				<Footer />
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
