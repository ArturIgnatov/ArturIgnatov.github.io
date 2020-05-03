import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'
import StartPageReducer from "./startpage-reducer";
import OrderPageReducer from "./orderpage-reducer";
import AdminPageReducer from "./admin-page";


let reducers = combineReducers ({
	startPage: StartPageReducer,
	orderPage: OrderPageReducer,
	adminPage: AdminPageReducer
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));


window.store = store;

export default store;