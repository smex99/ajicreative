const initialState = { news: [] };

type Action = {
	type: string;
	payload?: any;
};

const newsReducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case 'ADD_NEWS':
			return { ...action.payload };
		default:
			return state;
	}
};

export default newsReducer;
