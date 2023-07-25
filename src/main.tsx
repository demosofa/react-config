import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import './utils/initI18';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import privateRoutes from 'routes/privateRoutes';
import publicRoutes from 'routes/publicRoutes';

const router = createBrowserRouter([...privateRoutes, ...publicRoutes]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
