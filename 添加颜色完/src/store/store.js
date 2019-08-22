let createStore = require("redux").createStore
let reducer = (state = { num: 0, list: [{ msg: "Charlie Kelly", color: "#E84C3D" }], }, action) => {
    switch (action.type) {
        case "ADD-MSG":
            state.list.push({ msg: action.msg, color: action.color })
            return {...state }

        case "ENpoty":
            state.list.splice(action.index, 1)
            console.log(state);
            return {...state }
        default:
            return state
    }
}
let store = createStore(reducer)
export default store