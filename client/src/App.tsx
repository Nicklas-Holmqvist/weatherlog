import { ThemeProvider } from '@material-ui/core/styles';

import { LogsProvider } from './context/logs';
import { UsersProvider } from './context/users';
import { DiagramProvider } from './context/diagram';
import { AuthProvider } from './context/auth';

import { HelmetProvider } from 'react-helmet-async';

import {Layout} from './components';

import './App.css';
import theme from './theme';

function App() {
	
	return (
		<ThemeProvider theme={theme}>
			<HelmetProvider>
				<AuthProvider>
					<LogsProvider>
						<UsersProvider>
							<DiagramProvider>
								<Layout />
							</DiagramProvider>
						</UsersProvider>
					</LogsProvider>
				</AuthProvider>
			</HelmetProvider>
		</ThemeProvider>
	);
}

export default App;
