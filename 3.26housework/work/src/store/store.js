import { combineReducers, createStore } from "redux"

let account = (state =  [{ account: "工资", money: 20, timer: "2018-3-12", type: "个人", cont: "aa" }], action) => {
    switch (action.type) {
        case 'ADD_ACCOUNT':
            state.push({ account: action.account, money: action.money, timer: action.timer, types: action.types, cont: action.cont })
            console.log(state)
            return [...state]
        default:
            return state
    }
}
let reducer = combineReducers({
    account
})


let store = createStore(reducer)
export default store;