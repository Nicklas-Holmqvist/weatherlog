import { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import './App.css';
import theme from './theme';
import routes from './routes';

function App() {

	return (
		<ThemeProvider theme={theme}>
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
