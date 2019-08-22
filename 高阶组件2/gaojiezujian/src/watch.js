class Watch {
    constructor() {
        this.list = {}
    }
    on(key, callback) {
        if (this.list[key] instanceof Array) {
            this.lisy[key].push(callback)
        } else {
            this.list[key] = [callback]
        }
    }
    emit(key, msg) {
        this.list[key].forEach((callback) => {
            callback(msg)
        })
    }
}

export default Watch