import { ROLE } from 'constants/Role';
import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { getStorage } from 'utils/storage';

export function PrivatePage({
	children,
	roles,
}: PropsWithChildren<{ roles: ROLE[] }>) {
	const role = getStorage('role') as ROLE;
	const checkRole = roles.some((item) => item === role);

	if (checkRole) return children;
	return <Navigate to="/403" />;
}
