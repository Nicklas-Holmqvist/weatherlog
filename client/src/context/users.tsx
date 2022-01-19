import React, {
	useState,
	useContext,
	createContext,
	FunctionComponent,
	useEffect,
} from 'react';

import { IUsers, IPassword, IChangePassword } from '../types/Users';

import { useAuthContext } from './auth'

export const UsersContext = createContext<Context>(undefined!);

type Context = {
	user: IUsers;
	viewUser: IUsers;
	password: IPassword;
	changePasswordSuccess: boolean
	errorMessage: { newPassword: string; oldPassword: string };
	error: { newPassword: boolean; oldPassword: boolean };
	deleteUser: () => void;
	changePassword: () => void;
	addUser: () => void;
	addUserInfo: () => void;
	editUser: () => void;
	handleChangePasswordSuccess: () => void;
	handleChange: (e: any) => void;
};

export const UsersProvider: FunctionComponent = ({ children }) => {

	const { isAuth } = useAuthContext()
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

	const [user, setUser] = useState<IUsers>({
		email: '',
		city: '',
		firstName: '',
		lastName: '',
	});

	const [viewUser, setViewUser] = useState<IUsers>({
		city: '',
		firstName: '',
		lastName: '',
	});

	const [changePasswordSuccess, setChangePasswordSuccess] = useState<boolean>(false)

	const [password, setPassword] = useState<IPassword>(emptyPassword);

	const [errorMessage, setErrorMessage] = useState({
		oldPassword: '',
		newPassword: '',
	});
	const [error, setError] = useState({
		oldPassword: false,
		newPassword: false,
	});

	const handleChangePasswordSuccess = () => {
		setChangePasswordSuccess(false)
	}

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
	const handleErrorChangePassword = (e: IChangePassword) => {
		setErrorMessage(emptyErrorMessage);
		setError(emptyError);
		setChangePasswordSuccess(false)
		if (e.code === 400) {
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
		if (e.code === 401) {
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
		setChangePasswordSuccess(true)
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
		})
	}

	useEffect(() => {
		if(!isAuth) {
			resetAtLogout()
		}
	},[isAuth])

	useEffect(() => {
		if(!isAuth) return
		fetch('/api/user', options.fetchUser)
			.then((res) => {
				if (res.status === 400) {
					return;
				}
				return res.json();
			})
			.then((data) => {
				setViewUser({
					firstName: data.firstName,
					lastName: data.lastName,
					city: data.city,
				})
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
	},[isAuth]);

	const addUser = async () => {
		await fetch('/api/user/register', options.addUser).catch((err) => {
			console.error(err);
		});
	};

	const addUserInfo = async () => {
		await fetch('/api/user/addUserInfo', options.addUserInfo).catch((err) => {
			console.error(err);
		});
	};

	const editUser = async () => {
		setViewUser({
			firstName: user.firstName,
			lastName: user.lastName,
			city: user.city,
		})
		await fetch(`/api/user/edit`, options.editUser).catch((err) => {
			console.error(err);
		});
	};

	const changePassword = async () => {
		await fetch(`/api/user/changePassword`, options.changePassword)
			.then((res) => {
				if (res.status === 400) {
					console.log('Lösenord ändrades inte');
				}
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
				handleChangePasswordSuccess,
				deleteUser,
				changePassword,
				addUser,
				addUserInfo,
				editUser,
				handleChange,
			}}
		>
			{children}
		</UsersContext.Provider>
	);
};

export const useUsersContext = () => useContext<Context>(UsersContext);
