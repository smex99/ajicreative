interface IUserInformations {
	firstName: string;
	lastName: string;
	email: string;
}

export const setUserEmail = (email: string) => {
	return {
		type: 'USER_EMAIL',
		payload: email,
	};
};

export const setUserInformations = (data: IUserInformations) => {
	return {
		type: 'USER_INFORMATIONS',
		payload: data,
	};
};
