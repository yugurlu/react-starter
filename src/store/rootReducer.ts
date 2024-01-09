import {combineReducers} from "redux";
import {cartReducer} from "./reducers/cartReducer";

// global depo
export const rootReducer = combineReducers({
	cart: cartReducer,
});
