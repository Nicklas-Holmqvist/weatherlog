export interface IUsers {
	email?: String,
	password?: string,
	city?: String,
	firstName?: String,
	lastName?: String,
}

export interface IPassword {
	oldPassword: String,
	newPassword: String
}

export interface IChangePassword {
	msg: String,
	boolean: boolean,
	code: number
}