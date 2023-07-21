import { ROLE } from 'constants/Role';
import { FormEventHandler, useEffect, useState } from 'react';
import { UserLogin } from 'types/User';
import { getStorage, setStorage } from 'utils/storage';
import { useNavigate } from 'react-router-dom';
import clone from 'utils/clone';

export function Login() {
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
		navigate(-2);
	};

	useEffect(() => {
		const check = getStorage('role');
		if (check != null) navigate(-2);
	}, []);

	return (
		<form onSubmit={handleLogin}>
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
