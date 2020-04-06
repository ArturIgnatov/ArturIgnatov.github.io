import { createStore, combineReducers } from "redux";
import StartPageReducer from "./startpage-reducer";


let reducers = combineReducers ({
	startPage: StartPageReducer
});


let store = createStore(reducers);


window.store = store;

export default store;