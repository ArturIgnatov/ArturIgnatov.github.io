import { geoAPI } from "../api/api"

const SET_CORDINATE_CITY = 'SET_CORDINATE_CITY'
const SET_CORDINATE_POINT = 'SET_CORDINATE_POINT'

let initialState = {
	city: null,
	point: []
}

const mapReducer = (state = initialState, action)=> {
	switch (action.type) {
		case SET_CORDINATE_CITY:
			return {
				...state,
				city: action.payload
			}
		case SET_CORDINATE_POINT:
			return {
				...state,
				point: [...state.point, action.payload]
			}	
		default:
			return state;
	}
}

const setCity = (payload) => ({ type: SET_CORDINATE_CITY, payload})
const setPoint = (payload) => ({ type: SET_CORDINATE_POINT, payload })

export const setGeoCity = (city) => {
	return (dispatch) => {
		geoAPI.getCity(city).then(response => {
			let { lat, lng } = response.results[0].geometry.location
			dispatch(setCity({lat,lng}))
		})
	}
}

export const setGeoPoint = (city, point, name) => {
	return (dispatch) => {
		geoAPI.getPoint(city, point).then(response => {
			let { lat, lng } = response.results[0].geometry.location
			dispatch(setPoint({city, point, name, lat, lng}))
		})
	}
}

export default mapReducer