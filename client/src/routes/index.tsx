import { HomePage, ExamplePage } from '~src/pages';

export const routes = [
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/example',
		element: <ExamplePage />,
	},
];

export default routes;
