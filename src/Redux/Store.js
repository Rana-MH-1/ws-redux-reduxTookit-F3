import { createStore } from "redux";
import CountReducer from './CountReducer'

export const Store = createStore((CountReducer),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())