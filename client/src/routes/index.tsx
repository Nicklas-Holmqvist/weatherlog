import {
	HomePage,
	RegisterPage,
	ExamplePage,
	LoginPage,
	Api,
	LandingPage,
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
		path: '/home',
		element: <LandingPage />,
	},
];

export default routes;
