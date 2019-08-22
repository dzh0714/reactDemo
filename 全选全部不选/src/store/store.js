import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import list from './reducer/list';
let reducer = combineReducers({
    list
})
let store = createStore(reducer, applyMiddleware(thunk));
export default store