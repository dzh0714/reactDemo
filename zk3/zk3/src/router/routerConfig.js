import Moni from "../components/moni";
import Index from "../components/index"

export default {
    routes: [{
        redirect: "/index",
        path: "/"
    }, {
        path: "/moni",
        component: Moni
    }, {
        path: "/index",
        component: Index
    }]
}