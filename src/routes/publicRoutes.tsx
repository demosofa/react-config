import { Homepage } from 'pages/Homepage';
import { Login } from 'pages/Login';
import { Forbidden } from 'pages/Forbidden';
import { RouteObject } from 'react-router-dom';

const publicRoutes: RouteObject[] = [
	{ path: '/', element: <Homepage /> },
	{ path: '/login', element: <Login /> },
	{ path: '/403', element: <Forbidden /> },
];

export default publicRoutes;
