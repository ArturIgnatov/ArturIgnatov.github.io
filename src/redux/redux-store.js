import { createStore, combineReducers } from "redux";
import StartPageReducer from "./startpage-reducer";
import OrderPageReducer from "./orderpage-reducer";


let reducers = combineReducers ({
	startPage: StartPageReducer,
	orderPage: OrderPageReducer
});


let store = createStore(reducers);


window.store = store;

export default store;