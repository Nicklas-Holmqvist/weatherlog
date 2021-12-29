import {
	HomePage,
	RegisterPage,
	ExamplePage,
	LoginPage,
	Api,
	LandingPage,
	CreateLogPage,
	DiagramPage
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
		path: '/diagram',
		element: <DiagramPage />,
	},
	{
		path: '/home',
		element: <LandingPage />,
	},
];

export default routes;
