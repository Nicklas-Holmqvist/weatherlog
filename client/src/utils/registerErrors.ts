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
	if (emailError.format) return 'Vänligen ange en korrekt email-adress ex. namn@domän.se';
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