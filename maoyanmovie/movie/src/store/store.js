import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistCombineReducers, persistStore } from "redux-persist"
import storage from "redux-persist/es/storage";
import thunk from "redux-thunk"



let dataList = (state = [], action) => {
    switch (action.type) {
        case "ADD_DATA":
            state = action.data
            return state
        default:
            return state
    }
}
let config = {
    key: "root",
    storage
}

let reducer = persistCombineReducers(config, {
    dataList
})


export let store = createStore(reducer, applyMiddleware(thunk));
export let perSist = persistStore(store)