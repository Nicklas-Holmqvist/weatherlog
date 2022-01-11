export interface IUsers {
	email?: string,
	password?: string,
	city?: string,
	firstName?: string,
	lastName?: string,
}

export interface IPassword {
	oldPassword: string,
	newPassword: string
}

export interface IChangePassword {
	msg: string,
	boolean: boolean,
	code: number
}