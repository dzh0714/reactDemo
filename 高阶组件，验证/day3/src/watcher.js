class Watcher {
    constructor() {
        this.listeners = {};
    }

    on(key, callback) {
        if (this.listeners[key instanceof Array]) {
            this.listeners[key].push(callback);
        } else {
            this.listeners[key] = [callback];
        }
    }

    emit(key, msg) {
        this.listeners[key].forEach((callback) => {
            callback(msg);
        })
    }
}


export default Watcher