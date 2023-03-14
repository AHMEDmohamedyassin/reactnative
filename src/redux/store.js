import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import MainReducer from './reducer/MainReducer'

const rootReducer = combineReducers({ MainReducer });

const Store = createStore(rootReducer , applyMiddleware(thunk));

export default Store;