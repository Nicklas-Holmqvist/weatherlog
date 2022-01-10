import { ThemeProvider } from '@material-ui/core/styles';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import { LogsProvider } from './context/logs';
import { UsersProvider } from './context/users';
import { DiagramProvider } from './context/diagram';

import { NoPage } from './components';
import './App.css';
import theme from './theme';
import {routes, authRoutes} from './routes';
import { Footer, Header } from './components';
import { LandingPage, LoginPage } from './pages';

function App() {
	const user = true
	return (
		<ThemeProvider theme={theme}>
			<LogsProvider>
				<UsersProvider>
					<DiagramProvider>
						<BrowserRouter>
							<Header />
							<Routes>
								{!user ? <Route path='/' element={<LoginPage />} /> : <Route path='/' element={<LandingPage />}	/>}
								{routes.map(({ path, element }, key) => (<Route path={path} element={element} key={key} />))}							
								{user ? authRoutes.map(({ path, element }, key) => (<Route path={path} element={element} key={key} />)) : <Route path='/' element={<LoginPage />} />}								
								<Route path='*' element={<NoPage />} />
							</Routes>
							{/* <Footer /> */}
						</BrowserRouter>
					</DiagramProvider>
				</UsersProvider>
			</LogsProvider>
		</ThemeProvider>
	);
}

export default App;
