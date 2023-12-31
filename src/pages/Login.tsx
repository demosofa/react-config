import { FormEventHandler, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { UserLogin } from 'types';
import { LOCALE, ROLE } from '@constants';
import { getStorage, setStorage, clone } from 'utils';

export function Login() {
	const role = getStorage('role');

	const { t } = useTranslation();
	const navigate = useNavigate();

	const [user, setUser] = useState<Partial<UserLogin>>({});

	const handleChangeUser = (value: string, key: keyof UserLogin) => {
		setUser((prev) => {
			prev = clone(prev);
			prev[key] = value;
			return prev;
		});
	};

	const handleLogin: FormEventHandler = (e) => {
		e.preventDefault();
		if (user.username) {
			const roleLogin = user.username.toUpperCase() as keyof typeof ROLE;
			if (Object.keys(ROLE).includes(roleLogin)) {
				setStorage('role', ROLE[roleLogin]);
			}
		}
		navigate('/');
	};

	useEffect(() => {
		if (role != null) navigate('/');
	}, [role]);

	return (
		<form onSubmit={handleLogin}>
			<h3>{t(LOCALE.Login)}</h3>
			<label>Username</label>
			<input onChange={(e) => handleChangeUser(e.target.value, 'username')} />
			<label>Password</label>
			<input
				type="password"
				onChange={(e) => handleChangeUser(e.target.value, 'password')}
			/>
			<button type="submit">Login</button>
		</form>
	);
}
