import { useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { UsersProvider } from './context/users';
import { LogsProvider } from './context/logs';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import './App.css';
import theme from './theme';
import routes from './routes';
import { Footer, Header } from './components';

function App() {
	
	return (
		<ThemeProvider theme={theme}>
			<LogsProvider>
				<UsersProvider>
					<BrowserRouter>
						<Header />
						<Routes>
							{routes.map(({ path, element }, key) => (
								<Route path={path} element={element} key={key} />
							))}
						</Routes>
						<Footer />
					</BrowserRouter>
				</UsersProvider>
			</LogsProvider>
		</ThemeProvider>
	);
}

export default App;
