import { RouteObject } from 'react-router-dom';
import { Homepage, Login, Forbidden } from '@pages';

const publicRoutes: RouteObject[] = [
	{ path: '/', element: <Homepage /> },
	{ path: '/login', element: <Login /> },
	{ path: '/403', element: <Forbidden /> },
];

export default publicRoutes;
