import DailyOverviewPage from 'src/pages/log';
import {
	HomePage,
	RegisterPage,
	ExamplePage,
	LoginPage,
	Api,
	LandingPage,
	CreateLogPage,
	DiagramPage,
	EditLogPage,
	SettingsPage,
} from '../pages';

export const routes = [
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/example',
		element: <ExamplePage />,
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/register',
		element: <RegisterPage />,
	},
	{
		path: '/api',
		element: <Api />,
	},
	{
		path: '/create-log',
		element: <CreateLogPage />,
	},
	{
		path: '/diagram/:id',
		element: <DiagramPage />,
	},
	{
		path: '/home',
		element: <LandingPage />,
	},
	{
		path: '/log',
		element: <DailyOverviewPage />,
	},
	{
		path: '/log/:id',
		element: <EditLogPage />,
	},
	{
		path: '/settings',
		element: <SettingsPage />,
	},
];

export default routes;
