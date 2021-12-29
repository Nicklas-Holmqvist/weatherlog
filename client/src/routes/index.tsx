import {
	HomePage,
	RegisterPage,
	ExamplePage,
	LoginPage,
	Api,
	LandingPage,
	CreateLogPage
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
		path: '/home',
		element: <LandingPage />,
	},
];

export default routes;
