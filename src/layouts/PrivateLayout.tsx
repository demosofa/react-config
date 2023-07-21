import { Navigate, Outlet } from 'react-router-dom';
import { getStorage } from 'utils/storage';

export default function PrivateLayout() {
	const role = getStorage('role');

	if (role != null) return <Outlet />;
	return <Navigate to="/login" />;
}
