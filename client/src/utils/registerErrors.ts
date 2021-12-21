export const getEmailError = (emailError: {
	empty: boolean;
	format: boolean;
	alreadyRegistered: boolean;
}) => {
	if (emailError.empty) return true;
	if (emailError.format) return true;
	if (emailError.alreadyRegistered) return true;
};

export const getEmailErrorText = (emailError: {
	empty: boolean;
	format: boolean;
	alreadyRegistered: boolean;
}) => {
	if (emailError.empty) return 'Vänligen fyll i fältet för email';
	if (emailError.format) return 'Vänligen ange en korrekt email-adress';
	if (emailError.alreadyRegistered)
		return 'Denna email finns redan registrerad';
};

export const getPasswordError = (passwordError: {
	empty: boolean;
	tooShort: boolean;
	format: boolean;
	notMatching: boolean;
}) => {
	if (passwordError.empty) return true;
	if (passwordError.tooShort) return true;
	if (passwordError.format) return true;
	if (passwordError.notMatching) return true;
};

export const getPasswordErrorText = (passwordError: {
	empty: boolean;
	tooShort: boolean;
	format: boolean;
	notMatching: boolean;
}) => {
	if (passwordError.empty) return 'Vänligen fyll i fältet för lösenord';
	if (passwordError.tooShort) return 'Lösenordet måste bestå av minst 6 tecken';
	if (passwordError.format)
		return 'Lösenordet måste bestå av minst en bokstav och en siffra';
	if (passwordError.notMatching) return 'Lösenorden matchar inte';
	return null;
};

export const testEmailForErrors = (email: string) => {
	if (email === '') {
		const emailError = {
			empty: true,
			format: false,
			alreadyRegistered: false,
		};
		console.log('från function' + emailError);
		return emailError;
	} else if (!email.includes('@' && '.')) {
		const emailError = {
			empty: false,
			format: true,
			alreadyRegistered: false,
		};
		console.log('från function' + emailError);
		return emailError;
	} else {
		const emailError = {
			empty: false,
			format: false,
			alreadyRegistered: false,
		};
		console.log('från function' + emailError);
		return emailError;
	}
};

export const testPasswordForErrors = (
	password: string,
	passwordToConfirm: string
) => {
	if (password === '') {
		const passwordError = {
			empty: true,
			tooShort: false,
			format: false,
			notMatching: false,
		};
		console.log('från function' + passwordError);
		return passwordError;
	} else if (password.length < 6) {
		const passwordError = {
			empty: false,
			tooShort: true,
			format: false,
			notMatching: false,
		};
		console.log('från function' + passwordError);
		return passwordError;
	} else if (!/([A-Za-z._-]{0,})\d\w+/.test(password)) {
		//funkar ej med endast siffror eller endast 1 siffra...
		const passwordError = {
			empty: false,
			tooShort: false,
			format: true,
			notMatching: false,
		};
		console.log('från function' + passwordError);
		return passwordError;
	} else if (password !== passwordToConfirm) {
		const passwordError = {
			empty: false,
			tooShort: false,
			format: false,
			notMatching: true,
		};
		console.log('från function' + passwordError);
		return passwordError;
	} else {
		const passwordError = {
			empty: false,
			tooShort: false,
			format: false,
			notMatching: false,
		};
		console.log('från function' + passwordError);
		return passwordError;
	}
};
