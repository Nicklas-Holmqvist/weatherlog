import {
	RegisterPage,
	LoginPage,
	LandingPage,
	CreateLogPage,
	DiagramPage,
	DailyOverviewPage,
	EditLogPage,
	SettingsPage,
	ContactPage,
} from '../pages';

export const routes = [
	{
		path: '/',
		element: <LoginPage />,
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
		path: '/contact',
		element: <ContactPage />,
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
];
