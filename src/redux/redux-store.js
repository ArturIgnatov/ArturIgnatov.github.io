import { createStore, combineReducers } from "redux";
import slidersReducer from "./sliders-reduser";


let reducers = combineReducers ({
	slides: slidersReducer
});


let store = createStore(reducers);


window.store = store;

export default store;