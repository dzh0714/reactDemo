import { createStore, combineReducers, applyMiddleware } from "redux";
import axios from "axios";
import thunk from "redux-thunk"

let allList = (state = [], action) => {
    switch (action.type) {
        case "ADD_ALL":
            state = action.data;
            return [...state];
            // case "PREV":
            //     return [...state];
        default:
            return state;
    }
}

let reducer = combineReducers({
    allList
})

let store = createStore(reducer, applyMiddleware(thunk));

export default store