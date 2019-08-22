let createStore = require('redux').createStore;

let reducer = (state = 0, action) => {
    switch (action.type) {
        case "add":
            return state += 1;
        case "reduce":
            state -= 1
            if (state < 0) {
                return 0
            }
            return state
        case "cls":
            return state = 0;
        default:
            return state
    }
}

let store1 = createStore(reducer);
export default store1