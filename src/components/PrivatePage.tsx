import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { ROLE } from '@constants';
import { getStorage } from '@utils';

export function PrivatePage({
	children,
	roles,
}: PropsWithChildren<{ roles: ROLE[] }>) {
	const role = getStorage('role') as ROLE;
	const checkRole = roles.some((item) => item === role);

	if (checkRole) return children;
	return <Navigate to="/403" />;
}
