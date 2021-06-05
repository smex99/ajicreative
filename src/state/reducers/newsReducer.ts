const initialState = { news: [] };

type Action = {
	type: string;
	payload: any[];
};

const newsReducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case 'SET_NEWS_FROM_API':
			return { news: [...action.payload] };
		default:
			return state;
	}
};

export default newsReducer;
