import { Route } from 'types/Route';
import routeBasedRole from 'utils/routeBasedRole';

import { Dashboard } from 'pages/Dashboard';
import { ROLE } from 'constants/Role';
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
