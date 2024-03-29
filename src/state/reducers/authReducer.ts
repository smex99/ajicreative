const initialState: IAuthState = {
	email: 'john.doe@email.com',
	accessCode: '',
	user: {
		firstName: 'John',
		lastName: 'Doe',
		email: '',
	},
};

interface IAuthState {
	email: string;
	accessCode: string;
	user: IUserSubscription;
}

interface IUserSubscription {
	firstName: string;
	lastName: string;
	email: string;
}

interface IUserEmailAction {
	type: 'USER_EMAIL';
	payload: IUserSubscription;
}

interface IUserInformationsAction {
	type: 'USER_INFORMATIONS';
	payload: string;
}

type Action = IUserEmailAction | IUserInformationsAction;

const authReducer = (state: IAuthState = initialState, action: Action) => {
	switch (action.type) {
		case 'USER_EMAIL':
			return { ...state, email: action.payload };
		case 'USER_INFORMATIONS':
			return { ...state, user: action.payload };
		default:
			return state;
	}
};

export default authReducer;
