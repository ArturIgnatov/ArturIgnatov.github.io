const INITIAL_APP = 'INITIAL_APP';

let initialState = {
	_acsess_token: null,
	userid: null,
	loading: true,
	initialazedApp: false
}

const initializeReduser = (state = initialState, action) => {
	switch (action.type) {
		case INITIAL_APP:
			return {
				...state,
				_acsess_token: action.token,
				userid: action.userid,
				loading: false,
				initialazedApp: true
			}
		default:
			return state;
	}
};


export const prevSlideAC = (token, userid) => ({ type: INITIAL_APP, token, userid })





export default initializeReduser;