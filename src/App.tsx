import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import privateRoutes from 'routes/privateRoutes';
import publicRoutes from 'routes/publicRoutes';
import './App.css';

const router = createBrowserRouter([...privateRoutes, ...publicRoutes]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
