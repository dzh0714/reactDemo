import { createStore, combineReducers } from "redux";

let account = (state = [], action) => {
    switch (action.type) {
        case "ADD_ACCOUNT":
            state.push({ account: action.account, money: action.money, txt: action.txt });
            return [...state];
        default:
            return [...state]
    }
}
let reducer = combineReducers({
    account
})

let store = createStore(reducer);


export default store