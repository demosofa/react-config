import { Homepage } from 'pages/Homepage';
import { Login } from 'pages/Login';
import { Page403 } from 'pages/page403';
import { RouteObject } from 'react-router-dom';

const publicRoutes: RouteObject[] = [
	{ path: '/', element: <Homepage /> },
	{ path: '/login', element: <Login /> },
	{ path: '/403', element: <Page403 /> },
];

export default publicRoutes;
