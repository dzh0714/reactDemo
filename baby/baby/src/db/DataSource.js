import babySong from "../db/babySong.json";
let listeners = [];
export const DataSource = {
    //1:获取数据
    //2：添加发布，订阅

    getData(url) {
        if (url === "/song") {
            return babySong.list
        } else if (url === "/story") {

        } else if (url === "/cartoon") {

        }
    },

    addChangeListener(handle) {
        listeners.push(handle);
    },
    removeChangeListener(handle) {
        let newListeners = [];
        listeners.forEach((item, i) => {
            if (item !== handle) {
                newListeners.push(item);
            }
        });
        listeners = newListeners;
    },

    broadCastl() {
        listeners.map((handle) => {
            return handle()
        })
    }

}
export default DataSource