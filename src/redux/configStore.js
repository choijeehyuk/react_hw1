import { createStore, combineReducers } from "redux";
import abc from './modules/bucket77';
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();
const rootReducer = combineReducers({ abc });

const store = createStore(rootReducer);

export default store;