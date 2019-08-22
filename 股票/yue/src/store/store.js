import {
    createStore
} from "redux";

import {
    persistStore,
    persistCombineReducers
} from 'redux-persist';

import storage from 'redux-persist/es/storage'


let list = (state = [], action) => {

    switch (action.type) {
        case 'ADD_MSG':
            action.item.flag = true;
            console.log(action.item.flag)
            action.item.btn2 = "已在该组"
            state.push(action.item);
            console.log(state);

            return [...state]
        default:
            return state
    }
}

let config = {
    key: "root",
    storage
}

let reducer = persistCombineReducers(config, {
    list
})

export let store = createStore(reducer);

export let perSist = persistStore(store)