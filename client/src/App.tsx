import { ThemeProvider } from '@material-ui/core/styles';

import { LogsProvider } from './context/logs';
import { UsersProvider } from './context/users';
import { DiagramProvider } from './context/diagram';
import { AuthProvider } from './context/auth';

import Routes from './routes/Routes';

import './App.css';
import theme from './theme';

function App() {
	
	return (
		<ThemeProvider theme={theme}>
			<AuthProvider>
				<LogsProvider>
					<UsersProvider>
						<DiagramProvider>
							<Routes />
						</DiagramProvider>
					</UsersProvider>
				</LogsProvider>
			</AuthProvider>
		</ThemeProvider>
	);
}

export default App;
