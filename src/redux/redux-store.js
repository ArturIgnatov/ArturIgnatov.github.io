import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'
import StartPageReducer from "./startpage-reducer";
import OrderPageReducer from "./orderpage-reducer";


let reducers = combineReducers ({
	startPage: StartPageReducer,
	orderPage: OrderPageReducer
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));


window.store = store;

export default store;