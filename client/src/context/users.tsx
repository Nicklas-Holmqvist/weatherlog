import React, {
	useState,
	useContext,
	createContext,
	FunctionComponent,
	useEffect,
} from 'react';

import { IUsers, IPassword, IChangeErrors } from '../types/Users';

import { useAuthContext } from './auth';

export const UsersContext = createContext<Context>(undefined!);

type Context = {
	errorEmail: IChangeErrors;
	user: IUsers;
	viewUser: IUsers;
	password: IPassword;
	changePasswordSuccess: boolean;
	errorMessage: { newPassword: string; oldPassword: string };
	error: { newPassword: boolean; oldPassword: boolean };
	deleteUser: () => void;
	changePassword: () => void;
	addUser: () => void;
	editUser: () => void;
	handleChangePasswordSuccess: () => void;
	handleAfterChangedEmailSuccess: () => void;
	handleChange: (e: any) => void;
};

export const UsersProvider: FunctionComponent = ({ children }) => {
	const { isAuth } = useAuthContext();
	const emptyPassword = {
		oldPassword: '',
		newPassword: '',
	};

	const emptyErrorMessage = {
		oldPassword: '',
		newPassword: '',
	};

	const emptyError = {
		oldPassword: false,
		newPassword: false,
	};

	const emptyErrorEmail = {
		msg: '',
		boolean: true,
		success: false,
	};

	const [user, setUser] = useState<IUsers>({
		email: '',
		city: '',
		firstName: '',
		lastName: '',
	});

	const [viewUser, setViewUser] = useState<IUsers>({
		email: '',
		city: '',
		firstName: '',
		lastName: '',
	});

	const [changePasswordSuccess, setChangePasswordSuccess] =
		useState<boolean>(false);

	const [password, setPassword] = useState<IPassword>(emptyPassword);

	const [errorMessage, setErrorMessage] = useState({
		oldPassword: '',
		newPassword: '',
	});
	const [error, setError] = useState({
		oldPassword: false,
		newPassword: false,
	});

	const [errorEmail, setErrorEmail] = useState({
		msg: '',
		boolean: false,
		success: false,
	});

	const handleChangePasswordSuccess = () => {
		setChangePasswordSuccess(false);
	};

	const handleAfterChangedEmailSuccess = () => {
		setErrorEmail((oldstate) => ({
			...oldstate,
			success: false,
		}));
	};

	/**
	 * Handle input changes in setting page
	 * @param e value from inpufields in settings page
	 * @returns
	 */
	const handleChange = (e: any) => {
		const value = e.target.value;
		const name = e.target.name;

		if (name === 'oldPassword' || name === 'newPassword') {
			setPassword({
				...password,
				[name]: value,
			});
		}
		setUser({
			...user,
			[name]: value,
		});
	};

	/** Handle incoming errors from ChangePassword API */
	const handleErrorChangeEmail = (e: IChangeErrors) => {
		setErrorEmail(emptyErrorEmail);
		if (e.code === 401) {
			setErrorEmail((oldstate) => ({
				...oldstate,
				boolean: true,
				msg: e.msg.toString(),
				success: false,
			}));
			return;
		} else {
			setErrorEmail((oldstate) => ({
				...oldstate,
				boolean: false,
				msg: '',
				success: true,
			}));
		}
		return;
	};

	/** Handle incoming errors from ChangePassword API */
	const handleErrorChangePassword = (e: IChangeErrors) => {
		setErrorMessage(emptyErrorMessage);
		setError(emptyError);
		setChangePasswordSuccess(false);
		if (e.code === 404) {
			setError((oldstate) => ({
				...oldstate,
				oldPassword: true,
			}));
			setErrorMessage((oldstate) => ({
				...oldstate,
				oldPassword: e.msg.toString(),
			}));
			return;
		}
		if (e.code === 406 || e.code === 409) {
			setError((oldstate) => ({
				...oldstate,
				newPassword: true,
			}));
			setErrorMessage((oldstate) => ({
				...oldstate,
				newPassword: e.msg.toString(),
			}));
			return;
		}
		setChangePasswordSuccess(true);
	};

	const options = {
		fetchUser: { method: 'get' },
		addUser: {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(''),
		},
		addUserInfo: {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(user),
		},
		editUser: {
			method: 'put',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(user),
		},
		changePassword: {
			method: 'put',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(password),
		},
		deleteUser: {
			method: 'delete',
			headers: { 'Content-Type': 'application/json' },
		},
	};

	const resetAtLogout = () => {
		setViewUser({
			firstName: '',
			lastName: '',
			city: '',
		});
	};

	useEffect(() => {
		if (!isAuth) {
			resetAtLogout();
		}
	}, [isAuth]);

	useEffect(() => {
		if (!isAuth) return;
		fetch('/api/user', options.fetchUser)
			.then((res) => {
				if (res.status === 401) {
					console.log('Ingen inloggning!');
					return;
				}
				return res.json();
			})
			.then((data) => {
				setViewUser({
					email: data.email,
					firstName: data.firstName,
					lastName: data.lastName,
					city: data.city,
				});
				setUser({
					email: data.email,
					firstName: data.firstName,
					lastName: data.lastName,
					city: data.city,
				});
			})
			.catch((err) => {
				console.error(err);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuth]);

	const addUser = async () => {
		await fetch('/api/user/register', options.addUser).catch((err) => {
			console.error(err);
		});
	};

	const editUser = async () => {
		setViewUser({
			...viewUser,
			email: user.email,
			firstName: user.firstName,
			lastName: user.lastName,
			city: user.city,
		});
		await fetch(`/api/user/edit`, options.editUser)
			.then((res) => {
				if (res.status === 401)
					console.log('Emailen har fel format ex. namne@domän.se');
				if (res.status === 409) console.log('Emailen finns redan registrerad!');
				else return res.json();
			})
			.then((data) => {
				if (data === undefined) return;
				handleErrorChangeEmail(data);
			})
			.catch((err) => {
				console.error(err);
			});
	};

	const changePassword = async () => {
		await fetch(`/api/user/changePassword`, options.changePassword)
			.then((res) => {
				if (res.status === 404) console.log('Gamla lösenordet stämmer inte');
				if (res.status === 406)
					console.log('Lösenordet måste vara minst 6 tecken');
				if (res.status === 409)
					console.log('Du kan inte använda samma lösenord');
				return res.json();
			})
			.then((data) => {
				handleErrorChangePassword(data);
			})
			.catch((err) => {
				console.error(err);
			});
		setPassword(emptyPassword);
	};

	const deleteUser = async () => {
		await fetch(`/api/user/delete`, options.deleteUser).catch((err) => {
			console.error(err);
		});
	};

	return (
		<UsersContext.Provider
			value={{
				viewUser,
				user,
				password,
				error,
				errorMessage,
				changePasswordSuccess,
				errorEmail,
				handleAfterChangedEmailSuccess,
				handleChangePasswordSuccess,
				deleteUser,
				changePassword,
				addUser,
				editUser,
				handleChange,
			}}
		>
			{children}
		</UsersContext.Provider>
	);
};

export const useUsersContext = () => useContext<Context>(UsersContext);
