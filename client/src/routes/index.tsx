import {
	HomePage,
	RegisterPage,
	ExamplePage,
	LoginPage,
	Api,
	LandingPage,
	CreateLogPage,
	DiagramPage,
	DailyOverviewPage,
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
];

export const authRoutes = [
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
		path: '/log/:id',
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

]

