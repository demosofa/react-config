import { Dashboard } from '@pages';
import { ROLE } from '@constants';
import { Route } from '@types';
import routeBasedRole from './routeBasedRole';
import PrivateLayout from 'layouts/PrivateLayout';

const privateRoutes: Route[] = [
	{
		element: <PrivateLayout />,
		children: [
			{
				path: '/dashboard',
				element: <Dashboard />,
				roles: [ROLE.ADMIN],
			},
		],
	},
];

const routes = routeBasedRole(privateRoutes);

export default routes;
