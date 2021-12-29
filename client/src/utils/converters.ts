export const dotToCommaConverter = (value: string) => {
	const newValue = value.replaceAll('.', ',');
	return newValue;
};
